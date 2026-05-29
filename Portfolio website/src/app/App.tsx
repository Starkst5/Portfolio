import { motion } from "motion/react";
import { Mail, Github, Linkedin, Code, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

export default function App() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Git",
    "CSS/Tailwind", "REST APIs", "Database Design", "Agile"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with React, Node.js, and PostgreSQL. Implemented payment processing and inventory management.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using WebSockets and React.",
      tech: ["React", "WebSocket", "Express"]
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed responsive portfolio websites for multiple clients with modern UI/UX principles.",
      tech: ["React", "Tailwind CSS", "Motion"]
    }
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Lead development of web applications and mentor junior developers."
    },
    {
      role: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained client-facing web applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl text-gray-700"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center border-4 border-gray-400 shadow-xl shadow-gray-400/50">
                <span className="text-6xl">👤</span>
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Your Name
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              Full Stack Developer & Designer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web applications that solve real-world problems.
              Specializing in modern JavaScript frameworks and user-centered design.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-500 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <Code className="text-gray-600" />
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <GraduationCap className="text-gray-600" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-300 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <Briefcase className="text-gray-600" />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="border-l-4 border-gray-500 pl-6"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{job.role}</h3>
                  <p className="text-gray-600 font-medium mb-2">{job.company} • {job.period}</p>
                  <p className="text-gray-700">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gray-500 hover:shadow-xl hover:shadow-gray-200 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/yourusername"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 border-t border-gray-200 bg-white">
        <p>&copy; 2026 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}