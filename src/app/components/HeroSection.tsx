"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:mt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 lg:max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 neu-raised rounded-full text-sm font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap className="w-4 h-4" />
              <span>Innovative Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight logo-font"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-2 sm:mb-3">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 neu-raised rounded-2xl flex items-center justify-center overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Lean Developers Logo"
                    width={80}
                    height={80}
                    className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </motion.div>
                <span className="logo-text">ean</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-white logo-font">Developers</span>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We create custom web and mobile applications that streamline your business processes
              and drive growth. We turn your ideas into reality with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 neu-button rounded-full text-white font-semibold text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 neu-flat rounded-full text-text-secondary hover:text-white font-semibold text-base sm:text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Our Services</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-text-muted">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">3+</div>
                <div className="text-xs sm:text-sm text-text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cards */}
          <motion.div
            className="relative lg:max-w-md w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              {/* Web Development Card */}
              <motion.div
                className="neu-raised p-6 sm:p-8 rounded-3xl mb-4 sm:mb-6 max-w-md"
                initial={{ rotateY: -15, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ rotateY: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-2xl flex items-center justify-center">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Web Development</h3>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  Custom websites, web applications, and e-commerce solutions built with modern
                  technologies.
                </p>
              </motion.div>

              {/* Mobile Development Card */}
              <motion.div
                className="neu-raised p-6 sm:p-8 rounded-3xl mb-4 sm:mb-6 max-w-md ml-4 sm:ml-8"
                initial={{ rotateY: 15, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ rotateY: 5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Mobile Development
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  Native and cross-platform mobile apps for iOS and Android with exceptional user
                  experience.
                </p>
              </motion.div>

              {/* Solutions Card */}
              <motion.div
                className="neu-glow p-6 sm:p-8 rounded-3xl max-w-md ml-2 sm:ml-4"
                initial={{ rotateY: -10, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ rotateY: -3, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-2xl flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Custom Solutions</h3>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  Tailored software solutions that address your specific business challenges and
                  requirements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
