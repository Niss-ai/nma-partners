import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Marcus T.',
    business: 'Restaurant Owner — Brooklyn, NY',
    text: "The whole process was incredibly smooth from start to finish. I submitted my application, got a call the same day, and within 48 hours everything was handled. No runaround, no confusion — just a clear path to funding.",
    stars: 5,
    highlight: 'Smooth Process',
  },
  {
    name: 'David R.',
    business: 'Auto Shop Owner — Los Angeles, CA',
    text: "I was blown away by the terms I got. Lower rates than I expected and a repayment schedule that actually worked for my business cycle. NMA Partners clearly knew how to match me with the right lender.",
    stars: 5,
    highlight: 'Great Terms & Rate',
  },
  {
    name: 'James L.',
    business: 'General Contractor — Houston, TX',
    text: "I needed a significant amount to purchase new equipment and take on a major project. NMA came through with $220,000 — more than I thought I could qualify for. It completely changed what we were able to do.",
    stars: 5,
    highlight: 'Great Dollar Amount',
  },
  {
    name: 'Priya M.',
    business: 'Medical Practice — Orlando, FL',
    text: "We needed capital quickly to expand our office space before our lease offer expired. NMA Partners had funds in our account in under 24 hours. I cannot recommend them enough for anyone in a time-sensitive situation.",
    stars: 5,
    highlight: 'Fast Funding',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] leading-tight">
            Real businesses,<br />real results.
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-sm leading-relaxed">
            Here is what business owners across the country say about working with NMA Partners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 flex flex-col"
            >
              <span className="text-xs font-bold text-[#A0654A] uppercase tracking-widest mb-4">{t.highlight}</span>
              <Quote className="w-6 h-6 text-[#A0654A]/20 mb-3" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#A0654A] text-[#A0654A]" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="font-bold text-[#1C1C1C] text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.business}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Reviews collected from Google and direct client feedback
        </p>
      </div>
    </section>
  );
}