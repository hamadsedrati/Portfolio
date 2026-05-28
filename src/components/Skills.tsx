import React from 'react';
import { Terminal, Shield, Server, Crosshair, Lock, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: 'Scripting & Automation',
      skills: [
        { name: 'Bash / Shell Scripting', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-yellow-500' },
        { name: 'Automation Tools', level: 75, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      icon: Crosshair,
      title: 'Offensive Tools',
      skills: [
        { name: 'Nmap / Reconnaissance', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Metasploit', level: 75, color: 'from-red-600 to-red-800' },
        { name: 'Burp Suite / Web Pen Testing', level: 70, color: 'from-orange-500 to-orange-700' },
        { name: 'OSINT & Steganography', level: 80, color: 'from-purple-500 to-purple-700' },
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure & OS',
      skills: [
        { name: 'Linux (Arch, Kali, Debian)', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Homelab & Server Admin', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'Networking (IPv4/IPv6, VPNs)', level: 80, color: 'from-teal-500 to-teal-700' },
      ]
    },
  ];

  const plannedCertifications = [
    'CompTIA Network+ (Net+)',
    'CompTIA Security+ (Sec+)',
    'Red Hat Certified System Administrator (RHCSA)',
    'eLearnSecurity Junior Penetration Tester (eJPT)',
    'Practical Junior Penetration Tester (PJPT)',
    'Certified Penetration Testing Specialist (CPTS)',
    'Offensive Security Certified Professional (OSCP)'
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Practical skills honed through homelab builds, CTF challenges, and hands-on IT troubleshooting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-red-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="terminal-window border border-dark-border">
            <div className="terminal-header bg-gray-900">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="text-xs text-gray-400 ml-4">~/recon.sh</span>
            </div>
            <div className="p-6 font-mono text-sm bg-black">
              <div className="text-red-500 mb-2">root@kali:~# nmap -sV -sC target.com</div>
              <div className="text-gray-400 mb-2">Starting Nmap 7.94 scan...</div>
              <div className="text-red-400 mb-2">PORT    STATE SERVICE VERSION</div>
              <div className="text-gray-300 mb-2">22/tcp  open  ssh     OpenSSH 8.2</div>
              <div className="text-gray-300 mb-2">80/tcp  open  http    Apache 2.4.41</div>
              <div className="text-gray-300 mb-4">443/tcp open  https   Apache 2.4.41</div>
              <div className="text-red-500">root@kali:~# _</div>
            </div>
          </div>

          <div className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-red-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Upcoming Certifications (Roadmap)</h3>
            </div>
            <div className="space-y-3">
              {plannedCertifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-dark-bg rounded-lg border border-dark-border">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
