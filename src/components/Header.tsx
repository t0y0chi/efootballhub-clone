import React from 'react';
import { Menu, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#1a1f2e] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 cursor-pointer" />
          <h1 className="text-2xl font-bold">eFootball Hub</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#" text="Home" />
            <NavLink href="#" text="News" />
            <NavLink href="#" text="Players" />
            <NavLink href="#" text="Teams" />
            <NavLink href="#" text="Tactics" />
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="hover:text-blue-400 transition-colors duration-200"
    >
      {text}
    </a>
  );
}