"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive online marketplace with advanced features including multi-vendor support, real-time inventory management, and integrated payment processing.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      icon: Globe,
      features: [
        "Multi-vendor Support",
        "Real-time Inventory",
        "Payment Integration",
        "Admin Dashboard",
      ],
      status: "Completed",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      category: "Mobile Development",
      icon: Smartphone,
      features: [
        "Biometric Auth",
        "Real-time Transactions",
        "Financial Analytics",
        "Security Monitoring",
      ],
      status: "In Development",
    },
    {
      title: "Healthcare Management System",
      description:
        "A complete healthcare management platform for clinics and hospitals with patient records, appointment scheduling, and telemedicine capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
      category: "Web Development",
      icon: Code,
      features: ["Patient Records", "Appointment Booking", "Telemedicine", "Analytics Dashboard"],
      status: "Completed",
    },
    {
      title: "Food Delivery App",
      description:
        "A multi-platform food delivery application with real-time tracking, multiple payment options, and advanced order management system.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Google Maps"],
      category: "Mobile Development",
      icon: Smartphone,
      features: ["Real-time Tracking", "Multiple Payments", "Order Management", "Driver App"],
      status: "Completed",
    },
    {
      title: "Learning Management System",
      description:
        "An educational platform with course creation, student progress tracking, and interactive learning tools for online education.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Express.js", "PostgreSQL", "AWS S3", "Socket.io"],
      category: "Web Development",
      icon: Globe,
      features: ["Course Creation", "Progress Tracking", "Interactive Tools", "Video Streaming"],
      status: "Completed",
    },
    {
      title: "IoT Dashboard",
      description:
        "A comprehensive IoT monitoring dashboard for smart home devices with real-time data visualization and automated control systems.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "MQTT", "InfluxDB"],
      category: "Web Development",
      icon: Code,
      features: [
        "Real-time Monitoring",
        "Data Visualization",
        "Automated Controls",
        "Alert System",
      ],
      status: "In Development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400 bg-green-400/10";
      case "In Development":
        return "text-yellow-400 bg-yellow-400/10";
      case "Planning":
        return "text-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 neu-raised rounded-full text-sm font-medium text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Code className="w-4 h-4" />
            <span>Our Projects</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Recent</span>
            <br />
            <span className="gradient-text">Work</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in creating
            innovative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="neu-raised rounded-3xl overflow-hidden hover:neu-glow transition-all duration-300">
                  {/* Project Image Placeholder */}
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 neu-button rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {project.category}
                        </h3>
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <motion.button
                          className="w-7 h-7 sm:w-8 sm:h-8 neu-button rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                        <motion.button
                          className="w-7 h-7 sm:w-8 sm:h-8 neu-button rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                          <span className="text-xs sm:text-sm text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 neu-flat rounded-full text-xs font-medium text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 neu-button rounded-xl text-white font-semibold hover:neu-glow transition-all duration-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="neu-raised p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
              Let&apos;s work together to bring your vision to life with cutting-edge technology and
              innovative solutions.
            </p>
            <motion.button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="neu-button px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold hover:neu-glow transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
