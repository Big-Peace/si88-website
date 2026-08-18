"use client";

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
emailjs.init('XG1hdhuY-v6Bw_4yB');

const Icons = {
  Location: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Email: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

export default function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.sendForm(
        'service_mxa3inc',
        'template_wimjx2k',
        form.current,
        'XG1hdhuY-v6Bw_4yB'
      );
      console.log('Email sent!', result.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      form.current.reset();
    } catch (error) {
      console.error('Failed to send:', error);
      setError('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Icons.Location, 
      title: 'Visit Our Office', 
      details: 'Road 8, House 16\nUdoka Housing Estate\nAwka, Anambra State\nNigeria' 
    },
    { 
      icon: Icons.Email, 
      title: 'Email Us', 
      details: 'admin@si88limited.com\ninfo@si88limited.com'  // ← Only 2 emails
    },
    { 
      icon: Icons.Phone, 
      title: 'Call Us', 
      details: '+639397917391'  // ← Added phone number
    },
    { 
      icon: Icons.WhatsApp, 
      title: 'WhatsApp', 
      details: 'Chat with us instantly\nAvailable 24/7', 
      whatsapp: true 
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      <section className="bg-black py-20 md:py-28 border-b border-gold/10">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6"><div className="w-12 h-0.5 bg-gold"></div><span className="text-gold text-sm font-semibold tracking-wider uppercase">Get In Touch</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">Let&apos;s <span className="font-bold text-gold">Connect</span></h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">Reach out to our team for partnerships, inquiries, or to learn more about our services. We&apos;re here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black-2 py-16 md:py-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="min-w-[40px]">{info.icon()}</div>
                      <div>
                        <h4 className="font-semibold text-gold text-sm">{info.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{info.details}</p>
                        {info.whatsapp && (
                          <a 
                            href="https://wa.me/639397917391?text=Hello%20SI88%20Limited"
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
              <div className="bg-black p-6 rounded-sm border-l-4 border-gold">
                <h4 className="font-semibold text-white mb-2">Office Hours</h4>
                <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-black p-8 md:p-10 rounded-sm border border-gold/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-6 px-6 py-2 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all">Send Another Message</button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-black-2 border border-gold/10 rounded-sm focus:border-gold focus:outline-none transition-colors text-white placeholder-gray-500" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-black-2 border border-gold/10 rounded-sm focus:border-gold focus:outline-none transition-colors text-white placeholder-gray-500" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-black-2 border border-gold/10 rounded-sm focus:border-gold focus:outline-none transition-colors text-white placeholder-gray-500" placeholder="+639397917391" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-black-2 border border-gold/10 rounded-sm focus:border-gold focus:outline-none transition-colors text-dark">
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-black-2 border border-gold/10 rounded-sm focus:border-gold focus:outline-none transition-colors resize-none text-dark placeholder-gray-400" placeholder="Tell us how we can help..." />
                    </div>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-12 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Sending...' : 'Send Message →'}</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 border-t border-gold/10">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto">
            <div className="text-center mb-8"><h3 className="text-2xl font-light text-white">Find <span className="font-bold text-gold">Us</span></h3><p className="text-gray-500 text-sm mt-1">Awka, Anambra State, Nigeria</p></div>
            <div className="bg-black-2 border border-gold/10 rounded-sm h-[300px] flex items-center justify-center">
              <div className="text-center text-gray-400"><div className="text-4xl mb-2">🗺️</div><p>Interactive Map Coming Soon</p><p className="text-sm text-gray-600 mt-1">Road 8, House 16, Udoka Housing Estate, Awka</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black-2 text-white py-16 md:py-20 border-t border-gold/10">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Quick <span className="font-bold text-gold">Response</span> Guaranteed</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">We&apos;ll get back to you within 24 hours. For urgent matters, reach us via WhatsApp.</p>
            <a 
              href="https://wa.me/639397917391?text=Hello%20SI88%20Limited"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-green-600 text-white font-semibold rounded-sm hover:bg-green-700 transition-all"
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}