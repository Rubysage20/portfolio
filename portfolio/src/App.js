import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "Hospital Management System",
      description: "Full-stack healthcare application featuring appointment scheduling, patient management, payroll system, and comprehensive CRUD operations.",
      tech: ["React", "Spring Boot", "MongoDB",  "Maven", "REST APIs"],
      link: "https://rubysage20.github.io/ePortfolio/",
      color: "from-rose-400 to-pink-400"
    },
    {
      title: "HomeFlow Dashboard",
      description: "Modern IoT home automation system with real-time data visualization, smart device control, and responsive dashboard design.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      link: "#",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "JavaScript", "HTML/CSS", "Tailwind"], icon: Code },
    { category: "Backend", items: ["Node.js", "Spring Boot", "Express", "REST APIs", "Java"], icon: Database },
    { category: "Cloud & Tools", items: ["Git", "MongoDB", "AWS (Learning)", "Docker (Learning)"], icon: Cloud }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50 border-b-4 border-rose-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              VD
            </h1>
            <div className="flex gap-6">
              {['home', 'about', 'projects', 'skills', 'education' 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all hover:text-rose-500 ${
                    activeSection === section ? 'text-rose-500' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 p-1 mx-auto">
              <img 
                src="/me.jpg" 
                alt="Valerie Dawson"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
            Valerie Dawson
          </h1>
          <p className="text-2xl text-gray-700 mb-6">Full-Stack Developer & Cloud Engineering Enthusiast</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            BS in Computer Science from SNHU. Passionate about building scalable web applications 
            and exploring cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:Valeriedawson513@gmail.com" className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
              Get In Touch
            </a>
            <a href="https://github.com/Rubysage20" target="_blank" rel="noopener noreferrer" className="border-2 border-rose-400 text-rose-500 px-8 py-3 rounded-full font-medium hover:bg-rose-50 transition-all">
              View GitHub
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="mx-auto text-rose-400" size={32} />
          </div>
        </div>
      </section>
{/* About Section */}
<section id="about" className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
      About Me
    </h2>
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          My path to software development began with a degree in Information Technology, where I quickly 
          realized my passion lay not in networking infrastructure, but in building software. While IT 
          provided valuable foundational knowledge, I craved deeper engagement with coding and software 
          development. This realization led me to pursue a BS in Computer Science at Southern New Hampshire 
          University, where I earned a place on the President's List every single semester—a testament to 
          my dedication and love for the craft.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What Drives Me</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          What excites me most about technology is its constant evolution—there's always something new to 
          learn, always a better way to solve a problem. I'm particularly drawn to cloud engineering because 
          I want to be part of the revolution happening in that space. From containerization and serverless 
          architectures to AI/ML integration and edge computing, the cloud is reshaping how we build and 
          deploy applications. I recently completed AWS Foundations through Arizona Global University and 
          have my AWS Certified Cloud Practitioner exam scheduled for January 13, 2026, marking the next 
          step in my journey toward becoming a Senior DevOps Engineer.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What I'm Looking For</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm seeking a full-stack development role where candor is valued—a workplace culture that embraces 
          honest communication, transparent feedback, and direct collaboration. I believe the best teams are 
          built on trust and open dialogue, where everyone feels empowered to share ideas, challenge 
          assumptions, and grow together. My background in customer service and executive administration has 
          taught me the importance of clear communication and understanding diverse perspectives, skills that 
          translate seamlessly into collaborative software development.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Beyond the Code</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          While I enjoy gaming, exploring different music genres, and taking nature walks to clear my mind, 
          coding has genuinely become my primary hobby. I'm constantly thinking about my next project or how 
          to enhance existing ones—whether it's refactoring for better performance, adding new features, or 
          experimenting with emerging technologies. This perpetual curiosity and drive for continuous 
          improvement isn't just part of my work; it's who I am. Every challenge is an opportunity to learn, 
          and every project is a chance to create something meaningful.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-500 font-medium hover:text-rose-600 transition-colors"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <Icon className="text-rose-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            I'm always open to new opportunities and collaborations!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:Valeriedawson513@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com/Rubysage20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/valerie-dawson-se"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © 2025 Valerie Dawson. Built with React.
        </p>
      </footer>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
}
