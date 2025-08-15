import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyber-cyan" />
              <span className="text-xl font-bold cyber-gradient">Hamad Sedrati</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cybersecurity specialist dedicated to building secure, 
              scalable solutions for the digital world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyber-cyan transition-colors cursor-pointer">Penetration Testing</li>
              <li className="hover:text-cyber-cyan transition-colors cursor-pointer">Security Audits</li>
              <li className="hover:text-cyber-cyan transition-colors cursor-pointer">Security Architecture</li>
              <li className="hover:text-cyber-cyan transition-colors cursor-pointer">Security Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyber-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyber-cyan transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyber-cyan transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyber-cyan transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyber-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Hamad Sedrati. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for a secure digital future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;