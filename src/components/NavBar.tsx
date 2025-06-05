"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaEnvelope, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <motion.div
          className="flex items-center space-x-2"
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white border-2 border-[#5D55F1] rounded-xl flex items-center justify-center font-bold text-[#5D55F1] text-lg hover:bg-[#5D55F1] hover:text-white transition-all duration-300 ease-out">
                <span>DS</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#5D55F1] transition-colors duration-300 ease-out">
                Dasun Sucharith
              </h1>
              <p className="text-xs text-gray-600 font-medium transition-colors duration-300 ease-out">Marketing Automation Dev</p>
            </div>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link 
                  href={item.href}
                  className="group flex items-center space-x-2 text-sm font-medium text-deep-charcoal hover:text-electric-indigo transition-all duration-300 relative"
                >
                  <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-indigo to-vibrant-teal group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/contact"
              className="group relative inline-flex items-center space-x-2 bg-white text-[#5D55F1] px-6 py-2.5 rounded-full font-semibold text-sm border-2 border-[#5D55F1] hover:bg-[#5D55F1] hover:text-white transition-all duration-300 ease-out"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col space-y-1 p-2"
            whileTap={{ scale: 0.9 }}
          >
            <span className="w-5 h-0.5 bg-deep-charcoal transition-all"></span>
            <span className="w-5 h-0.5 bg-deep-charcoal transition-all"></span>
            <span className="w-5 h-0.5 bg-deep-charcoal transition-all"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay (you can expand this later) */}
      <motion.div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-4">
        {navItems.map((item) => (
          <Link 
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 text-deep-charcoal hover:text-electric-indigo font-medium"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
}