'use client';

import React, { useState } from 'react';
import { Shield, TrendingUp, DollarSign, ArrowUpRight, ArrowDownLeft, FileText, User, Globe, Lock, CheckCircle2 } from 'lucide-react';

export default function RTGIBPlatform() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Active customer state (simulating an authenticated institutional client)
  const clientData = {
    name: 'Eleanor Vance',
    accountId: 'RTGIB-2026-8842',
    accountType: 'Institutional Account',
    status: 'Verified (KYC Level 2)',
    country: 'Cayman Islands',
    currency: 'USD',
    openingDate: 'January 14, 2026',
    ledgers: {
      withdrawableCash: 142500.00,
      investedCapital: 850000.00,
      promotionalCredits: 5000.00,
      restrictedBonuses: 10000.00,
      pendingDeposits: 25000.00,
      realisedPnL: 38400.50,
      unrealisedPnL: 62150.25
    }
  };

  const totalPortfolioValue = clientData.ledgers.withdrawableCash + clientData.ledgers.investedCapital + clientData.ledgers.unrealisedPnL;

  return (
    <div className="min-h-screen bg-[#0B192C] text-white font-sans antialiased">
      {/* Top Institutional Header */}
      <header className="border-b border-blue-900/50 bg-[#0B192C]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-[#0B192C] text-xl shadow-lg">
              RT
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white">RIGHT TRAJECTORY</span>
              <span className="block text-xs text-amber-400 font-semibold tracking-widest">GLOBAL INVESTMENT BROKERS</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => setActiveTab('dashboard')} className={`hover:text-amber-400 transition ${activeTab === 'dashboard' ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1' : ''}`}>Dashboard</button>
            <button onClick={() => setActiveTab('services')} className={`hover:text-amber-400 transition ${activeTab === 'services' ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1' : ''}`}>Services</button>
            <button onClick={() => setActiveTab('markets')} className={`hover:text-amber-400 transition ${activeTab === 'markets' ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1' : ''}`}>Markets</button>
            <button onClick={() => setActiveTab('jurisdictions')} className={`hover:text-amber-400 transition ${activeTab === 'jurisdictions' ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1' : ''}`}>Jurisdictions</button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400">Authenticated Client</p>
              <p className="text-sm font-bold text-amber-400">{clientData.name}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-900 border border-amber-400/40 flex items-center justify-center text-amber-400 font-semibold">
              EV
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Account Summary Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-[#0B192C] border border-blue-800/60 rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs px-3 py-1 rounded-full font-semibold">
                  {clientData.accountType}
                </span>
                <span className="text-slate-400 text-sm">ID: <strong className="text-white">{clientData.accountId}</strong></span>
                <span className="flex items-center text-emerald-400 text-xs bg-emerald-950/50 border border-emerald-800 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {clientData.status}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Portfolio Summary</h1>
              <p className="text-slate-400 text-sm mt-1">Jurisdiction: {clientData.country} • Base Currency: {clientData.currency}</p>
            </div>

            <div className="flex space-x-3">
              <button className="bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold px-5 py-2.5 rounded-lg shadow-lg transition flex items-center space-x-2">
                <ArrowDownLeft className="w-4 h-4" /><span>Deposit Funds</span>
              </button>
              <button className="bg-blue-900 hover:bg-blue-800 text-white border border-blue-700 font-semibold px-5 py-2.5 rounded-lg transition flex items-center space-x-2">
                <ArrowUpRight className="w-4 h-4" /><span>Withdrawal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Financial Ledgers & Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-6 backdrop-blur">
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Total Portfolio Value</p>
            <p className="text-3xl font-bold text-white mt-2">${totalPortfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-emerald-400 text-xs mt-2 flex items-center"><TrendingUp className="w-3.5 h-3.5 mr-1" /> +4.82% this month</p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-6 backdrop-blur">
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Withdrawable Cash Balance</p>
            <p className="text-3xl font-bold text-amber-400 mt-2">${clientData.ledgers.withdrawableCash.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-slate-400 text-xs mt-2">Available for immediate withdrawal or trade</p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-6 backdrop-blur">
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Invested Capital</p>
            <p className="text-3xl font-bold text-white mt-2">${clientData.ledgers.investedCapital.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-slate-400 text-xs mt-2">Equities, Bonds & Fixed Income</p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-6 backdrop-blur">
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Unrealised P&L</p>
            <p className="text-3xl font-bold text-emerald-400 mt-2">+${clientData.ledgers.unrealisedPnL.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-slate-400 text-xs mt-2">Realised P&L: +${clientData.ledgers.realisedPnL.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          </div>

        </div>

        {/* Segregated Ledgers Compliance Notice */}
        <div className="bg-blue-950/30 border border-blue-900/40 rounded-xl p-5 mb-8 flex items-start space-x-4">
          <Shield className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-300">
            <strong className="text-white block mb-1">Strict Financial Ledger Segregation Notice</strong>
            Promotional credits (${clientData.ledgers.promotionalCredits.toLocaleString()}) and restricted bonuses (${clientData.ledgers.restrictedBonuses.toLocaleString()}) are maintained in segregated ledger accounts in accordance with North American and Caribbean regulatory compliance frameworks and cannot be represented as withdrawable cash.
          </div>
        </div>

        {/* Recent Investment Holdings Table */}
        <div className="bg-slate-900/60 border border-blue-900/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Active Investment Holdings</h2>
            <button className="text-sm text-amber-400 hover:underline font-semibold">View All Holdings →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="border-b border-blue-900/50 text-slate-400 uppercase text-xs">
                <tr>
                  <th className="py-3 px-4">Asset / Instrument</th>
                  <th className="py-3 px-4">Asset Class</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Avg Cost</th>
                  <th className="py-3 px-4">Current Price</th>
                  <th className="py-3 px-4 text-right">Total Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900/30">
                <tr className="hover:bg-blue-950/20">
                  <td className="py-4 px-4 font-bold text-white">AAPL <span className="block text-xs font-normal text-slate-400">Apple Inc.</span></td>
                  <td className="py-4 px-4">International Equities</td>
                  <td className="py-4 px-4">450</td>
                  <td className="py-4 px-4">$175.20</td>
                  <td className="py-4 px-4">$189.45</td>
                  <td className="py-4 px-4 text-right font-bold text-emerald-400">$85,252.50</td>
                </tr>
                <tr className="hover:bg-blue-950/20">
                  <td className="py-4 px-4 font-bold text-white">US-GOV-10Y <span className="block text-xs font-normal text-slate-400">US Treasury Note 4.25%</span></td>
                  <td className="py-4 px-4">Government Bonds</td>
                  <td className="py-4 px-4">500,000</td>
                  <td className="py-4 px-4">$100.00</td>
                  <td className="py-4 px-4">$101.20</td>
                  <td className="py-4 px-4 text-right font-bold text-emerald-400">$506,000.00</td>
                </tr>
                <tr className="hover:bg-blue-950/20">
                  <td className="py-4 px-4 font-bold text-white">SPY <span className="block text-xs font-normal text-slate-400">SPDR S&P 500 ETF Trust</span></td>
                  <td className="py-4 px-4">Mutual Funds & ETFs</td>
                  <td className="py-4 px-4">650</td>
                  <td className="py-4 px-4">$480.10</td>
                  <td className="py-4 px-4">$512.80</td>
                  <td className="py-4 px-4 text-right font-bold text-emerald-400">$333,320.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
