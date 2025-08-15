import React from 'react';
import { User, Award, Target, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'Certified Security Professional', description: 'Multiple industry certifications' },
    { icon: Target, title: 'Penetration Testing Expert', description: '100+ security assessments completed' },
    { icon: Briefcase, title: 'Security Architect', description: '5+ years of security architecture experience' },
    { icon: User, title: 'Security Consultant', description: 'Helping businesses secure their digital assets' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="text-xs text-gray-400 ml-4">~/profile.sh</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-cyber-green mb-2">$ cat about.txt</div>
                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    Passionate cybersecurity specialist with extensive experience in 
                    <span className="text-cyber-cyan"> penetration testing</span>, 
                    <span className="text-cyber-blue"> vulnerability assessment</span>, and 
                    <span className="text-cyber-green"> secure application development</span>.
                  </p>
                  <p className="mb-4">
                    I specialize in identifying security vulnerabilities and implementing 
                    robust defense mechanisms to protect organizations from cyber threats.
                  </p>
                  <p>
                    My dual expertise in cybersecurity and full-stack development allows me 
                    My expertise in cybersecurity allows me to design and implement 
                    comprehensive security solutions from the ground up.
                  </p>
                </div>
                <div className="text-cyber-green mt-4">$ _</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="skill-card p-6 rounded-lg group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-lg flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyber-cyan transition-colors">
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
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-mono">Currently available for security consulting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;