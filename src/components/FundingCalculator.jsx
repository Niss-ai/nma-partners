import React, { useState, useMemo } from 'react';
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

export default function FundingCalculator() {
  const [amount, setAmount] = useState(50000);
  const [term, setTerm] = useState('12');

  const calc = useMemo(() => {
    const months = parseInt(term);
    const total = amount * 1.25;
    return { monthly: Math.round(total / months), total: Math.round(total), cost: Math.round(total - amount) };
  }, [amount, term]);

  return (
    <section className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">Calculator</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Estimate your<br />funding cost.
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Use our calculator to get a rough estimate of payments and total cost. Apply to receive your actual personalized offers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 p-8 md:p-10"
          >
            {/* Amount */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Funding Amount</label>
                <span className="text-2xl font-black text-[#C9A84C]">${amount.toLocaleString()}</span>
              </div>
              <Slider value={[amount]} onValueChange={([v]) => setAmount(v)} min={5000} max={500000} step={5000} />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>$5K</span><span>$500K</span>
              </div>
            </div>

            {/* Term */}
            <div className="mb-8">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-3">Repayment Term</label>
              <Select value={term} onValueChange={setTerm}>
                <SelectTrigger className="bg-transparent border-white/20 text-white focus:ring-[#C9A84C]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {['3','6','12','18','24'].map(m => (
                    <SelectItem key={m} value={m}>{m} Months</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Monthly Payment</span>
                <span className="text-3xl font-black text-white">${calc.monthly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Total Repayment</span>
                <span className="text-lg font-bold text-gray-300">${calc.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Total Cost</span>
                <span className="text-lg font-bold text-[#C9A84C]">${calc.cost.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4 leading-relaxed">Estimate only. Actual rates vary based on your qualifications and lender.</p>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8963e] text-white font-bold py-4 text-sm transition-colors group"
            >
              Get Your Actual Rates
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}