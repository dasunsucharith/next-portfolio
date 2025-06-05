"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      description: "Drop me a line directly",
      value: "dasun@example.com",
      href: "mailto:dasun@example.com",
      color: "#5D55F1"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Let&apos;s connect professionally",
      value: "/in/dasunsucharith",
      href: "https://linkedin.com/in/dasunsucharith",
      color: "#00C6AE"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "Check out my code",
      value: "/dasunsucharith",
      href: "https://github.com/dasunsucharith",
      color: "#FF5757"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #F7F9FC 50%, #ffffff 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #FF5757)' }}
        ></div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#5D55F1] rounded-full opacity-30"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#00C6AE] rounded-full opacity-40"
          animate={{ y: [15, -15, 15], x: [8, -8, 8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#FF5757] rounded-full opacity-35"
          animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white border-2 border-[#FF5757] text-[#FF5757] rounded-full text-sm font-semibold shadow-sm">
              💬 Let&apos;s Connect
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1A1A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] bg-clip-text text-transparent">
              Amazing?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you&apos;re looking to automate your marketing, build a stunning website, or boost your search rankings,
            I&apos;d love to hear about your project. Let&apos;s chat about how we can make your digital goals a reality.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: method.color }}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#5D55F1] transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                    <p 
                      className="font-semibold text-sm transition-colors duration-300"
                      style={{ color: method.color }}
                    >
                      {method.value}
                    </p>
                  </div>
                  
                  <FaArrowRight 
                    className="w-4 h-4 text-gray-400 group-hover:text-[#5D55F1] group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Background Gradient */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPaperPlane className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    Prefer a Direct Message?
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fill out my contact form for detailed project discussions. I typically respond within 24 hours.
                  </p>
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span>Send a Message</span>
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Stats or Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#5D55F1]">24h</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#00C6AE]">100%</div>
                      <div className="text-xs text-gray-600">Project Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] rounded-2xl p-8 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)
                `
              }}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let&apos;s Make Something Great Together
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Ready to transform your digital presence? I&apos;m here to help with web development,
                marketing automation, and SEO strategies that actually work.
              </p>
              <motion.a
                href="mailto:dasun@example.com"
                className="inline-flex items-center space-x-2 bg-white text-[#5D55F1] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Start the Conversation</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}