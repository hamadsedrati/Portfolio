import React from 'react';
import { ExternalLink, Github, Shield, Code, Database, Lock } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SecureAuth System',
      description: 'Advanced authentication system with multi-factor authentication, biometric integration, and zero-trust architecture.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['PHP', 'MySQL', 'Redis', 'JWT'],
      category: 'Security',
      icon: Shield,
      features: ['Multi-factor Authentication', 'Biometric Integration', 'Zero-Trust Architecture', 'Real-time Monitoring']
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated vulnerability assessment tool for web applications with real-time reporting and remediation suggestions.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Flask', 'SQLite', 'Nmap'],
      category: 'Penetration Testing',
      icon: Lock,
      features: ['Automated Scanning', 'Custom Rules Engine', 'PDF Reports', 'API Integration']
    },
    {
      title: 'Secure E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced security features, payment processing, and fraud detection.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack Development',
      icon: Code,
      features: ['Secure Payments', 'Fraud Detection', 'Admin Dashboard', 'Mobile Responsive']
    },
    {
      title: 'Network Security Monitor',
      description: 'Real-time network monitoring solution with intrusion detection, traffic analysis, and automated alerting.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Wireshark', 'Elasticsearch', 'Kibana'],
      category: 'Network Security',
      icon: Database,
      features: ['Real-time Monitoring', 'Intrusion Detection', 'Traffic Analysis', 'Custom Alerts']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="cyber-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of cybersecurity solutions and full-stack applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center px-3 py-1 bg-dark-bg/80 rounded-full">
                    <project.icon className="w-4 h-4 text-cyber-cyan mr-2" />
                    <span className="text-xs text-gray-300">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-cyan mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1 h-1 bg-cyber-green rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-dark-bg rounded-full text-xs text-gray-300 border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-cyan text-white rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/30 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-dark-bg rounded-lg transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/hamadsedrati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;