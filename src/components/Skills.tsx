import React from 'react';
import { Code, Shield, Server, Database, Terminal, Lock } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', level: 90, color: 'from-purple-500 to-purple-700' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-700' },
        { name: 'HTML5/CSS3', level: 95, color: 'from-orange-500 to-orange-700' },
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Tools',
      skills: [
        { name: 'Nmap', level: 95, color: 'from-cyber-cyan to-cyber-blue' },
        { name: 'Metasploit', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Wireshark', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Burp Suite', level: 88, color: 'from-purple-500 to-purple-700' },
      ]
    },
    {
      icon: Server,
      title: 'Systems & Infrastructure',
      skills: [
        { name: 'Linux Administration', level: 92, color: 'from-cyber-green to-green-700' },
        { name: 'Network Security', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Cloud Security', level: 82, color: 'from-cyan-500 to-cyan-700' },
        { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-600' },
      ]
    },
  ];

  const certifications = [
    'Certified Ethical Hacker (CEH)',
    'CompTIA Security+',
    'CISSP Associate',
    'Linux Professional Institute',
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="cyber-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set combining cybersecurity expertise with full-stack development capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-card p-6 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-lg flex items-center justify-center mr-4">
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
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="text-xs text-gray-400 ml-4">~/security-tools.sh</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-cyber-green mb-2">$ nmap -sV -sC target.com</div>
              <div className="text-gray-400 mb-2">Starting Nmap scan...</div>
              <div className="text-cyber-cyan mb-2">PORT    STATE SERVICE VERSION</div>
              <div className="text-gray-300 mb-2">22/tcp  open  ssh     OpenSSH 8.2</div>
              <div className="text-gray-300 mb-2">80/tcp  open  http    Apache 2.4.41</div>
              <div className="text-gray-300 mb-4">443/tcp open  https   Apache 2.4.41</div>
              <div className="text-cyber-green">$ _</div>
            </div>
          </div>

          <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-cyber-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-dark-bg rounded-lg border border-dark-border hover:border-cyber-cyan transition-colors">
                  <div className="w-2 h-2 bg-cyber-green rounded-full mr-3"></div>
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