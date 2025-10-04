"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Database,
  Cloud,
  Palette,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks like Next.js, React, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      color: "secondary",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment integration, inventory management, and customer analytics.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Analytics Dashboard",
        "Multi-vendor Support",
      ],
      color: "accent",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side applications, APIs, and database management systems for your business.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Scalable Architecture"],
      color: "primary",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud deployment, migration, and management services using AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Auto Scaling", "Security Setup", "Cost Optimization"],
      color: "secondary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces and user experiences that engage and convert your customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "accent",
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Secure applications with industry-standard security practices and compliance requirements.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Fast, efficient applications optimized for speed, scalability, and user experience.",
    },
    {
      icon: Users,
      title: "Consulting & Support",
      description:
        "Ongoing technical support, maintenance, and strategic consulting for your digital projects.",
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

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
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
            <span>Our Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">What We</span>
            <br />
            <span className="gradient-text">Build For You</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            We provide comprehensive development services to transform your ideas into powerful
            digital solutions that drive business growth.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="neu-raised p-6 sm:p-8 rounded-3xl h-full hover:neu-glow transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 neu-button rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                        service.color === "primary"
                          ? "text-primary"
                          : service.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="neu-flat p-4 sm:p-6 rounded-2xl text-center hover:neu-raised transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  {service.title}
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
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
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
              Let&apos;s discuss your requirements and create a solution that perfectly fits your
              business needs.
            </p>
            <motion.button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="neu-button px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold hover:neu-glow transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
