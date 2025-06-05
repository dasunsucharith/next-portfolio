"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      id="hero"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1A1A1A 50%, #0a0a0a 100%)'
      }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93, 85, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(93, 85, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Large rotating gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-12 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #FF5757)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        {/* Medium floating orbs */}
        <motion.div 
          className="absolute top-32 right-1/4 w-40 h-40 rounded-full opacity-8 blur-2xl"
          style={{ background: 'linear-gradient(135deg, #FF5757, #5D55F1)' }}
          animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full opacity-8 blur-2xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #5D55F1)' }}
          animate={{ y: [25, -25, 25], x: [12, -12, 12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        ></motion.div>
        
        {/* Geometric shapes with glow */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#5D55F1] rounded-full opacity-40 shadow-lg shadow-[#5D55F1]/50"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00C6AE] rounded-full opacity-50 shadow-lg shadow-[#00C6AE]/50"
          animate={{ scale: [1, 2.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-[#FF5757] rounded-full opacity-45 shadow-lg shadow-[#FF5757]/50"
          animate={{ scale: [1, 2.2, 1], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        
        {/* Animated gradient lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #5D55F1, #00C6AE, transparent)' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1 opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #00C6AE, #FF5757, transparent)' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white rounded-full text-sm font-semibold shadow-lg">
              👋 Available for Projects
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span 
              className="bg-gradient-to-r from-[#5D55F1] via-[#00C6AE] to-[#FF5757] bg-clip-text text-transparent"
            >
              Dasun Sucharith
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Marketing Automation Developer & SEO Strategist building<br />
            <span className="text-[#5D55F1] font-semibold">clever</span>,{" "}
            <span className="text-[#00C6AE] font-semibold">fast</span>, and{" "}
            <span className="text-[#FF5757] font-semibold">future-ready</span> web experiences.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5D55F1]/25 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View My Work</span>
            <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
          </motion.a>
          
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-[#5D55F1] hover:bg-[#5D55F1] hover:shadow-lg hover:shadow-[#5D55F1]/25 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Let&apos;s Talk</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm font-medium mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-16 hidden lg:block"
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-center border border-gray-700 hover:border-[#5D55F1] transition-colors duration-500">
          <span className="text-2xl">🚀</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16 hidden lg:block"
        animate={{ y: [12, -12, 12], rotate: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-xl shadow-lg flex items-center justify-center border border-gray-700 hover:border-[#00C6AE] transition-colors duration-500">
          <span className="text-xl">⚡</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-xl shadow-lg flex items-center justify-center border border-gray-700 hover:border-[#FF5757] transition-colors duration-500">
          <span className="text-xl">🎯</span>
        </div>
      </motion.div>

      {/* Additional Futuristic Floating Elements */}
      <motion.div
        className="absolute top-20 right-1/4 hidden lg:block"
        animate={{ y: [-18, 18, -18], x: [-8, 8, -8], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-lg shadow-md flex items-center justify-center border border-gray-700 hover:border-[#5D55F1] transition-colors duration-500">
          <span className="text-lg">💡</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-32 hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-full shadow-lg flex items-center justify-center border border-gray-700 hover:border-[#00C6AE] transition-colors duration-500">
          <span className="text-lg">📈</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-12 hidden lg:block"
        animate={{ y: [-8, 8, -8], x: [0, 5, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-md shadow-md flex items-center justify-center border border-gray-700 hover:border-[#FF5757] transition-colors duration-500">
          <span className="text-sm">🔥</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-20 hidden lg:block"
        animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-xl shadow-lg flex items-center justify-center border border-gray-700 hover:border-[#5D55F1] transition-colors duration-500">
          <span className="text-lg">🤖</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/3 hidden lg:block"
        animate={{ y: [-12, 12, -12], scale: [1, 1.3, 1], rotate: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-full shadow-sm flex items-center justify-center border border-gray-700 hover:border-[#00C6AE] transition-colors duration-500">
          <span className="text-xs">✨</span>
        </div>
      </motion.div>
    </section>
  );
}