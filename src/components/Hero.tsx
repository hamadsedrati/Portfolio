import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Terminal, Crosshair } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const texts = [
      'Aspiring Penetration Tester',
      'Red Team Enthusiast',
      'Hands-on IT Specialist'
    ];
    
    const currentText = texts[loopNum % texts.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting text (faster than typing)
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 50);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
    }

    // Logic to switch between typing and deleting
    if (!isDeleting && displayText === currentText) {
      // Pause at the end before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Once fully deleted, move to the next word and start typing
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center min-h-screen pt-20">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-600 to-red-900 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <Shield className="w-16 h-16 text-red-500" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hamad</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              <span className="text-red-500">root@kali:~#</span> {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Exploring offensive security, breaking systems to understand them, and honing my skills in 
            <span className="text-red-500"> penetration testing</span>, 
            <span className="text-red-400"> vulnerability assessment</span>, and 
            <span className="text-red-600"> red teaming</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 rounded-lg font-semibold flex items-center group">
              <Crosshair className="w-5 h-5 mr-2" />
              View Targets (Projects)
            </button>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-dark-bg transition-all duration-300 rounded-lg font-semibold inline-flex items-center"
            >
              <Terminal className="w-5 h-5 inline mr-2" />
              whoami
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-red-500" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-700 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-500 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-900 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;
