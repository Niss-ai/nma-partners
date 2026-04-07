import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Businesses Funded' },
  { value: '$50M+', label: 'Total Funding Delivered' },
  { value: '24hrs', label: 'Average Funding Time' },
  { value: '50+', label: 'Lending Partners' },
];

export default function StatsSection() {
  return (
    <section className="bg-[#A0654A] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#8a5240]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4 py-4"
            >
              <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
              <p className="mt-1 text-xs text-white/70 font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}