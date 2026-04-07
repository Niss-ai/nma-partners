import React from 'react';
import { Zap, ShieldCheck, Users, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Zap, title: 'Fast Funding', desc: 'Get approved in minutes and receive funds as soon as the same day. No waiting weeks for a decision.' },
  { icon: ShieldCheck, title: 'No Hard Credit Pulls', desc: 'Check your eligibility without affecting your credit score. We use soft pulls for initial assessment.' },
  { icon: Users, title: 'Expert Guidance', desc: 'Our experienced advisors help you navigate options and find the best fit for your business needs.' },
  { icon: FileCheck, title: 'One Application, Multiple Offers', desc: "Apply once and we'll bring you offers from our network of 50+ lenders to find your best match." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">Why NMA Partners</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your funding<br />partner, not just<br />a lender.
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              We work to get you the best possible terms from our extensive network of 50+ lenders.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 p-5 hover:border-[#A0654A]/40 transition-colors"
                >
                  <f.icon className="w-5 h-5 text-[#A0654A] mb-3" />
                  <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#A0654A]/20" />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b41c6244e8d8d16b53d444/2b00cef96_generated_8a59617e.png"
              alt="Business team collaborating"
              className="relative w-full object-cover aspect-[4/3] grayscale-[30%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}