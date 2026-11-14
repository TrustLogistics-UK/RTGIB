import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      countryOfResidence,
      residentialAddress,
      dateOfBirth,
      nationality,
      preferredCurrency,
      accountType,
      password,
    } = body;

    // Validate required fields
    if (!fullName || !email || !password || !countryOfResidence) {
      return NextResponse.json(
        { success: false, error: 'Missing required registration fields.' },
        { status: 400 }
      );
    }

    // Check if customer already exists
    const existingCustomer = await prisma.customer.findUnique({
      where: { email },
    });

    if (existingCustomer) {
      return NextResponse.json(
        { success: false, error: 'An account with this email address already exists.' },
        { status: 409 }
      );
    }

    // Hash password securely
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Generate unique account number (e.g., RTGIB-2026-XXXX)
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const accountNumber = `RTGIB-2026-${randomDigits}`;

    // Create customer in PostgreSQL database
    const newCustomer = await prisma.customer.create({
      data: {
        accountNumber,
        fullName,
        email,
        phone,
        countryOfResidence,
        residentialAddress,
        dateOfBirth: new Date(dateOfBirth),
        nationality,
        preferredCurrency: preferredCurrency || 'USD',
        accountType: accountType || 'INDIVIDUAL',
        accountStatus: 'PENDING_KYC',
        passwordHash,
        withdrawableCash: 0.0,
        investedCapital: 0.0,
        promotionalCredits: 0.0,
      },
    });

    // Record immutable audit log
    await prisma.auditLog.create({
      data: {
        actorId: newCustomer.id,
        action: 'CUSTOMER_REGISTRATION',
        details: `New customer registered: ${email} in jurisdiction ${countryOfResidence}`,
      },
    });

    // Return success response (excluding password hash)
    const { passwordHash: _, ...customerWithoutPassword } = newCustomer;

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful. Account ID generated.',
        customer: customerWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error during registration.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        accountNumber: true,
        fullName: true,
        email: true,
        countryOfResidence: true,
        accountType: true,
        accountStatus: true,
        withdrawableCash: true,
        investedCapital: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ success: true, customers });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch customers.' }, { status: 500 });
  }
}
