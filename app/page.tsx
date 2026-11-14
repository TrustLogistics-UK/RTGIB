'use client';

import { useState } from 'react';
import { Shield, TrendingUp, Globe, ArrowRight, Lock, UserCheck } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'register' | 'login'>('home');

  return (
    <main className="min-h-screen bg-[#0B192C] text-white flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0B192C]/90 sticky top-0 z-50 backdrop-blur">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <Shield className="h-8 w-8 text-[#D4AF37]" />
          <div>
            <span className="font-bold text-lg tracking-wider text-white">RTGIB</span>
            <span className="block text-[10px] text-[#D4AF37] tracking-widest uppercase">Global Investment Brokers</span>
          </div>
        </div>
        <div className="space-x-4">
          <button 
            onClick={() => setActiveTab('login')}
            className="text-sm font-medium hover:text-[#D4AF37] transition px-3 py-2"
          >
            Client Login
          </button>
          <button 
            onClick={() => setActiveTab('register')}
            className="bg-[#D4AF37] text-[#0B192C] px-4 py-2 rounded font-semibold text-sm hover:bg-yellow-500 transition shadow-lg"
          >
            Open Account
          </button>
        </div>
      </nav>

      {/* Dynamic Content Area Based on Button Clicks */}
      <div className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        {activeTab === 'home' && (
          <div className="space-y-12 text-center py-12">
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 px-4 py-1.5 rounded-full text-xs text-[#D4AF37]">
              <Globe className="h-3.5 w-3.5" />
              <span>Multi-Jurisdictional Institutional Brokerage Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Institutional-Grade Wealth <br />
              <span className="text-[#D4AF37]">Across 36 Jurisdictions</span>
            </h1>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Secure multi-currency asset management, segregated financial ledgers, and institutional execution tailored for global investors.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={() => setActiveTab('register')}
                className="bg-[#D4AF37] text-[#0B192C] font-bold px-8 py-3.5 rounded shadow-lg hover:bg-yellow-500 transition flex items-center space-x-2"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left">
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <Shield className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1">Segregated Ledgers</h3>
                <p className="text-sm text-gray-400">Strict separation of withdrawable cash, invested capital, and promotional credits.</p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <TrendingUp className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1">Multi-Asset Execution</h3>
                <p className="text-sm text-gray-400">Trade equities, fixed income, ETFs, and foreign exchange seamlessly.</p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
                <UserCheck className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-lg mb-1">Instant Compliance</h3>
                <p className="text-sm text-gray-400">Automated KYC verification and audit trails built for regulatory standards.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-white">Open an Account</h2>
            <p className="text-sm text-gray-400 mb-6">Enter your details to initiate your institutional profile.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Full Legal Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                <input type="email" placeholder="john@institution.com" className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#0B192C] border border-gray-700 rounded p-2.5 text-white text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <button className="w-full bg-[#D4AF37] text-[#0B192C] font-bold py-3 rounded hover:bg-yellow-500 transition mt-2">
                Create Account
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              Already have an account? <button onClick={() => setActiveTab('login')} className="text-[#D4AF37] underline">Log in</button>
            </p>
          </div>
        )}

        {activeTab === 'login' && (
          <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-2xl">
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
