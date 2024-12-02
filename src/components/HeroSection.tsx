import React from 'react';
import { Button } from './ui/Button';

export function HeroSection() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-[#1a1f2e]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to eFootball Hub</h1>
          <p className="text-xl mb-8">Your ultimate destination for everything eFootball. Stay updated with the latest news, player stats, and tactical insights.</p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}