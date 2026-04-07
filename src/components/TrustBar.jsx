import React from 'react';

const partners = ['Forbes', 'NerdWallet', 'LendingTree', 'BBB A+'];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by business owners and backed by top funding partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map(name => (
            <span key={name} className="text-xl font-black text-gray-200 tracking-wide hover:text-[#C9A84C] transition-colors cursor-default">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}