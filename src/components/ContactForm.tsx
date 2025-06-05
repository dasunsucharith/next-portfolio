'use client';

import { FormEvent, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      form.current?.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Marketing Automation',
    'SEO Optimization',
    'E-commerce Solution',
    'Technical Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden"
         style={{ background: 'linear-gradient(135deg, #F7F9FC 0%, #ffffff 30%, #F7F9FC 70%, #ffffff 100%)' }}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #FF5757)' }}
        ></div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#5D55F1] rounded-full opacity-30"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#00C6AE] rounded-full opacity-40"
          animate={{ y: [15, -15, 15], x: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#FF5757] rounded-full opacity-35"
          animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white border-2 border-[#5D55F1] text-[#5D55F1] rounded-full text-sm font-semibold shadow-sm">
              💬 Get In Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your digital vision to life? Share your project details and I'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#5D55F1] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-[#1A1A1A]">dasun@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#00C6AE] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">24h</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Response Time</p>
                    <p className="font-medium text-[#1A1A1A]">Usually within a day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">What to Expect</h3>
              <div className="space-y-3">
                {[
                  'Detailed project discussion',
                  'Timeline & budget estimates',
                  'Technical recommendations',
                  'Next steps planning'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-[#5D55F1] rounded-full"></div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Background gradient */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
              ></div>

              <div className="relative z-10">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label htmlFor="user_name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5D55F1] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label htmlFor="user_email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5D55F1] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Type */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Project Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5D55F1] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <FaCommentDots className="absolute left-3 top-4 text-gray-400 w-4 h-4" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5D55F1] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="pt-4"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <FaCheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-600">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                  >
                    <FaExclamationTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-medium text-red-800">Failed to send message</p>
                      <p className="text-sm text-red-600">Please try again or email me directly.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] rounded-2xl p-8 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)
                `
              }}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Prefer to skip the form?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Send me an email directly and I'll respond as soon as possible.
              </p>
              <a
                href="mailto:dasun@example.com"
                className="inline-flex items-center space-x-2 bg-white text-[#5D55F1] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>dasun@example.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}