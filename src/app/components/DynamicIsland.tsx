"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Code, Smartphone, Users, Mail } from "lucide-react";
import Image from "next/image";

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Code },
    { id: "projects", label: "Projects", icon: Smartphone },
    { id: "team", label: "Team", icon: Users },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setIsExpanded(true); // Auto-expand on desktop
      } else {
        setIsExpanded(false); // Collapse on mobile
      }
    };

    // Initial setup
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navItems]);

  return (
    <motion.div
      className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`dynamic-island rounded-full transition-all duration-300 ease-out ${
          isExpanded ? "px-4 sm:px-8 py-3 sm:py-4" : "px-4 sm:px-6 py-2 sm:py-3"
        }`}
        animate={{
          width: isExpanded ? "auto" : "auto",
          height: isExpanded ? "auto" : "auto",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 neu-raised rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Lean Developers Logo"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
              />
            </div>
          </motion.div>

          {/* Navigation Items */}
          <AnimatePresence>
            {(isExpanded || !isMobile) && (
              <motion.div
                className="flex items-center gap-1 sm:gap-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.slice(1).map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-full transition-all duration-200 ${
                        activeSection === item.id
                          ? "neu-glow text-white"
                          : "hover:neu-button text-text-secondary hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button - Only show on mobile */}
          {isMobile && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="neu-button p-1.5 sm:p-2 rounded-full text-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;
