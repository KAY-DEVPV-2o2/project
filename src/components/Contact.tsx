import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || 'contact@example.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 
                       text-transparent bg-clip-text mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">Let's discuss your next project</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                         text-white placeholder-gray-400"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                         text-white placeholder-gray-400"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                         text-white placeholder-gray-400"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                       rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 
                       transform hover:scale-105 transition-all duration-300 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                       focus:ring-offset-gray-900"
            >
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </span>
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              {contactEmail}
            </a>
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Let's chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
