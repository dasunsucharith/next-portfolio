"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaSearch, FaArrowRight } from "react-icons/fa";

export default function About() {
  const services = [
    {
      icon: FaCode,
      title: "Build Responsive Websites",
      description: "I design and develop clean, modern websites that work beautifully on any device. Using tools like Next.js, Tailwind CSS, and modern frontend frameworks, I make sure your site is not just good-looking but fast, scalable, and user-friendly.",
      color: "#5D55F1"
    },
    {
      icon: FaRocket,
      title: "Automate Marketing Campaigns",
      description: "Marketing doesn't have to be manual. I specialize in building automation systems that save time and drive results — from email sequences and behavior tracking to CRM integration and lead scoring. I've worked with tools like Pardot, Salesforce, and Google Tag Manager to bring campaigns to life automatically.",
      color: "#00C6AE"
    },
    {
      icon: FaSearch,
      title: "Optimize for Search Engines",
      description: "Ranking on Google isn't magic — it's method. I help businesses get found through data-driven SEO strategies. That means technical audits, content optimization, performance tuning, and a clear focus on search intent. The result? Higher rankings, better visibility, and more qualified traffic.",
      color: "#FF5757"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #F7F9FC 50%, #ffffff 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
        ></div>
        <div 
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-8 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #FF5757)' }}
        ></div>
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
            <span className="inline-block px-4 py-2 bg-white border-2 border-[#5D55F1] text-[#5D55F1] rounded-full text-sm font-semibold shadow-sm">
              🧑‍💻 About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1A1A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building Digital Solutions That{" "}
            <span className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] bg-clip-text text-transparent">
              Actually Work
            </span>
          </motion.h2>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm <span className="text-[#5D55F1] font-semibold">Dasun Sucharith</span> — a Marketing Automation Developer with a deep love for all things digital. I help businesses grow smarter by blending technology, creativity, and strategy.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My background sits at the intersection of <span className="text-[#00C6AE] font-semibold">web development</span>, <span className="text-[#FF5757] font-semibold">marketing</span>, and <span className="text-[#5D55F1] font-semibold">automation</span>. I've spent years designing responsive websites, setting up seamless marketing funnels, and making sure brands rank higher on Google.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether I'm coding a new platform, automating lead nurturing campaigns, or refining SEO strategies, my goal is always the same: to make tech work for people, not the other way around.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <a 
                href="#projects"
                className="inline-flex items-center space-x-2 text-[#5D55F1] font-semibold hover:text-[#00C6AE] transition-colors duration-300"
              >
                <span>See my work in action</span>
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Fast Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5D55F1] rounded-full"></div>
                    <span className="text-gray-700">Years building digital solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00C6AE] rounded-full"></div>
                    <span className="text-gray-700">Focus on automation & efficiency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5757] rounded-full"></div>
                    <span className="text-gray-700">Passionate about user experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white border-2 border-[#00C6AE] text-[#00C6AE] rounded-full text-sm font-semibold shadow-sm mb-6">
            🔧 What I Can Do
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Services That Drive Results
          </h3>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center bottom'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(93, 85, 241, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5"
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}, transparent)`,
                  transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              ></div>
              
              <div className="relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ 
                    backgroundColor: service.color,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <service.icon 
                    className="w-6 h-6 text-white" 
                    style={{ transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                </div>
                
                <h4 
                  className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#5D55F1]"
                  style={{ transition: 'color 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  {service.title}
                </h4>
                
                <p 
                  className="text-gray-600 leading-relaxed group-hover:text-gray-700"
                  style={{ transition: 'color 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}