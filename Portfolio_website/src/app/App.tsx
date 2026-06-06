import { motion } from "motion/react";
import { Mail, Github, Linkedin, Code, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 42;
    const CONNECTION_DIST = 160;
    const SPEED = 0.4;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    };

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      radius: Math.random() * 2.5 + 1.5,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(107, 114, 128, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(107, 114, 128, 0.55)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function App() {
  const skills = [
    "Javascript", "JSON", "Next.js", "Angular", "C#", ".NET", "Blaze", "Unity", "Python", "DJango", "TensorFlow", "VSCode", "Eclipse", "Git",
    "CSS/Tailwind", "REST APIs", "SQL", "MongoDB", "Virtual Machines", "PowerShell", "Excel"
  ];

  const projects = [
    {
      title: "LineLogic",
      description: "Sports analytics platform that evaluates NBA player performance trends using historical statistics, matchup data, team rankings, injuries, and game schedules. Features player grading, confidence scoring, interactive dashboards, and data-driven insights to help users analyze player performance.",
      tech: ["TypeScript", "PostgreSQL", "REST APIs"],
      link: "https://main.d30q5uyhnagz2c.amplifyapp.com/"
    },
    {
      title: "Ninem",
      description: "Interactive web application that recreates retro Nintendo-inspired games while highlighting Nintendo's history, major milestones, and influence on the gaming industry. Built with a responsive design and browser-based gameplay to provide an engaging and accessible user experience.",
      tech: ["Javascript", "HTML", "CSS"],
      link: "https://main.dhyd2rx9ewafp.amplifyapp.com/#/"
    },
    {
      title: "BMO",
      description: "2D action game developed in Unity where players battle waves of enemies, earn upgrades, and progress through increasing levels of difficulty. Features player movement, enemy AI, combat mechanics, and a progression system designed to enhance gameplay and replayability.",
      tech: ["C#", "Unity", "Blender"],
      link: ""
    }
  ];

  const experience = [
    {
      role: "Customer Service Associate",
      company: "Ikea",
      period: "2025 - Present",
      description: "Support customers with product questions and service needs through clear and professional communication. Resolve concerns through troubleshooting and problem-solving while addressing customer needs."
    },
    {
      role: "Research Assistant",
      company: "Winthrop University",
      period: "2025 - 2025",
      description: "Developed and tested interactive web interface prototypes using HTML, CSS, JavaScript, and modern web technologies as part of a faculty-led research project focused on usability and user engagement."
    },
    {
      role: "Reed Fellow",
      company: "Winthrop University",
      period: "2023 - 2024",
      description: "Served as a mentor for incoming students by offering guidance on academic planning, campus involvement, and university expectations."
    },
    {
      role: "Library Intern",
      company: "Richland Library",
      period: "2022 - 2022",
      description: "Maintained digital library systems and databases to support efficient access to information and resources. Assisted with software updates, data entry tasks, and record management to ensure accuracy and system reliability."
    }
  ];

  const heroStyle = `
    .hero-orb {
      position: absolute;
      border-radius: 9999px;
      filter: blur(100px);
      pointer-events: none;
    }
    .hero-orb-1 {
      width: 550px; height: 550px;
      background: rgba(107, 114, 128, 0.3);
      top: -150px; left: -150px;
      animation: heroFloatOne 10s ease-in-out infinite;
    }
    .hero-orb-2 {
      width: 450px; height: 450px;
      background: rgba(75, 85, 99, 0.22);
      top: 10%; right: -150px;
      animation: heroFloatTwo 12s ease-in-out infinite;
    }
    .hero-orb-3 {
      width: 400px; height: 400px;
      background: rgba(156, 163, 175, 0.3);
      bottom: -100px; left: 35%;
      animation: heroFloatThree 14s ease-in-out infinite;
    }
    @keyframes heroFloatOne {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50%       { transform: translate(160px, 100px) scale(1.12); }
    }
    @keyframes heroFloatTwo {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50%       { transform: translate(-140px, 90px) scale(1.15); }
    }
    @keyframes heroFloatThree {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50%       { transform: translate(-120px, -130px) scale(1.1); }
    }
  `;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{heroStyle}</style>

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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <NodeGraph />
        </div>

        <div className="relative max-w-4xl text-center" style={{ zIndex: 10 }}>
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
              <img
                src="/headshot_.jpg"
                alt="Tyler Starks"
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-400 shadow-xl shadow-gray-400/50"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Tyler Starks
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              Tech Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Driven by an interest in technology and innovation, with experience spanning between software development, hardware, and technology systems.
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
                className="px-8 py-3 border-2 border-gray-500 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors bg-white/40 backdrop-blur-sm"
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
              My background consists of a degree in Web Development with minors in Web Applications and Game Development. I enjoy creating interactive digital experiences through software development, web technologies, and game design while continuing to expand my knowledge across different areas of technology. I am drawn to both the software and hardware side of computing, with interests ranging from application development and system administration to PC hardware and enterprise technology environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy playing video games, practicing photography, participating in sports and spending time outdoors. I also enjoy traveling to new places and finding inspiration through new experiences and perspectives.
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
                <motion.a
                  key={index}
                  href={project.link || undefined}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: "none", color: "inherit" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={`block bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gray-500 hover:shadow-xl hover:shadow-gray-200 transition-all ${project.link ? "cursor-pointer" : "cursor-default"}`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                    {project.title}
                    {project.link && <ArrowRight size={18} className="text-gray-500" />}
                  </h3>
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
                </motion.a>
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
                href="mailto:tstarks1738@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/Starkst5"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-600/30"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tyler-starks/"
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
        <p>&copy; Tyler Starks Portfolio.</p>
      </footer>
    </div>
  );
}