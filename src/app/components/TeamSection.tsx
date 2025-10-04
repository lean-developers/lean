"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Smartphone, Palette, Database } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dariel Avila",
      role: "Lead Developer & Founder",
      bio: "Full-stack developer with 3+ years of experience in web and mobile development. Passionate about creating innovative solutions and leading technical teams.",
      avatar: "/api/placeholder/300/300",
      skills: ["React", "Node.js", "Python", "AWS", "Mobile Development"],
      icon: Code,
      social: {
        github: "https://github.com/git-dariel",
        linkedin: "https://linkedin.com/in/darielavila",
        email: "lean.developerstech@gmail.com",
      },
      color: "primary",
    },
    {
      name: "Alex Chen",
      role: "Senior Frontend Developer",
      bio: "UI/UX specialist with expertise in React, Vue.js, and modern design systems. Creates beautiful and intuitive user experiences.",
      avatar: "/api/placeholder/300/300",
      skills: ["React", "Vue.js", "TypeScript", "Figma", "Design Systems"],
      icon: Palette,
      social: {
        github: "#",
        linkedin: "#",
        email: "#",
      },
      color: "secondary",
    },
    {
      name: "Sarah Johnson",
      role: "Mobile Development Specialist",
      bio: "Cross-platform mobile developer with expertise in React Native and Flutter. Creates performant mobile applications for iOS and Android.",
      avatar: "/api/placeholder/300/300",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      icon: Smartphone,
      social: {
        github: "#",
        linkedin: "#",
        email: "#",
      },
      color: "accent",
    },
    {
      name: "Michael Rodriguez",
      role: "Backend & DevOps Engineer",
      bio: "Backend specialist with expertise in scalable architecture, cloud deployment, and database optimization. Ensures robust and secure systems.",
      avatar: "/api/placeholder/300/300",
      skills: ["Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
      icon: Database,
      social: {
        github: "#",
        linkedin: "#",
        email: "#",
      },
      color: "primary",
    },
  ];

  const stats = [
    { label: "Team Members", value: "4+" },
    { label: "Years Combined Experience", value: "12+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Successful Projects", value: "50+" },
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
    <section id="team" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
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
            <span>Our Team</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Meet the</span>
            <br />
            <span className="gradient-text">Experts</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Our diverse team of skilled developers, designers, and engineers work together to
            deliver exceptional digital solutions.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="neu-raised p-4 sm:p-6 rounded-2xl text-center hover:neu-glow transition-all duration-300"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="neu-raised rounded-3xl overflow-hidden hover:neu-glow transition-all duration-300">
                  {/* Avatar */}
                  <div className="h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 neu-button rounded-full flex items-center justify-center ${
                          member.color === "primary"
                            ? "text-primary"
                            : member.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-text-secondary">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    {/* Bio */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 neu-flat rounded-lg text-xs font-medium text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                      <motion.a
                        href={member.social.github}
                        className="w-7 h-7 sm:w-8 sm:h-8 neu-button rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        className="w-7 h-7 sm:w-8 sm:h-8 neu-button rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="w-7 h-7 sm:w-8 sm:h-8 neu-button rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Values */}
        <motion.div
          className="neu-raised p-6 sm:p-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Values</h3>
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
              We believe in delivering quality, innovation, and exceptional customer service in
              everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 neu-button rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Innovation</h4>
              <p className="text-text-secondary text-xs sm:text-sm">
                We stay ahead of technology trends and implement cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 neu-button rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Quality</h4>
              <p className="text-text-secondary text-xs sm:text-sm">
                We deliver robust, scalable, and maintainable code that exceeds expectations.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 neu-button rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Collaboration</h4>
              <p className="text-text-secondary text-xs sm:text-sm">
                We work closely with our clients to understand and achieve their goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
