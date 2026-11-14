'use client';

import { useState } from 'react';
import { Shield, TrendingUp, Globe, ArrowRight, Lock, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'register' | 'login'>('home');
  
  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    countryOfResidence: 'United States',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: '+10000000000',
          residentialAddress: 'Standard Institutional Address',
          dateOfBirth: '1990-01-01',
          nationality: 'US',
          preferredCurrency: 'USD',
          accountType: 'INDIVIDUAL',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({ type: 'success', text: `Account created successfully! Account Number: ${data.customer.accountNumber}` });
        setFormData({ fullName: '', email: '', password: '', countryOfResidence: 'United States' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Registration failed. Please check your inputs.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Network error. Please ensure your database is connected.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B192C] text-white flex flex-col justify-between selection:bg-[#D4AF37] selection:text-[#0B192C]">
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0B192C]/95 sticky top-0 z-50 backdrop-blur">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <Shield className="h-8 w-8 text-[#D4AF37]" />
          <div>
            <span className="font-bold text-lg tracking-wider text-white">RTGIB</span>
            <span className="block text-[10px] text-[#D4AF37] tracking-widest uppercase">Global Investment Brokers</span>
          </div>
        </div>
        <div className="space-x-3 md:space-x-4">
          <button 
            onClick={() => setActiveTab('login')}
            className="text-xs md:text-sm font-medium hover:text-[#D4AF37] transition px-2 py-1"
          >
            Client Login
          </button>
          <button 
            onClick={() => setActiveTab('register')}
            className="bg-[#D4AF37] text-[#0B192C] px-3 md:px-4 py-2 rounded font-semibold text-xs md:text-sm hover:bg-yellow-500 transition shadow-lg"
          >
            Open Account
          </button>
        </div>
      </nav>

      {/* Dynamic Content Area */}
      <div className="flex-1 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full">
        {activeTab === 'home' && (
          <div className="space-y-8 md:space-y-12 text-center py-8 md:py-12">
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 px-4 py-1.5 rounded-full text-xs text-[#D4AF37]">
              <Globe className="h-3.5 w-3.5" />
              <span>Multi-Jurisdictional Institutional Brokerage Platform</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              Institutional-Grade Wealth <br />
              <span className="text-[#D4AF37]">Across 36 Jurisdictions</span>
            </h1>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
              Secure multi-currency asset management, segregated financial ledgers, and institutional execution tailored for global investors.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button 
                onClick={() => setActiveTab('register')}
                className="bg-[#D4AF37] text-[#0B192C] font-bold px-8 py-3.5 rounded shadow-lg hover:bg-yellow-500 transition flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setActiveTab('login')}
                className="border border-gray-700 hover:border-[#D4AF37] px-8 py-3.5 rounded font-medium transition"
              >
                Access Dashboard
              </button>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 md:pt-16 text-left">
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <Shield className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1 text-white">Segregated Ledgers</h3>
                <p className="text-sm text-gray-400">Strict separation of withdrawable cash, invested capital, and promotional credits.</p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <TrendingUp className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1 text-white">Multi-Asset Execution</h3>
                <p className="text-sm text-gray-400">Trade equities, fixed income, ETFs, and foreign exchange seamlessly.</p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <UserCheck className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1 text-white">Instant Compliance</h3>
                <p className="text-sm text-gray-400">Automated KYC verification and audit trails built for regulatory standards.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-white">Open an Account</h2>
            <p className="text-sm text-gray-400 mb-6">Enter your details to initiate your institutional profile.</p>

            {message && (
              <div className={`p-3 rounded mb-4 text-xs flex items-start space-x-2 ${message.type === 'success' ? 'bg-green-900/40 border border-green-700 text-green-300' : 'bg-red-900/40 border border-red-700 text-red-300'}`}>
                {message.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400 mt-0.5" /> : <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />}
                <span>{message.text}</span>
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Full Legal Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe" 
                  className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@institution.com" 
                  className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Country of Residence</label>
                <input 
                  type="text" 
                  required
                  value={formData.countryOfResidence}
                  onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                  placeholder="United States" 
                  className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Password</label>
                <input 
                  type="password" 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••" 
                  className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#D4AF37] text-[#0B192C] font-bold py-3 rounded hover:bg-yellow-500 transition mt-2 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-4">
              Already have an account? <button onClick={() => setActiveTab('login')} className="text-[#D4AF37] underline">Log in</button>
            </p>
          </div>
        )}

        {activeTab === 'login' && (
          <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#D4AF37]" />
              Client Portal Login
            </h2>
            <p className="text-sm text-gray-400 mb-6">Access your segregated ledgers and live portfolios.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                <input type="email" placeholder="john@institution.com" className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <button className="w-full bg-[#D4AF37] text-[#0B192C] font-bold py-3 rounded hover:bg-yellow-500 transition mt-2">
                Secure Login
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              Need an account? <button onClick={() => setActiveTab('register')} className="text-[#D4AF37] underline">Register here</button>
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 text-center py-6 text-xs text-gray-500">
        © 2026 Right Trajectory Global Investment Brokers (RTGIB). All rights reserved.
      </footer>
    </main>
  );
}
