"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);

    // You can add actual form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "lean.developerstech@gmail.com",
      href: "mailto:lean.developerstech@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "secondary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Remote Team",
      href: "#",
      color: "accent",
    },
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
      icon: MessageCircle,
      name: "Discord",
      href: "#",
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
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
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Let's Start</span>
            <br />
            <span className="gradient-text">Your Project</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to bring your ideas to life? Contact us today for a free consultation and let's
            discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className="group block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="neu-raised p-4 sm:p-6 rounded-2xl hover:neu-glow transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-xl flex items-center justify-center ${
                            info.color === "primary"
                              ? "text-primary"
                              : info.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-text-secondary text-xs sm:text-sm">
                            {info.description}
                          </p>
                          <p className="text-text-primary font-medium text-sm sm:text-base">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="neu-raised p-4 sm:p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 sm:w-12 sm:h-12 neu-button rounded-xl flex items-center justify-center text-text-secondary ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="neu-flat p-4 sm:p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-text-secondary text-xs sm:text-sm">
                We typically respond to all inquiries within 24 hours. For urgent matters, please
                call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="neu-raised p-6 sm:p-8 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 neu-flat rounded-xl text-white placeholder-text-muted focus:neu-glow focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 neu-flat rounded-xl text-white placeholder-text-muted focus:neu-glow focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 neu-flat rounded-xl text-white placeholder-text-muted focus:neu-glow focus:outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 neu-flat rounded-xl text-white placeholder-text-muted focus:neu-glow focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 neu-button rounded-xl text-white font-semibold hover:neu-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
