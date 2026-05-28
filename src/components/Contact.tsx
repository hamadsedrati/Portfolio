import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // REPLACE THIS URL with your Formspree or Web3Forms endpoint
      const response = await fetch('https://formspree.io/f/xpqnbzll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'hamadsedrati@gmail.com', href: 'mailto:hamadsedrati@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+973 38443190', href: 'tel:+97338443190' },
    { icon: MapPin, title: 'Location', value: 'Available Worldwide', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hamadsedrati', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hamad-sedrati/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to secure your digital assets or collaborate on a project? Drop a payload below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="terminal-window border border-dark-border">
              <div className="terminal-header bg-gray-900">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="text-xs text-gray-400 ml-4">~/contact.sh</span>
              </div>
              <div className="p-6 font-mono text-sm bg-black">
                <div className="text-red-500 mb-2">root@kali:~# whoami</div>
                <div className="text-gray-300 mb-4">hamad.sedrati@red-team</div>
                <div className="text-red-500 mb-2">root@kali:~# cat services.txt</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Penetration Testing</div>
                  <div>• Vulnerability Assessments</div>
                  <div>• Network Security & Homelabbing</div>
                  <div>• OSINT & Reconnaissance</div>
                  <div>• Custom Python/Bash Automation</div>
                </div>
                <div className="text-red-500 mt-4">root@kali:~# _</div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-dark-card rounded-lg border border-dark-border hover:border-red-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-900 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">
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
                  className="w-12 h-12 bg-dark-card rounded-lg border border-dark-border hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-dark-card p-8 rounded-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-white mb-6">Execute Connection</h3>
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
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white outline-none"
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
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white outline-none"
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
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white outline-none"
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
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white resize-none outline-none"
                  required
                ></textarea>
              </div>
              
              {status && (
                <div className={`text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </div>
              )}

              <button type="submit" className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300 font-semibold">
                <Send className="w-5 h-5 mr-2" />
                Transmit Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
