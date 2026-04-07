
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A0654A] via-[#c4896a] to-[#A0654A]" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-5xl md:text-6xl font-black text-[#1C1C1C] leading-tight">
              Ready to<br />grow your<br />business?
            </h2>
          </div>

          <div>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Apply in minutes and let NMA Partners find the best funding options for your business. No obligation, no hard credit pull.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] hover:bg-[#333] text-white font-bold px-8 py-4 transition-colors group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+19294158933"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#A0654A] text-[#A0654A] hover:bg-[#A0654A] hover:text-white font-bold px-8 py-4 transition-all"
              >
                <Phone className="w-5 h-5" />
                (929) 415-8933
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Funding advisors available Monday – Friday, 9am – 6pm EST
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div className="mt-24 border-t border-gray-200 pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-col items-start gap-1">
            <img
              src="/logo.png"
              alt="NMA Partners"
              className="h-10 w-auto"
            />
            <span className="text-xs text-gray-400">2002 Coney Island Ave, Brooklyn, NY 11223</span>
          </div>
          <span>© {new Date().getFullYear()} NMA Partners. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/PrivacyPolicy" className="hover:text-[#A0654A] transition-colors">Privacy Policy</a>
            <a href="/TermsAndConditions" className="hover:text-[#A0654A] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
