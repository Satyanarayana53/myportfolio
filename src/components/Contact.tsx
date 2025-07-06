
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-cyber-navy/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-cyber-green">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-cyber-green mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">pillastnrn@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyber-green/20 rounded-lg flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">+91 7816005853</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cyber-blue/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/satyanarayana53"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-lg hover:bg-cyber-blue/30 transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Satyanarayana53"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyber-green/20 text-cyber-green rounded-lg hover:bg-cyber-green/30 transition-colors duration-300"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyber-blue mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyber-green hover:bg-cyber-green/80 text-cyber-dark font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-cyber-blue/20">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Pilla Sreebala Veera Venkata Satyanarayana. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with passion for cybersecurity and innovation.</p>
        </div>
      </div>
    </section>
  );
};
