import React from 'react';
import { Banknote, CreditCard, Landmark, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

const options = [
  {
    icon: Banknote,
    title: 'Merchant Cash Advances',
    desc: 'Funding based on your future sales with flexible repayment that adjusts with your revenue.',
    features: ['$5K – $500K funding', 'Repay as you earn', 'Quick approval'],
    num: '01',
  },
  {
    icon: CreditCard,
    title: 'Business Lines of Credit',
    desc: 'Access revolving funds when needed. Only pay interest on what you actually use.',
    features: ['$10K – $250K limits', 'Revolving credit', 'Draw funds 24/7'],
    num: '02',
  },
  {
    icon: Landmark,
    title: 'SBA Loans',
    desc: 'Government-backed loans with the most competitive rates and extended repayment terms.',
    features: ['Up to $5M funding', 'Lowest interest rates', 'Extended terms'],
    num: '03',
  },
  {
    icon: FileText,
    title: 'Term Loans',
    desc: 'Straightforward business loans with fixed monthly payments and predictable terms.',
    features: ['$5K – $500K', 'Fixed payments', 'Up to 5-year terms'],
    num: '04',
  },
];

export default function FundingOptions() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] leading-tight">
              Funding options<br />built for you.
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            We connect you with the right solution from our network of trusted lenders, banks, and SBA partners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 group hover:bg-[#1C1C1C] transition-colors duration-300 flex flex-col"
            >
              <div className="text-xs font-bold text-gray-300 group-hover:text-[#A0654A]/50 mb-6 transition-colors">{opt.num}</div>
              <div className="w-10 h-10 border border-gray-200 group-hover:border-[#A0654A]/30 flex items-center justify-center mb-6 transition-colors">
                <opt.icon className="w-5 h-5 text-[#A0654A]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C] group-hover:text-white mb-3 transition-colors">{opt.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6 leading-relaxed flex-1 transition-colors">{opt.desc}</p>
              <ul className="space-y-1.5 mb-6">
                {opt.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-[#A0654A]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#A0654A] uppercase tracking-widest hover:underline"
              >
                Apply Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}