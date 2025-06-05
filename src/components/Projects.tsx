"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaPlay, FaCode } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "AI-Driven SEO Tool",
      subtitle: "Next.js • OpenAI API • Analytics",
      description: "Built using Next.js and OpenAI APIs for content strategy automation. Features real-time SEO analysis, content optimization suggestions, and automated keyword research with AI-powered insights.",
      image: "/api/placeholder/600/400",
      category: "Web Development",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Prisma"],
      features: ["AI Content Analysis", "Real-time SEO Scoring", "Keyword Research", "Content Optimization"],
      status: "Live",
      links: {
        github: "#",
        live: "#"
      },
      color: "#5D55F1"
    },
    {
      id: 2,
      title: "Expense Tracker App",
      subtitle: "React • Node.js • PostgreSQL",
      description: "React-based financial tracker with currency support and user profiles. Advanced budgeting features, expense categorization, and real-time financial insights with interactive charts.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "JWT"],
      features: ["Multi-Currency Support", "Budget Planning", "Expense Analytics", "User Profiles"],
      status: "In Development",
      links: {
        github: "#",
        live: "#"
      },
      color: "#00C6AE"
    },
    {
      id: 3,
      title: "Podcast Platform MVP",
      subtitle: "WebRTC • Firebase • React",
      description: "Two-way video/audio podcast recording platform with export options. Real-time communication, cloud storage integration, and professional-grade audio processing capabilities.",
      image: "/api/placeholder/600/400",
      category: "Media Platform",
      technologies: ["WebRTC", "Firebase", "React", "FFmpeg", "AWS S3"],
      features: ["Live Recording", "Cloud Storage", "Audio Processing", "Export Options"],
      status: "Beta",
      links: {
        github: "#",
        live: "#"
      },
      color: "#FF5757"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1A1A1A 50%, #0a0a0a 100%)'
      }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93, 85, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(93, 85, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #5D55F1, #00C6AE)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #FF5757, #5D55F1)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-[#5D55F1] opacity-20"
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode size={32} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-[#00C6AE] opacity-20"
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FaRocket size={28} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white rounded-full text-sm font-semibold shadow-lg">
              🚀 Featured Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-[#5D55F1] via-[#00C6AE] to-[#FF5757] bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative solutions that blend cutting-edge technology with exceptional user experience
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#5D55F1] transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)`,
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Holographic Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, transparent, ${project.color}20)`,
                  padding: '1px'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl"></div>
              </div>

              <div className="relative z-10 p-6">
                {/* Project Image/Preview */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                  ></div>
                  <FaPlay className="text-4xl text-gray-600 group-hover:text-white transition-colors duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: project.color,
                        color: 'white'
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <span 
                      className="text-sm font-medium mb-2 block"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#5D55F1] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium border border-gray-700 group-hover:border-[#5D55F1] transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-md text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <motion.a
                      href={project.links.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg hover:from-[#5D55F1] hover:to-[#00C6AE] transition-all duration-500 text-sm font-medium group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.links.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white rounded-lg hover:shadow-lg hover:shadow-[#5D55F1]/25 transition-all duration-500 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#5D55F1] to-[#00C6AE] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#5D55F1]/25 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let&apos;s Build Something Amazing</span>
            <FaRocket className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}