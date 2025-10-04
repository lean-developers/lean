"use client";

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Development", href: "#services" },
    { name: "E-commerce Solutions", href: "#services" },
    { name: "Backend Development", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/git-dariel",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/darielavila",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:lean.developerstech@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 opacity-20"
          style={{
            background: "linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 neu-raised rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">Lean Developers</span>
              </div>

              <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                We create innovative digital solutions that solve real business problems. From web
                applications to mobile apps, we help businesses grow with technology.
              </p>

              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-8 h-8 sm:w-10 sm:h-10 neu-button rounded-xl flex items-center justify-center text-text-secondary ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors duration-300 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href={service.href}
                      className="text-text-secondary hover:text-white transition-colors duration-300 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">
                Get In Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Email</p>
                  <a
                    href="mailto:lean.developerstech@gmail.com"
                    className="text-white hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    lean.developerstech@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Location</p>
                  <p className="text-white text-sm sm:text-base">Remote Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-elevated">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <motion.p
                className="text-text-muted text-xs sm:text-sm text-center sm:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                © {new Date().getFullYear()} Lean Developers. All rights reserved.
              </motion.p>

              <div className="flex items-center gap-4 sm:gap-6">
                <motion.a
                  href="#"
                  className="text-text-muted hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-text-muted hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="w-8 h-8 sm:w-10 sm:h-10 neu-button rounded-xl flex items-center justify-center text-text-secondary hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
