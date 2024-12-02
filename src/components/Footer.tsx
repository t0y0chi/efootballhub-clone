import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">eFootball Hub</h3>
            <p className="text-gray-400">Your ultimate destination for everything eFootball.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Contact" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="News" />
              <FooterLink href="#" text="Player Database" />
              <FooterLink href="#" text="Tournaments" />
              <FooterLink href="#" text="Guides" />
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Youtube className="h-5 w-5" />} href="#" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 eFootball Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {text}
      </a>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}