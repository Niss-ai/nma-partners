import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

const steps = [
  { num: '01', title: 'Complete Your Application', desc: 'Fill out our simple online application in just 5 minutes. Basic business and owner information is all we need to get started.' },
  { num: '02', title: 'We Bring You Offers', desc: 'Our team reviews your application and connects you with our network of funders, banks, and SBA lenders to find your best options.' },
  { num: '03', title: 'Get Funded', desc: "Review your offers, choose the best fit, and receive your funds — often as soon as the same day you're approved." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] leading-tight">
              Funding at<br />your speed.
            </h2>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Our streamlined process gets you from application to funding faster than any traditional lender.
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#A0654A] hover:bg-[#8a5240] text-white font-bold px-8 py-4 text-sm transition-colors group"
            >
              Start Your Application
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-px bg-gray-200">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8"
              >
                <div className="text-4xl font-black text-[#A0654A]/20 mb-6">{step.num}</div>
                <h3 className="text-base font-bold text-[#1C1C1C] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}