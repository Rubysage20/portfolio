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
      tech: ["Spring Boot", "React", "MongoDB", "REST APIs", "Java"],
      features: [
        "Complete patient and doctor management",
        "Appointment scheduling system",
        "Automated payroll calculation",
        "Real-time dashboard with analytics",
        "Secure data management"
      ],
      github: "https://github.com/Rubysage20/Hospital",
      live: "https://rubysage20.github.io/ePortfolio/",
      image: "🏥"
    },
    {
      title: "HomeFlow",
      description: "Household task management application with intelligent auto-assign algorithm that fairly distributes tasks based on workload, availability, and priorities.",
      tech: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript"],
      features: [
        "Smart task auto-assignment algorithm",
        "Real-time task updates",
        "Household member management",
        "Point-based gamification system",
        "Responsive cross-platform design"
      ],
      github: "https://github.com/Rubysage20/HomeFlow",
      live: null,
      image: "🏡"
    }
  ];

  const skills = {
    frontend: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
    backend: ["Node.js", "Express", "Spring Boot", "Java", "Python", "REST APIs"],
    database: ["MongoDB", "MySQL", "Database Design", "NoSQL"],
    cloud: ["AWS", "Cloud Architecture", "Docker", "Git", "CI/CD"]
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1a202c' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(184, 134, 134, 0.2)',
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '3px solid #b88686'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #b88686 0%, #d4af9a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Valerie Dawson
          </h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['home', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: activeSection === section ? '#b88686' : '#4a5568',
                  fontWeight: activeSection === section ? '600' : '400',
                  transition: 'color 0.3s',
                  textTransform: 'capitalize'
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #b88686 0%, #d4af9a 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <img 
            src="/me.jpg" 
            alt="Valerie Dawson" 
            style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '5px solid white',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              marginBottom: '2rem',
              animation: 'float 3s ease-in-out infinite'
            }} 
          />
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 'bold', animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            Valerie Dawson
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '300', opacity: 0.95, animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            Full-Stack Developer | Cloud Engineering Enthusiast
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: '1.8', opacity: 0.9, animation: 'fadeInUp 1s ease-out 0.6s both' }}>
            Building scalable web applications with modern technologies. Recently graduated with a BS in Computer Science, passionate about creating efficient, user-friendly solutions.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 1s ease-out 0.8s both' }}>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                background: 'white',
                color: '#b88686',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'transform 0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              View Projects
            </a>
            <a
              href="https://github.com/Rubysage20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Github size={20} /> GitHub
            </a>
          </div>
          <div style={{ marginTop: '4rem' }}>
            <ChevronDown size={32} style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold', color: '#8b5a5a' }}>
          About Me
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I'm a recent Computer Science graduate from Southern New Hampshire University with a passion for building full-stack applications. I love diving deep into both frontend and backend development, creating seamless experiences from database to user interface.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My journey into software development has been driven by a genuine excitement for problem-solving and the challenge of turning complex requirements into elegant, functional code. I specialize in full-stack development with expertise in modern frameworks and cloud technologies.
          </p>
          <p>
            Currently pursuing opportunities in Cloud Engineering and Full-Stack Development where I can contribute to meaningful projects, collaborate with talented teams, and continue growing as a developer.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #faf6f4 0%, #ffffff 50%, #f5e8e4 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold', color: '#8b5a5a' }}>
            Featured Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '2rem',
                  boxShadow: '0 4px 20px rgba(184, 134, 134, 0.2)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '2px solid rgba(184, 134, 134, 0.2)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 134, 134, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 134, 134, 0.2)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{project.image}</div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 'bold', color: '#8b5a5a' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#8b5a5a' }}>
                    Key Features:
                  </h4>
                  <ul style={{ color: '#4a5568', paddingLeft: '1.5rem' }}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(184, 134, 134, 0.1)',
                        color: '#b88686',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid rgba(184, 134, 134, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: '#8b5a5a',
                      color: 'white',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#6d4c4c'}
                    onMouseOut={(e) => e.target.style.background = '#8b5a5a'}
                  >
                    <Github size={18} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #b88686 0%, #c59484 100%)',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'background 0.3s'
                      }}
                      onMouseOver={(e) => e.target.style.background = 'linear-gradient(135deg, #d4af9a 0%, #e0c4b3 100%)'}
                      onMouseOut={(e) => e.target.style.background = 'linear-gradient(135deg, #b88686 0%, #c59484 100%)'}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold', color: '#8b5a5a' }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(184, 134, 134, 0.05) 0%, rgba(212, 175, 154, 0.05) 100%)', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.15)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Code size={28} style={{ color: '#b88686' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5a5a', margin: 0 }}>Frontend</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(184, 134, 134, 0.15)', color: '#8b5a5a', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.95rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(184, 134, 134, 0.05) 0%, rgba(212, 175, 154, 0.05) 100%)', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.15)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Database size={28} style={{ color: '#b88686' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5a5a', margin: 0 }}>Backend</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.backend.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(184, 134, 134, 0.15)', color: '#8b5a5a', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.95rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(184, 134, 134, 0.05) 0%, rgba(212, 175, 154, 0.05) 100%)', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.15)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Database size={28} style={{ color: '#b88686' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5a5a', margin: 0 }}>Database</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.database.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(184, 134, 134, 0.15)', color: '#8b5a5a', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.95rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(184, 134, 134, 0.05) 0%, rgba(212, 175, 154, 0.05) 100%)', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.15)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Cloud size={28} style={{ color: '#b88686' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5a5a', margin: 0 }}>Cloud & Tools</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.cloud.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(184, 134, 134, 0.15)', color: '#8b5a5a', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.95rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #faf6f4 0%, #ffffff 50%, #f5e8e4 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold', color: '#8b5a5a' }}>
            Education & Certifications
          </h2>
          
          <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* BS in Computer Science */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.2)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5a5a', marginBottom: '0.5rem' }}>
                Bachelor of Science in Computer Science
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#b88686', fontWeight: '600', marginBottom: '0.5rem' }}>
                Southern New Hampshire University
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                2025 | Coursework Completed
              </p>
              <div style={{ borderTop: '2px solid rgba(184, 134, 134, 0.2)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#8b5a5a', marginBottom: '1rem' }}>
                  Relevant Coursework:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', color: '#4a5568' }}>
                  <div>• Data Structures & Algorithms</div>
                  <div>• Database Management</div>
                  <div>• Web Development</div>
                  <div>• Cloud Computing</div>
                  <div>• Software Engineering</div>
                  <div>• Object-Oriented Programming</div>
                </div>
              </div>
            </div>

            {/* AAS in Information Technology */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.2)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5a5a', marginBottom: '0.5rem' }}>
                Associate of Applied Science in Information Technology
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#b88686', fontWeight: '600', marginBottom: '0.5rem' }}>
                Community College of Baltimore County
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
                Foundation in IT infrastructure, networking, and systems administration
              </p>
            </div>

            {/* Programming Certificate */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.2)', border: '2px solid rgba(184, 134, 134, 0.2)' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5a5a', marginBottom: '0.5rem' }}>
                Certificate in Programming
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#b88686', fontWeight: '600', marginBottom: '0.5rem' }}>
                Community College of Baltimore County
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
                Comprehensive programming fundamentals and software development
              </p>
            </div>

            {/* AWS Certification */}
            <div style={{ background: 'linear-gradient(135deg, rgba(184, 134, 134, 0.1) 0%, rgba(212, 175, 154, 0.1) 100%)', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(184, 134, 134, 0.2)', border: '2px solid rgba(184, 134, 134, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <Cloud size={32} style={{ color: '#b88686' }} />
                <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5a5a', margin: 0 }}>
                  AWS Certified Cloud Practitioner
                </h3>
              </div>
              <p style={{ fontSize: '1.25rem', color: '#b88686', fontWeight: '600', marginBottom: '0.5rem' }}>
                Amazon Web Services
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
                Foundational AWS cloud concepts, services, security, and architecture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #b88686 0%, #d4af9a 100%)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'bold' }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.95' }}>
            I'm actively seeking opportunities in Full-Stack Development and Cloud Engineering. Let's build something great together!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:Valeriedawson513@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'white',
                color: '#b88686',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <Mail size={20} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/valerie-dawson-se"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/Rubysage20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', background: 'linear-gradient(135deg, #8b5a5a 0%, #6d4c4c 100%)', color: 'white', textAlign: 'center', borderTop: '3px solid #b88686' }}>
        <p style={{ margin: 0 }}>
          © 2025 Valerie Dawson. Built with React.
        </p>
      </footer>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink {
            50% { border-color: transparent; }
          }
          
          .animate-on-scroll {
            animation: fadeInUp 0.8s ease-out;
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
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