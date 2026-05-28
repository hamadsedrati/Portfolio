import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hamad Sedrati</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring penetration tester exploring offensive security, infrastructure auditing, and secure automation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-500 transition-colors cursor-pointer">Penetration Testing</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Vulnerability Assessments</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Network Reconnaissance</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Automation & Scripting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-red-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-red-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hamad Sedrati. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-600 mx-1 animate-pulse" /> for an offensive secure future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
