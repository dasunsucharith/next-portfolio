"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaArrowUp, FaHeart, FaCode, FaRocket } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/dasunsucharith",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: FaGithub,
      href: "https://github.com/dasunsucharith",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/dasunsucharith",
      label: "Twitter",
      color: "#1DA1F2"
    },
    {
      icon: FaEnvelope,
      href: "mailto:sucharith.dasun@gmail.com",
      label: "Email",
      color: "#EA4335"
    }
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #FF5757)' }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(93, 85, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(93, 85, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#5D55F1] rounded-full opacity-20"
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#00C6AE] rounded-full opacity-30"
          animate={{ y: [5, -5, 5], scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#FF5757] rounded-full opacity-25"
          animate={{ y: [8, -8, 8], x: [3, -3, 3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        ></motion.div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] rounded-xl flex items-center justify-center font-bold text-white text-lg">
                  DS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dasun Sucharith</h3>
                  <p className="text-gray-400 text-sm">Marketing Automation Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
                Building digital solutions that bridge technology and marketing. 
                Specializing in web development, automation, and SEO strategies that drive real results.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    aria-label={social.label}
                  >
                    <social.icon 
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" 
                    />
                    <div 
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    ></div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-[#5D55F1] rounded-full group-hover:bg-[#00C6AE] transition-colors duration-300"></span>
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Marketing Automation", 
                  "SEO Optimization",
                  "Technical Consulting"
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-gray-400 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-[#00C6AE] rounded-full"></span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <span>© {new Date().getFullYear()} Dasun Sucharith. Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaHeart className="w-4 h-4 text-[#FF5757]" />
                </motion.div>
                <span>using</span>
                <div className="flex items-center space-x-1">
                  <FaCode className="w-4 h-4 text-[#5D55F1]" />
                  <span className="font-semibold text-white">Next.js</span>
                </div>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -2 }}
                aria-label="Back to top"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#5D55F1] transition-all duration-300">
                  <FaArrowUp className="w-3 h-3 group-hover:translate-y-[-1px] transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-4 left-6 hidden lg:block"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <FaRocket className="w-4 h-4 text-[#00C6AE]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-6 hidden lg:block"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-xs">✨</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}