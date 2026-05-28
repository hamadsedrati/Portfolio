import React from 'react';
import { Award, Target, Server, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Target, title: 'Offensive Security Focus', description: 'Actively tackling CTFs, analyzing steganography, and practicing network exploration techniques.' },
    { icon: Server, title: 'Homelab Infrastructure', description: 'Built and maintained private headless Linux server environments with secure remote routing.' },
    { icon: Terminal, title: 'Scripting & Automation', description: 'Developing custom Bash network tools and Python automation scripts from scratch.' },
    { icon: Award, title: 'Cybersecurity Academic', description: 'Currently pursuing a university degree with a dedicated focus on penetration testing.' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-900 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window border border-dark-border">
              <div className="terminal-header bg-gray-900">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="text-xs text-gray-400 ml-4">~/profile.sh</span>
              </div>
              <div className="p-6 font-mono text-sm bg-black">
                <div className="text-red-500 mb-2">root@kali:~# cat about.txt</div>
                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    I am a dedicated cybersecurity student and hands-on IT specialist focused on 
                    <span className="text-red-500"> offensive security</span> and 
                    <span className="text-red-400"> penetration testing methodologies</span>.
                  </p>
                  <p className="mb-4">
                    Instead of just reading theory, I learn by breaking things in controlled environments, building out my own secure homelab architecture, and automating custom diagnostic workflows.
                  </p>
                  <p>
                    My goal is to thoroughly understand underlying system flaws to provide robust, realistic vulnerability exploitation and remediation insight.
                  </p>
                </div>
                <div className="text-red-500 mt-4">root@kali:~# _</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-red-500 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-dark-card rounded-full border border-dark-border">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-mono">Actively developing skills for full-time penetration testing roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
