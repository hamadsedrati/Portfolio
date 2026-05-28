import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative w-full">
          {/* Logo - Left */}
          <div className="flex items-center space-x-2 z-10">
            <Shield className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-red-500">Hamad Sedrati</span>
          </div>

          {/* Desktop Nav - Absolute Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle - Right */}
          <div className="flex items-center space-x-4 z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-card hover:bg-dark-border transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6 text-red-500" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-dark-card rounded-lg border border-dark-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-gray-300 hover:text-red-500 hover:bg-dark-border transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
