"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: 'Road 8, House 16\nUdoka Housing Estate\nAwka, Anambra State\nNigeria'
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@si88limited.com\nceo@si88limited.com\nsales@si88limited.com\npartnerships@si88limited.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: 'Official Company Phone Number\nAvailable during business hours'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: 'Chat with us instantly\nAvailable 24/7',
      whatsapp: true
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark leading-tight">
              Let&apos;s <span className="font-bold text-gold">Connect</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              Reach out to our team for partnerships, inquiries, or to learn more about 
              our services. We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-dark mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="text-2xl min-w-[40px]">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-dark text-sm">{info.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                          {info.details}
                        </p>
                        {info.whatsapp && (
                          <a 
                            href="https://wa.me/2348000000000?text=Hello%20SI88%20Limited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-gold text-sm font-medium hover:underline"
                          >
                            Chat Now →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lightGray p-6 rounded-sm border-l-4 border-gold">
                <h4 className="font-semibold text-dark mb-2">Office Hours</h4>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-lightGray p-8 md:p-10 rounded-sm">
                <h3 className="text-2xl font-semibold text-dark mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-2xl font-semibold text-dark mb-2">Message Sent!</h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-gold text-dark font-semibold rounded-sm hover:bg-opacity-80 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:border-gold focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:border-gold focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Services">Service Request</option>
                        <option value="Brand Collaboration">Brand Collaboration</option>
                        <option value="Investment">Investment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-12 py-4 bg-gold text-dark font-semibold rounded-sm hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-16 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-dark">
                Find <span className="font-bold text-gold">Us</span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Awka, Anambra State, Nigeria
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm h-[300px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-300 mt-1">Road 8, House 16, Udoka Housing Estate, Awka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Quick <span className="font-bold text-gold">Response</span> Guaranteed
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We&apos;ll get back to you within 24 hours. For urgent matters, reach us via WhatsApp.
            </p>
            <a 
              href="https://wa.me/2348000000000?text=Hello%20SI88%20Limited"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-green-600 text-white font-semibold rounded-sm hover:bg-green-700 transition-all"
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-dark/95 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 SI88 Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}