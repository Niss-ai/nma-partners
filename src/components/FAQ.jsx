import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    category: 'Eligibility & Requirements',
    items: [
      {
        q: 'What credit score do I need to qualify?',
        a: 'We work with a wide range of credit profiles. Many of our lenders can approve businesses with scores as low as 500. A lower score may affect the terms you receive, but it does not automatically disqualify you. We focus on your overall business health, not just your credit score.',
      },
      {
        q: 'How long does my business need to have been operating?',
        a: 'Most of our lending partners require a minimum of 6 months in business. Some programs, particularly SBA loans, may require 2+ years. We will match you with options that fit your specific timeline.',
      },
      {
        q: 'What industries do you work with?',
        a: 'We work with businesses across nearly every industry — restaurants, retail, medical, construction, transportation, e-commerce, salons, and more. A small number of industries (such as cannabis or gambling) may be restricted depending on the lender.',
      },
      {
        q: 'Do you work with startups or brand new businesses?',
        a: 'Some of our programs can accommodate newer businesses, though options are more limited under 6 months. If you are just starting out, reach out and we will let you know what may be available to you.',
      },
    ],
  },
  {
    category: 'Funding & Speed',
    items: [
      {
        q: 'How fast can I get funded?',
        a: 'Many of our clients receive funding within 24 to 48 hours of approval. Some programs, like SBA loans, take longer due to additional underwriting requirements. If speed is critical for you, let us know and we will prioritize the fastest options.',
      },
      {
        q: 'How much funding can I qualify for?',
        a: 'Funding amounts range from $10,000 to over $5,000,000 depending on your revenue, time in business, and the type of product. We will review your profile and present you with realistic options rather than inflated estimates.',
      },
      {
        q: 'What documents do I need to apply?',
        a: 'To get started, you typically need your last 3 months of business bank statements and a government-issued ID. Some programs may require tax returns, a voided check, or additional financials. We will tell you exactly what is needed for the products you qualify for.',
      },
      {
        q: 'Is there a hard credit pull when I apply?',
        a: 'No. The initial application only involves a soft credit pull, which does not affect your credit score. A hard pull may only occur if you choose to move forward with a specific lender and only with your consent.',
      },
    ],
  },
  {
    category: 'Terms & Costs',
    items: [
      {
        q: 'What are the interest rates and fees?',
        a: 'Rates vary depending on the product, your credit profile, and your business financials. Merchant cash advances use a factor rate model, while term loans and SBA products use traditional APR. We are transparent about all costs before you commit to anything.',
      },
      {
        q: 'How do repayments work?',
        a: 'It depends on the product. Merchant cash advances typically involve daily or weekly automatic withdrawals based on your revenue. Term loans generally have fixed monthly payments. We will walk you through the repayment structure for every option you are presented with.',
      },
      {
        q: 'Can I pay off my funding early?',
        a: 'Many of our lending partners allow early payoff, and some even offer discounts for doing so. Prepayment terms vary by lender and product, and we will make sure you understand this before signing anything.',
      },
      {
        q: 'Will I have to put up collateral?',
        a: 'Not always. Many short-term products like merchant cash advances and lines of credit are unsecured. Larger funding amounts or SBA loans may require collateral or a personal guarantee. We will clearly outline what is required for each option.',
      },
    ],
  },
  {
    category: 'The Process',
    items: [
      {
        q: 'What happens after I submit my application?',
        a: 'One of our funding advisors will review your application and reach out — usually within a few hours during business days. We will go over your options, answer any questions, and present offers that make sense for your situation. There is no pressure.',
      },
      {
        q: 'Do I have to accept an offer if I get one?',
        a: 'Absolutely not. We present options and let you decide. There is no obligation to accept any offer, and you can take your time reviewing the terms before making a decision.',
      },
      {
        q: 'Can I apply if I have existing business debt?',
        a: 'Yes. Having existing debt does not automatically disqualify you. Some of our programs can even consolidate existing positions. We look at your full picture and find what works.',
      },
      {
        q: 'How is NMA Partners paid?',
        a: 'NMA Partners earns a broker fee from the lender when a deal is funded. In most cases, this does not come out of your pocket — it is built into the lender arrangement. We are fully transparent about this and will disclose any costs to you upfront.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#A0654A] transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#A0654A] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#A0654A] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] leading-tight">
            Common questions,<br />straight answers.
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-sm leading-relaxed">
            Everything you want to know before applying — answered honestly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold text-[#A0654A] uppercase tracking-widest mb-2">{group.category}</h3>
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {group.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}