import React, { useState } from 'react';
import { Calculator, ArrowRightLeft, ShieldCheck, Zap, Info, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TransferCalculator({ onOpenAuth }) {
  const [sendAmount, setSendAmount] = useState(1000);
  const [senderCurrency, setSenderCurrency] = useState('ILS');
  const [targetCountry, setTargetCountry] = useState('PH');

  const destinations = [
    { code: 'PH', name: 'Philippines', flag: '🇵🇭', currency: 'PHP', symbol: '₱', rate: 15.65, bankFee: 45 },
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', symbol: '₹', rate: 22.80, bankFee: 50 },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵', currency: 'NPR', symbol: 'NRs', rate: 36.40, bankFee: 40 },
    { code: 'MD', name: 'Moldova', flag: '🇲🇩', currency: 'MDL', symbol: 'L', rate: 4.82, bankFee: 35 },
    { code: 'GE', name: 'Georgia', flag: '🇬🇪', currency: 'GEL', symbol: '₾', rate: 0.74, bankFee: 30 },
    { code: 'US', name: 'United States', flag: '🇺🇸', currency: 'USD', symbol: '$', rate: 0.27, bankFee: 25 },
  ];

  const activeDest = destinations.find(d => d.code === targetCountry) || destinations[0];
  
  // Math Calculations
  const ourFee = 0; // Money Low Cost promotion / low-cost transparent fee
  const exchangeRate = activeDest.rate;
  const recipientPayout = (sendAmount * exchangeRate).toLocaleString(undefined, {
    maximumFractionDigits: 2
  });
  const bankSavingsEstimate = Math.round(sendAmount * 0.045 + activeDest.bankFee);

  const handleCalculateClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenAuth('signup');
  };

  return (
    <section id="calculator" className="py-20 relative z-10">
      <div className="apple-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="apple-spec-tag inline-block mb-3">Live Exchange & Fee Estimator</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            See Exactly What They Receive.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden markups, no surprise charges. Calculate live rates and see how much you save compared to traditional wire services.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-4xl mx-auto apple-glass-card p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs (8 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Send Amount Input */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 focus-within:border-cyan-500/60 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    You Send Exactly
                  </label>
                  <span className="text-xs text-cyan-400 font-medium">Zero Commission Transfer</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="100"
                    max="50000"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-transparent text-3xl sm:text-4xl font-extrabold text-white focus:outline-none tracking-tight"
                  />
                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 px-4 py-2 rounded-xl text-white font-bold text-sm shrink-0">
                    <span>🇮🇱</span>
                    <span>ILS (₪)</span>
                  </div>
                </div>

                {/* Slider */}
                <div className="mt-4">
                  <input
                    type="range"
                    min="200"
                    max="20000"
                    step="100"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>₪200</span>
                    <span>₪10,000</span>
                    <span>₪20,000</span>
                  </div>
                </div>
              </div>

              {/* Destination Selector */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Recipient Destination & Currency
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {destinations.map((d) => (
                    <button
                      key={d.code}
                      onClick={() => setTargetCountry(d.code)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                        targetCountry === d.code
                          ? 'bg-cyan-500/15 border-cyan-500/60 text-white shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xl">{d.flag}</span>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-xs font-bold text-white truncate">{d.name}</span>
                        <span className="text-[10px] text-slate-400">{d.currency}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Rate Indicator Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/50 px-4 py-3 rounded-xl border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>Guaranteed Exchange Rate:</span>
                </div>
                <span className="font-bold text-white">
                  1 ILS = {activeDest.rate} {activeDest.currency}
                </span>
              </div>

            </div>

            {/* Right Summary Payout Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 rounded-2xl border border-cyan-500/30 flex flex-col justify-between shadow-2xl relative">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Recipient Receives
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    ⚡ Delivery ~ 3 Mins
                  </span>
                </div>

                {/* Big Payout Number */}
                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight">
                    {activeDest.symbol} {recipientPayout}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Direct to linked bank account / ATM Debit Card
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="flex flex-col gap-3 text-xs mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>Transfer Fee:</span>
                    <span className="text-emerald-400 font-bold">FREE ($0.00)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Delivery Guarantee:</span>
                    <span className="text-slate-200">Automated Instant Payout</span>
                  </div>
                  <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                    <span>Est. Savings vs Traditional Banks:</span>
                    <span className="text-cyan-400 font-bold">~ ₪{bankSavingsEstimate} Saved</span>
                  </div>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                onClick={handleCalculateClick}
                className="apple-btn-primary w-full justify-center text-sm !py-3.5 shadow-emerald-500/20"
              >
                <span>Send {sendAmount} ILS Now</span>
                <ArrowRightLeft className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-500 mt-3">
                * Zero hidden charges. Beneficiary linked card available instantly upon setup.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
