
import React from 'react';
import { TwitterIcon, FacebookIcon, LinkedInIcon, GitHubIcon, YouTubeIcon } from './icons';

interface FooterProps {
  navigateTo: (page: string, sectionId?: string) => void;
}

const FooterLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li>
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className="text-slate-400 hover:text-red-600 transition-colors">
      {children}
    </a>
  </li>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white">
              Prince<span className="text-red-600">nda</span>
            </h3>
            <p className="mt-4 text-slate-400 text-sm">Empowering minds through accessible and quality online education.</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.youtube.com/@PRINCEEDUHUB/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600"><YouTubeIcon /></a>
              <a href="https://www.facebook.com/PrinceEduHubSikar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600"><FacebookIcon /></a>
              <a href="#" className="text-slate-400 hover:text-red-600"><TwitterIcon /></a>
              <a href="#" className="text-slate-400 hover:text-red-600"><LinkedInIcon /></a>
              <a href="#" className="text-slate-400 hover:text-red-600"><GitHubIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <FooterLink onClick={() => navigateTo('home')}>Home</FooterLink>
              <FooterLink onClick={() => navigateTo('why-nda')}>About Us</FooterLink>
              <FooterLink onClick={() => navigateTo('home', 'courses')}>Courses</FooterLink>
              <FooterLink onClick={() => navigateTo('home', 'testimonials')}>Testimonials</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-red-600 transition-colors">Help Center</a></li>
              <FooterLink onClick={() => navigateTo('contact')}>Contact Us</FooterLink>
              <li><a href="#" className="text-slate-400 hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-red-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-slate-400 text-sm">
              <li>Palwas Road, Sikar - 332001 (Raj.) INDIA</li>
              <li className="pt-2"><a href="mailto:princendaacademy@gmail.com" className="hover:text-red-600">princendaacademy@gmail.com</a></li>
              <li><a href="tel:9610792222" className="hover:text-red-600">9610792222</a> || <a href="tel:9610872222" className="hover:text-red-600">9610872222</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Princenda Learning Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
