"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaSearch, FaArrowRight, FaLightbulb, FaChartLine, FaCog } from "react-icons/fa";

export default function About() {
  const services = [
    {
      icon: FaCode,
      title: "Build Responsive Websites",
      description: "I design and develop clean, modern websites that work beautifully on any device. Using tools like Next.js, Tailwind CSS, and modern frontend frameworks, I make sure your site is not just good-looking but fast, scalable, and user-friendly.",
      color: "#5D55F1",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern UI/UX"]
    },
    {
      icon: FaRocket,
      title: "Automate Marketing Campaigns",
      description: "Marketing doesn't have to be manual. I specialize in building automation systems that save time and drive results — from email sequences and behavior tracking to CRM integration and lead scoring.",
      color: "#00C6AE",
      technologies: ["Pardot", "Salesforce", "Google Tag Manager", "HubSpot"],
      features: ["Email Automation", "Lead Scoring", "CRM Integration", "Behavior Tracking"]
    },
    {
      icon: FaSearch,
      title: "Optimize for Search Engines",
      description: "Ranking on Google isn't magic — it's method. I help businesses get found through data-driven SEO strategies. That means technical audits, content optimization, performance tuning, and a clear focus on search intent.",
      color: "#FF5757",
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Screaming Frog"],
      features: ["Technical SEO", "Content Strategy", "Performance Tuning", "Keyword Research"]
    }
  ];

  const stats = [
    { icon: FaLightbulb, value: "50+", label: "Projects Completed", color: "#5D55F1" },
    { icon: FaChartLine, value: "95%", label: "Client Satisfaction", color: "#00C6AE" },
    { icon: FaCog, value: "24/7", label: "Automation Running", color: "#FF5757" }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1A1A1A 50%, #0a0a0a 100%)'
      }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 198, 174, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 198, 174, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-32 right-16 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #00C6AE, #5D55F1)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-16 left-16 w-96 h-96 rounded-full opacity-12 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #FF5757)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-20 text-[#00C6AE] opacity-20"
          animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLightbulb size={24} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-24 text-[#FF5757] opacity-20"
          animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <FaCog size={28} />
        </motion.div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#00C6AE] to-[#5D55F1] text-white rounded-full text-sm font-semibold shadow-lg">
              🧑‍💻 About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building Digital Solutions That{" "}
            <span className="bg-gradient-to-r from-[#00C6AE] via-[#5D55F1] to-[#FF5757] bg-clip-text text-transparent">
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
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hi, I'm <span className="text-[#5D55F1] font-semibold">Dasun Sucharith</span> — a Marketing Automation Developer with a deep love for all things digital. I help businesses grow smarter by blending technology, creativity, and strategy.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                My background sits at the intersection of <span className="text-[#00C6AE] font-semibold">web development</span>, <span className="text-[#FF5757] font-semibold">marketing</span>, and <span className="text-[#5D55F1] font-semibold">automation</span>. I've spent years designing responsive websites, setting up seamless marketing funnels, and making sure brands rank higher on Google.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether I'm coding a new platform, automating lead nurturing campaigns, or refining SEO strategies, my goal is always the same: to make tech work for people, not the other way around.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <a 
                href="#projects"
                className="inline-flex items-center space-x-2 text-[#00C6AE] font-semibold hover:text-[#5D55F1] transition-colors duration-500 group"
              >
                <span>See my work in action</span>
                <FaArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
              {/* Holographic Effect */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{ background: 'linear-gradient(135deg, #00C6AE, transparent, #5D55F1)' }}
              ></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Digital Impact</h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-[#00C6AE] transition-colors duration-500"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: stat.color }}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
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
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF5757] to-[#00C6AE] text-white rounded-full text-sm font-semibold shadow-lg mb-6">
            🔧 What I Can Do
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Services That Drive{" "}
            <span className="bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] bg-clip-text text-transparent">
              Results
            </span>
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
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-[#5D55F1] overflow-hidden"
              style={{
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px ${service.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Holographic Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, transparent, ${service.color}20)`
                }}
              ></div>
              
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C6AE] transition-colors duration-700">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-700">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md text-xs font-medium border border-gray-700 group-hover:border-[#00C6AE] group-hover:text-gray-300 transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-gray-800/50 text-gray-500 rounded-md text-xs">
                    +{service.technologies.length - 2} more
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}