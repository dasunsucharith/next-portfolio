"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaEnvelope, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "#about", label: "About", icon: FaUser },
    { href: "#projects", label: "Projects", icon: FaCode },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-md border-b border-white/10' 
          : ''
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.9)'
          : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 min-h-[80px]">
        {/* Clean Logo - Properly Centered */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="group flex items-center space-x-3">
            <motion.div 
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #5D55F1, #00C6AE)'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              DS
            </motion.div>
            
            <div className="hidden sm:flex flex-col justify-center">
              <h1 
                className={`text-lg font-bold leading-none group-hover:text-[#5D55F1] transition-colors duration-300 ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                Dasun Sucharith
              </h1>
              <p 
                className={`text-xs font-medium leading-none mt-0.5 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                Marketing Automation Dev
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Clean Navigation Links */}
        <div className="flex items-center space-x-8 h-12">
          <ul className="hidden md:flex items-center space-x-1 h-full">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="h-full flex items-center"
              >
                <Link 
                  href={item.href}
                  className={`group relative flex items-center space-x-2 text-sm font-medium hover:text-[#5D55F1] px-4 py-2 rounded-lg transition-all duration-300 h-full ${
                    isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                  <span>{item.label}</span>
                  
                  {/* Simple underline */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#5D55F1] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Clean Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center h-12"
          >
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm text-white transition-all duration-300 h-full"
              style={{
                background: 'linear-gradient(135deg, #5D55F1, #00C6AE)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(93, 85, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </motion.div>

          {/* Simple Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 hover:text-[#5D55F1] transition-colors duration-300 flex items-center h-12 ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex flex-col space-y-1">
              <span className="w-5 h-0.5 bg-current rounded-full"></span>
              <span className="w-5 h-0.5 bg-current rounded-full"></span>
              <span className="w-5 h-0.5 bg-current rounded-full"></span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      <motion.div 
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link 
                href={item.href}
                className="flex items-center space-x-3 text-[#1A1A1A] hover:text-[#5D55F1] font-medium p-3 rounded-lg transition-colors duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}