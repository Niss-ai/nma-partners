import React from 'react';

const fundings = [
  { business: 'General Contractor — Houston, TX', amount: '$540,000' },
  { business: 'Restaurant Group — Brooklyn, NY', amount: '$85,000' },
  { business: 'Medical Practice — Orlando, FL', amount: '$310,000' },
  { business: 'Auto Repair Shop — Los Angeles, CA', amount: '$95,000' },
  { business: 'Retail Boutique — Atlanta, GA', amount: '$60,000' },
  { business: 'Transportation Co. — Dallas, TX', amount: '$175,000' },
];

export default function RecentFundings() {
  const doubled = [...fundings, ...fundings];
  return (
    <div className="bg-[#1C1C1C] py-4 overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: marquee-scroll 28s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      <div className="flex items-center">
        <div className="flex-shrink-0 px-6 text-[#C9A84C] font-bold text-xs uppercase tracking-widest whitespace-nowrap border-r border-white/10 mr-6">
          Recent Fundings
        </div>
        <div className="relative overflow-hidden flex-1">
          <div className="marquee-track">
            {doubled.map((item, idx) => (
              <div key={idx} className="flex items-center mx-10 text-sm">
                <span className="text-gray-400">{item.business}</span>
                <span className="text-[#C9A84C] font-bold ml-2">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}