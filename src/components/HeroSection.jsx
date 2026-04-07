import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

const fundingReasons = ['Manage cash flow', 'Buy equipment', 'Grow my business', 'Cover expenses'];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#FAFAF8] overflow-hidden pt-20">
      {/* Gold accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#A0654A] via-[#c4896a] to-[#A0654A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[90vh] items-center gap-12 py-16 md:py-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#A0654A]/10 border border-[#A0654A]/20 px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#A0654A]" />
              <span className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest">Business Funding Specialists</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C1C1C] leading-[1.0] tracking-tight">
              Capital<br />
              <span className="text-[#A0654A]">up to</span><br />
              $1M.
            </h1>

            <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-md">
              Apply once. We bring you offers from multiple funders, banks, and SBA lenders to get you the best possible terms.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] hover:bg-[#333] text-white font-bold px-8 py-4 text-base transition-colors group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white font-bold px-8 py-4 text-base transition-all"
              >
                How It Works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-sm">
              {fundingReasons.map(r => (
                <div key={r} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#A0654A] flex-shrink-0" />
                  {r}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#A0654A]/30" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b41c6244e8d8d16b53d444/c3f93d6ef_generated_2fc8fb47.png"
                alt="Business funding professionals"
                className="relative w-full object-cover aspect-[4/3] grayscale-[20%]"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl border border-gray-100 p-5">
                <div className="text-3xl font-black text-[#1C1C1C]">$50M+</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Total Funding Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}