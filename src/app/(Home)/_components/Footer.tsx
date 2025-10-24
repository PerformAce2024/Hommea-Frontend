'use client';

import { useState } from 'react';

export default function Footer() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <footer className="bg-primary-brown text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-orange-200 font-medium mb-4">About</h3>
            <div className="space-y-2 text-orange-300">
              <p className="cursor-pointer hover:text-white transition">Team</p>
              <p className="cursor-pointer hover:text-white transition">Contact us</p>
              <p className="cursor-pointer hover:text-white transition">Legal</p>
            </div>
          </div>

          {/* Properties */}
          <div className="space-y-4">
            <h3 className="text-orange-200 font-medium mb-4">Properties</h3>
            <div className="space-y-2 text-orange-300">
              <p className="cursor-pointer hover:text-white transition">Godrej</p>
              <p className="cursor-pointer hover:text-white transition">DLF</p>
              <p className="cursor-pointer hover:text-white transition">M3M</p>
            </div>
          </div>

          {/* New Projects */}
          <div className="space-y-4">
            <h3 className="text-orange-200 font-medium mb-4">New Projects</h3>
            <div className="space-y-2 text-orange-300">
              <p className="cursor-pointer hover:text-white transition">Godrej</p>
              <p className="cursor-pointer hover:text-white transition">DLF</p>
              <p className="cursor-pointer hover:text-white transition">M3M</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-orange-200 font-medium mb-4">Enter email</h3>
            <div className="border-b border-white pb-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent w-full text-white placeholder-white/50 outline-none"
              />
            </div>
            
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1"
              />
              <label className="text-xs text-orange-200">
                I agree to our <span className="underline">Terms of Services</span> and{' '}
                <span className="underline">Privacy Policies</span>
              </label>
            </div>

            <button className="bg-white text-primary-brown px-6 py-3 font-semibold w-full hover:bg-white/90 transition">
              Submit
            </button>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-[69.729px] font-bold">HOMMEA</h2>
        </div>
      </div>
    </footer>
  );
}