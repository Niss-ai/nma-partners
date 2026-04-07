import React from 'react';
import { Package, DollarSign, Building2, Megaphone, TrendingUp, Wrench, UserPlus, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';

const useCases = [
  { icon: Package, label: 'Purchase inventory' },
  { icon: DollarSign, label: 'Cover payroll' },
  { icon: Building2, label: 'Expand or renovate' },
  { icon: Megaphone, label: 'Launch marketing campaigns' },
  { icon: TrendingUp, label: 'Stabilize cash flow' },
  { icon: Wrench, label: 'Upgrade equipment' },
  { icon: UserPlus, label: 'Hire more employees' },
  { icon: Receipt, label: 'Consolidate business debt' },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/20" />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b41c6244e8d8d16b53d444/f6a196012_generated_c63df09a.png"
              alt="Business growth"
              className="relative w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">Use Your Funding For</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] mb-10 leading-tight">
              Move your<br />business forward.
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 border border-gray-100 bg-[#FAFAF8] px-4 py-3 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-colors group"
                >
                  <uc.icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1C1C1C]">{uc.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}