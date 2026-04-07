const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const APPLY_URL = "https://docuseal.com/d/jkgEWVLA1yDSCN";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5EDE4] shadow-md' : 'bg-[#F5EDE4]/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home">
            <img
              src="/ss 1.png"
              alt="NMA Partners"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-[#A0654A] transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+19294158933" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1C1C1C] transition-colors">
              <Phone className="w-4 h-4 text-[#A0654A]" />
              (929) 415-8933
            </a>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A0654A] hover:bg-[#8a5240] text-white font-semibold px-6 py-2.5 text-sm transition-colors"
            >
              Apply Now
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#1C1C1C] p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#A0654A] py-2 font-medium border-b border-gray-50">
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+19294158933" className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-[#A0654A]" /> (929) 415-8933
              </a>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#A0654A] hover:bg-[#8a5240] text-white font-semibold py-3 transition-colors">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
