import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+973 38443190', href: 'tel:+97338443190' },
    { icon: MapPin, title: 'Location', value: 'Available Worldwide', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hamadsedrati', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hamad-sedrati/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="cyber-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to secure your digital assets? Let's discuss your cybersecurity needs and development projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="text-xs text-gray-400 ml-4">~/contact.sh</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-cyber-green mb-2">$ whoami</div>
                <div className="text-gray-300 mb-4">hamad.sedrati@cybersec-expert</div>
                <div className="text-cyber-green mb-2">$ cat services.txt</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Penetration Testing</div>
                  <div>• Security Audits</div>
                  <div>• Secure Application Development</div>
                  <div>• Security Consulting</div>
                  <div>• Vulnerability Assessments</div>
                </div>
                <div className="text-cyber-green mt-4">$ _</div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-dark-card rounded-lg border border-dark-border hover:border-cyber-cyan transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-dark-card rounded-lg border border-dark-border hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 hover:bg-cyber-cyan hover:text-dark-bg group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="skill-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all duration-300 text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all duration-300 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all duration-300 text-white resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="cyber-button w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
