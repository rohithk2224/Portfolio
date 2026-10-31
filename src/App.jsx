import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code2,
  Database,
  Terminal,
  Server,
  MapPin,
  Briefcase,
  GraduationCap,
  LayoutGrid,
  FileCode,
  Cpu,
  ShieldCheck,
  User,
  FileCode2,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <img
              src="/profile.jpg"
              alt="Rohith Kambham"
              className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500/50 fallback-bg-gray-800"
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%231f1f2e"/><text x="50%" y="50%" fill="white" font-size="16" font-family="sans-serif" text-anchor="middle" dy=".3em">RK</text></svg>';
              }}
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Rohith Kambham
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {link}
              </button>
            ))}
            <a
              href="/Rohith_Kambham_Resume.pdf"
              target="_blank"
              className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-white transition-all flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-gray-950 to-gray-950 -z-10"></div>
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-400 font-mono text-sm mb-4 tracking-wider uppercase">
              Hello, I'm Rohith Kambham
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Backend Engineer crafting reliable & scalable software.
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              I build backend applications, APIs, automation tools, and
              data-driven solutions using Java, C++, and modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium rounded-md transition-colors"
              >
                Contact Me
              </button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/rohithk2224"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohith-kambham-051121241/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-gray-400">
                developer-profile.json
              </span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-400">
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-white">developer</span> = {"{"}
              </div>
              <div className="pl-4">
                name: <span className="text-green-400">'Rohith Kambham'</span>,
                <br />
                role:{" "}
                <span className="text-green-400">'Backend Developer'</span>,
                <br />
                experience: <span className="text-orange-400">2</span> +{" "}
                <span className="text-green-400">' Years'</span>,<br />
                primaryStack: [<span className="text-green-400">
                  'Java'
                </span>, <span className="text-green-400">'Spring Boot'</span>,{" "}
                <span className="text-green-400">'C++'</span>,{" "}
                <span className="text-green-400">'FastAPI'</span>],
                <br />
                location:{" "}
                <span className="text-green-400">'Hyderabad, India'</span>,
                <br />
                status:{" "}
                <span className="text-green-400">'Open to Opportunities'</span>
              </div>
              <div className="text-gray-400">{"}"};</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
            <User className="text-cyan-500" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a Backend Software Developer with over 2 years of
                experience building reliable systems, APIs, and automation
                tools. I specialize in Java, Spring Boot, and C++, focusing on
                performance optimization and scalable architectures.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently, I engineer backend applications and high-volume batch
                processing solutions that support large-scale enterprise
                workflows, ensuring data integrity and seamless database
                operations.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-medium">
                <MapPin size={18} /> Hyderabad, India
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years", icon: Briefcase },
                {
                  label: "Core Focus",
                  value: "Backend Development",
                  icon: Server,
                },
                { label: "Expertise", value: "API Engineering", icon: Code2 },
                {
                  label: "Environment",
                  value: "Enterprise Projects",
                  icon: ShieldCheck,
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/5 bg-gray-900/50 hover:bg-gray-800 transition-colors group"
                >
                  <card.icon
                    className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                  <h4 className="text-xl font-bold text-white mb-1">
                    {card.value}
                  </h4>
                  <p className="text-sm text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 border-t border-white/5 bg-gray-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
            <Cpu className="text-cyan-500" /> Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programming",
                skills: ["Java", "C++", "Python", "C", "SQL", "JavaScript"],
                icon: Terminal,
              },
              {
                title: "Backend & APIs",
                skills: [
                  "Spring Boot",
                  "Spring MVC",
                  "FastAPI",
                  "REST APIs",
                  "Microservices",
                  "WebSockets",
                ],
                icon: Server,
              },
              {
                title: "Java Concepts",
                skills: [
                  "OOP",
                  "Collections",
                  "Generics",
                  "Multithreading",
                  "Exception Handling",
                  "Serialization",
                ],
                icon: Code2,
              },
              {
                title: "Databases",
                skills: [
                  "Oracle",
                  "MySQL",
                  "Cassandra",
                  "JDBC",
                  "Spring Data JPA",
                ],
                icon: Database,
              },
              {
                title: "Tools & DevOps",
                skills: [
                  "Git/GitHub",
                  "Docker",
                  "Maven",
                  "Linux",
                  "Swagger",
                  "Postman",
                  "AWS Fundamentals",
                ],
                icon: LayoutGrid,
              },
              {
                title: "Testing & Frontend",
                skills: [
                  "JUnit",
                  "Mockito",
                  "API Testing",
                  "HTML/CSS",
                  "JavaScript",
                  "Angular",
                ],
                icon: FileCode,
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/5 bg-gray-900/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-cyan-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
            <Briefcase className="text-cyan-500" /> Professional Experience
          </h2>
          <div className="p-8 rounded-xl border border-white/5 bg-gray-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Software Developer
                </h3>
                <p className="text-xl text-cyan-400 mt-1">
                  Tata Consultancy Services (TCS)
                </p>
                <p className="text-gray-400 mt-1">Client: Verizon</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-gray-300 font-medium">
                  September 2024 – Present
                </p>
                <p className="text-gray-500 text-sm">Hyderabad, India</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 mt-8 list-none">
              {[
                "Developed a billing reconciliation component to identify non-usage-generating accounts and generate accurate bill summary records, supporting 100% account reconciliation.",
                "Worked on Rate Regression and End-of-Cycle (EOC) regression activities to validate billing and rating scenarios.",
                "Designed and developed a Python-based Rate Regression application from scratch using FastAPI, REST APIs, and WebSockets.",
                "Built a frontend interface to simplify regression execution and provide real-time execution logs.",
                "Implemented per-record exception handling to gracefully handle unique constraint violations during high-volume database insertion.",
                "Improved batch-processing reliability by handling duplicate rate-charge records without interrupting overage account processing.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 border-t border-white/5 bg-gray-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
            <Code2 className="text-cyan-500" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Rate Regression Automation",
                description:
                  "A comprehensive regression automation application developed from scratch to simplify rate regression execution via a frontend UI with real-time WebSocket logs.",
                tags: ["FastAPI", "Python", "REST APIs", "WebSockets"],
              },
              {
                title: "ODC Seat Management System",
                description:
                  "A backend-oriented application managing office seat availability, booking, and user operations using microservices architecture.",
                tags: ["Java", "Spring Boot", "MySQL", "Microservices"],
              },
              {
                title: "Weather Forecasting App",
                description:
                  "A responsive weather application retrieving data through external REST API integration and updating dynamic UI layouts.",
                tags: ["JavaScript", "HTML/CSS", "REST API"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/5 bg-gray-900/80 hover:-translate-y-1 transition-transform flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <FileCode2 className="text-cyan-400" size={32} />
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <GraduationCap className="text-cyan-500" /> Education
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-white/5 bg-gray-900/50">
                <h3 className="text-lg font-bold text-white">
                  B.Tech in Electronics & Communication
                </h3>
                <p className="text-cyan-400">IIIT Guwahati</p>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>2020 - 2024</span>
                  <span>CGPA: 7.45</span>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-gray-900/50">
                <h3 className="text-lg font-bold text-white">
                  Intermediate (MPC)
                </h3>
                <p className="text-cyan-400">Sri Chaitanya Junior College</p>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>2018 - 2020</span>
                  <span>91.9%</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <ShieldCheck className="text-cyan-500" /> Certifications
            </h2>
            <div className="p-6 rounded-xl border border-white/5 bg-gray-900/50 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Claude Certified Developer
              </h3>
              <p className="text-gray-400 mb-6">Foundations Level</p>
              <a
                href="https://www.credly.com/badges/002c97a6-a06b-4d41-9875-e50fcab85aa0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
              >
                View Credential <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/5 bg-gray-900/20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Have a project or opportunity in mind?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              I'm always interested in connecting with developers, recruiters,
              and teams working on meaningful software products.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:rohithkambham22@gmail.com"
                className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-lg gap-3"
              >
                <Mail className="text-cyan-500" size={24} />{" "}
                rohithkambham22@gmail.com
              </a>

              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/rohithk2224"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-white/10 bg-gray-900 hover:bg-gray-800"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohith-kambham-051121241/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-white/10 bg-gray-900 hover:bg-gray-800"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/5">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // PLACEHOLDER: Connect your Formspree, EmailJS, or backend API here.
                // As requested, no fake success message is shown since it's not connected yet.
                console.log("Form submitted. Awaiting backend integration.");
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-gray-950 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-gray-950 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-gray-950 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full bg-gray-950 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Hello Rohith, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rohith Kambham. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
