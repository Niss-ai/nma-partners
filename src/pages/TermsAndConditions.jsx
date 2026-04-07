const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="h-1 w-full bg-gradient-to-r from-[#A0654A] via-[#e8c96a] to-[#A0654A]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/Home" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#A0654A] transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-10">
          <img
            src="https://media.db.com/images/public/69b41c6244e8d8d16b53d444/7d746d43e_Screenshot2025-10-24105828.png"
            alt="NMA Partners"
            className="h-14 w-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-black text-[#1C1C1C]">Terms &amp; Conditions</h1>
          <p className="mt-3 text-gray-400 text-sm">Terms and Conditions of NMA Partners Brokerage Services</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">

          <Section title="I. Introduction">
            <p>These terms and conditions govern the relationship between NMA PARTNERS and the business seeking funding. Please read carefully and seek legal advice if necessary.</p>
          </Section>

          <Section title="II. Brokerage Services">
            <p>NMA PARTNERS will use reasonable efforts to secure funding for the business, but does not guarantee funding.</p>
          </Section>

          <Section title="III. Fees and Commissions">
            <p>The business will pay NMA PARTNERS a fee equal to [percentage or flat fee] of the funding amount. NMA PARTNERS may also receive a commission from the financier, which will be disclosed to the business.</p>
          </Section>

          <Section title="IV. Business Obligations">
            <p>The business must provide accurate and complete financial and business information to NMA PARTNERS and the financier. The business is responsible for ensuring that all information provided is accurate and complete.</p>
          </Section>

          <Section title="V. Funding Terms">
            <p>Funding terms, including interest rate, repayment schedule, and fees, will be determined by the financing party. The business is responsible for reviewing and understanding the funding terms prior to acceptance.</p>
          </Section>

          <Section title="VI. Indemnification">
            <p>The business will indemnify NMA PARTNERS against any losses, claims, or damages arising from the business's failure to comply with these terms and conditions.</p>
          </Section>

          <Section title="VII. Governing Law and Jurisdiction">
            <p>These terms and conditions will be governed by and construed in accordance with the laws of [state/province/country]. Any disputes will be resolved through [dispute resolution process].</p>
          </Section>

          <Section title="VIII. Entire Agreement">
            <p>These terms and conditions constitute the entire agreement between the parties. No other agreements or representations exist.</p>
          </Section>

          <Section title="IX. Amendments">
            <p>These terms and conditions may be amended by NMA PARTNERS at any time. The business will be notified of any changes in writing.</p>
          </Section>

          <Section title="X. Acceptance">
            <p>By accepting the brokerage services, the business acknowledges that it has read, understood, and agrees to be bound by these terms and conditions.</p>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <img src="https://media.db.com/images/public/69b41c6244e8d8d16b53d444/7d746d43e_Screenshot2025-10-24105828.png" alt="NMA Partners" className="h-8 w-auto" />
          <div className="flex gap-6">
            <Link to="/PrivacyPolicy" className="hover:text-[#A0654A] transition-colors">Privacy Policy</Link>
            <Link to="/TermsAndConditions" className="hover:text-[#A0654A] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-black text-[#1C1C1C] mb-4 pt-4 border-t border-gray-100">{title}</h2>
      <div>{children}</div>
    </div>
  );
}