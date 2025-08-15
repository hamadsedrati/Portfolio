import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Code, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'Cybersecurity Specialist',
    'Full-Stack Developer',
    'Security Consultant',
    'Penetration Tester'
  ];

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      if (currentIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, currentTextIndex, texts]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-cyan p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <Shield className="w-16 h-16 text-cyber-cyan" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-green rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            <span className="cyber-gradient">Hamad Sedrati</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              <span className="text-cyber-cyan">&gt;</span> {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Protecting digital assets and building secure applications with expertise in 
            <span className="text-cyber-green"> cybersecurity</span>, 
            <span className="text-cyber-blue"> full-stack development</span>, and 
            <span className="text-cyber-cyan"> penetration testing</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="cyber-button group">
              <span className="relative z-10 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Portfolio
              </span>
            </button>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-dark-bg transition-all duration-300 rounded-lg font-semibold inline-flex items-center"
            >
              <Code className="w-5 h-5 inline mr-2" />
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
              Available for Projects
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Security Focused
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyber-cyan" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyber-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-green rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyber-cyan rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;