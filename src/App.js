import { useState, useEffect } from "react"
import "./App.css"
import profileImg from "./img/Profile.png";


// Main Portfolio Component
function Portfolio() {
    const [activeSection, setActiveSection] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contacts"]
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetBottom = offsetTop + element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    const scrollToProjects = () => {
        const element = document.getElementById("projects")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        alert("Thank you for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitting(false)
    }

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contacts", label: "Contacts" },
    ]

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description:
                "A modern e-commerce mobile application with intuitive user experience and seamless checkout process.",
            tags: ["Mobile Design", "UI/UX", "Figma", "Prototyping"],
        },
        {
            id: 2,
            title: "Project 2",
            description:
                "Clean and professional dashboard design for a SaaS platform with data visualization and user management.",
            tags: ["Web Design", "Dashboard", "Data Viz", "React"],
        },
        {
            id: 3,
            title: "Project 3",
            description:
                "Complete redesign of a banking application focusing on accessibility and user-friendly financial management.",
            tags: ["Mobile App", "Fintech", "Accessibility", "UX Research"],
        },
        {
            id: 4,
            title: "Project 4",
            description:
                "End-to-end design for a food delivery platform including customer app, restaurant dashboard, and delivery tracking.",
            tags: ["Multi-platform", "Service Design", "User Journey", "Branding"],
        },
        {
            id: 5,
            title: "Project 5",
            description:
                "Patient portal design for healthcare providers with appointment scheduling and medical record management.",
            tags: ["Healthcare", "Web Portal", "HIPAA Compliant", "Accessibility"],
        },
        {
            id: 6,
            title: "Project 6",
            description:
                "Educational platform design with course management, progress tracking, and interactive learning modules.",
            tags: ["EdTech", "LMS", "Interactive Design", "Gamification"],
        },
    ]

    const designSkills = [
        { name: "UI Design", level: 95 },
        { name: "UX Research", level: 90 },
        { name: "Prototyping", level: 92 },
        { name: "Wireframing", level: 88 },
        { name: "User Testing", level: 85 },
    ]

    const technicalSkills = [
        { name: "Figma", level: 98 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Adobe Photoshop", level: 88 },
        { name: "Adobe Illustrator", level: 82 },
    ]

    const developmentSkills = [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 92 },
    ]

  return (
      <div className="portfolio">
          {/* Navigation */}
          <nav className="navigation">
              <div className="nav-container">
                  <div className="nav-brand" onClick={() => scrollToSection("home")}>
                      <h1>Portfolio</h1>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="nav-desktop">
                      {navItems.map((item) => (
                          <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                          >
                              {item.label}
                          </button>
                      ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <button className="nav-mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <div className="hamburger">
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>
                  </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                  <div className="nav-mobile">
                      {navItems.map((item) => (
                          <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`nav-mobile-link ${activeSection === item.id ? "active" : ""}`}
                          >
                              {item.label}
                          </button>
                      ))}
                  </div>
              )}
          </nav>

          {/* Hero Section */}
          <section id="home" className="hero-section">
              <main className="hero-content">
                  <div className="hero-text">
                      <p className="hero-greeting">HI, I'M JHO</p>
                      <h1 className="hero-title">
                          I'M UI/UX
                          <br />
                          Designer
                      </h1>
                      <p className="hero-description">I'm Jho Raven Abalos, Designer of UI/UX for Frontend Designs.</p>

                      <button onClick={scrollToProjects} className="hero-btn">
                          VIEW MY PROJECTS
                      </button>

                      {/* Social Links */}
                      <div className="social-links">
                          <a href="https://github.com/rvnjh" target="_blank" rel="noopener noreferrer" className="social-link">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/a-jho-31bbb2371/" target="_blank" rel="noopener noreferrer" className="social-link">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          <a href="https://mail.google.com/mail/u/0/#inbox" className="social-link">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z" />
                              </svg>
                          </a>
                      </div>
                  </div>

                  {/* Profile Image */}
                  <div className="hero-image">
                      <img src={profileImg} alt="Jho Raven Abalos - UI/UX Designer" className="profile-img" />
                  </div>
              </main>
          </section>

          {/* About Section */}
          <section id="about" className="about-section">
              <div className="container">
                  <div className="section-header">
                      <h2>About Me</h2>
                      <p>
                          Passionate UI/UX Designer with a keen eye for detail and a love for creating intuitive digital experiences
                          that solve real-world problems.
                      </p>
                  </div>

                  <div className="about-content">
                      <div className="about-text">
                          <h3>My Story</h3>
                          <p>
                              Hello! I'm Jho Raven Abalos, a dedicated UI/UX Designer specializing in frontend designs. My journey in
                              design began with a fascination for how digital interfaces can bridge the gap between complex technology
                              and human needs.
                          </p>
                          <p>
                              With over 3 years of experience in the field, I've had the privilege of working on diverse projects
                              ranging from mobile applications to enterprise web platforms. I believe that great design is not just
                              about aesthetics—it's about creating meaningful experiences that resonate with users.
                          </p>
                          <p>
                              When I'm not designing, you can find me exploring new design trends, contributing to open-source
                              projects, or mentoring aspiring designers in the community.
                          </p>

                          {/* Education Timeline */}
                          <div className="education-section">
                              <h3 className="education-title">EDUCATION</h3>
                              <div className="timeline">
                                  <div className="timeline-item">
                                      <div className="timeline-marker"></div>
                                      <div className="timeline-content">
                                          <p className="timeline-date">2022-2025</p>
                                          <h4>Computer Engineer Undergrad</h4>
                                          <p>Technical Institute of the Philippines | Metro Manila: Quiapo, Manila</p>
                                      </div>
                                  </div>

                                  <div className="timeline-item">
                                      <div className="timeline-marker"></div>
                                      <div className="timeline-content">
                                          <p className="timeline-date">2020-2022</p>
                                          <h4>Senior High School: STEM (Science Technology, Engineering and Mathematics)</h4>
                                          <p>Unida Christian College | Imus Cavite: Anabu 1F</p>
                                      </div>
                                  </div>

                                  <div className="timeline-item">
                                      <div className="timeline-marker"></div>
                                      <div className="timeline-content">
                                          <p className="timeline-date">2016-2020</p>
                                          <h4>Imus National High School Main</h4>
                                          <p>Imus Cavite: Bucandala</p>
                                      </div>
                                  </div>

                                  <div className="timeline-item">
                                      <div className="timeline-marker"></div>
                                      <div className="timeline-content">
                                          <p className="timeline-date">2010-2016</p>
                                          <h4>Alapan 1 Elementary School</h4>
                                          <p>Imus Cavite: Alapan 1- B</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="about-cards">
                          <div className="info-card">
                              <div className="card-icon">📅</div>
                              <div>
                                  <h4>Experience</h4>
                                  <p>3+ Years in UI/UX Design</p>
                              </div>
                          </div>

                          <div className="info-card">
                              <div className="card-icon">📍</div>
                              <div>
                                  <h4>Location</h4>
                                  <p>Philippines</p>
                              </div>
                          </div>

                          <div className="info-card">
                              <div className="card-icon">🏆</div>
                              <div>
                                  <h4>Specialization</h4>
                                  <p>Frontend UI/UX Design</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section">
              <div className="container">
                  <div className="section-header">
                      <h2>Skills & Expertise</h2>
                      <p>
                          A comprehensive overview of my technical skills and design expertise developed through years of hands-on
                          experience and continuous learning.
                      </p>
                  </div>

                  <div className="skills-grid">
                      <div className="skill-card">
                          <h3>Design Skills</h3>
                          <div className="skills-list">
                              {designSkills.map((skill) => (
                                  <div key={skill.name} className="skill-item">
                                      <span className="skill-name">{skill.name}</span>
                                      <div className="progress-bar">
                                          <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="skill-card">
                          <h3>Design Tools</h3>
                          <div className="skills-list">
                              {technicalSkills.map((skill) => (
                                  <div key={skill.name} className="skill-item">
                                      <span className="skill-name">{skill.name}</span>
                                      <div className="progress-bar">
                                          <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="skill-card">
                          <h3>Development</h3>
                          <div className="skills-list">
                              {developmentSkills.map((skill) => (
                                  <div key={skill.name} className="skill-item">
                                      <span className="skill-name">{skill.name}</span>
                                      <div className="progress-bar">
                                          <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects-section">
              <div className="container">
                  <div className="section-header">
                      <h2>Featured Projects</h2>
                      <p>
                          A showcase of my recent work spanning various industries and platforms, demonstrating my ability to create
                          user-centered design solutions.
                      </p>
                  </div>

                  <div className="projects-grid">
                      {projects.map((project) => (
                          <div key={project.id} className="project-card">
                              <div className="project-image">
                                  <img src="/api/placeholder/400/300" alt={project.title} />
                                  <div className="project-overlay">
                                      <button className="project-btn">Live Demo</button>
                                      <button className="project-btn">Code</button>
                                  </div>
                              </div>

                              <div className="project-content">
                                  <h3>{project.title}</h3>
                                  <p>{project.description}</p>

                                  <div className="project-tags">
                                      {project.tags.map((tag) => (
                                          <span key={tag} className="tag">
                                              {tag}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Certificates Section */}
                  <div className="certificates-section">
                      <h3>Certificates</h3>
                      <div className="certificates-grid">
                          <div className="certificate-card" onClick={() => window.open("#", "_blank")}>
                              <p className="cert-date">Cisco Networking Academy | Dec 2024</p>
                              <h4>Switching, Routing & Wireless Essentials</h4>
                          </div>

                          <div className="certificate-card" onClick={() => window.open("#", "_blank")}>
                              <p className="cert-date">Cisco Networking Academy | May 2024</p>
                              <h4>Introduction of Networking</h4>
                          </div>

                          <div className="certificate-card" onClick={() => window.open("#", "_blank")}>
                              <p className="cert-date">Mapua University | Nov 2023</p>
                              <h4>Blockchain Campus Conference</h4>
                          </div>
                      </div>
                  </div>

                  <div className="section-footer">
                      <button className="view-all-btn">View All Projects</button>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="contacts" className="contact-section">
              <div className="contact-content">
                  <div className="container">
                      <div className="contact-grid">
                          {/* Left Side - Contact Information */}
                          <div className="contact-info">
                              <h2>Get in Touch</h2>

                              <div className="contact-details">
                                  <h3>Contact Information</h3>

                                  <div className="contact-item">
                                      <h4>Email</h4>
                                      <p>abalosjhoraven@gmail.com</p>
                                  </div>

                                  <div className="contact-item">
                                      <h4>Phone</h4>
                                      <p>+63 9684280910</p>
                                  </div>

                                  <div className="contact-item">
                                      <h4>Location</h4>
                                      <p>Imus Cavite, Philippines</p>
                                  </div>
                              </div>
                          </div>

                          {/* Right Side - Contact Form */}
                          <div className="contact-form-container">
                              <h3>Send me a Message</h3>

                              <form onSubmit={handleSubmit} className="contact-form">
                                  <div className="form-group">
                                      <label htmlFor="name">Name:</label>
                                      <input
                                          id="name"
                                          name="name"
                                          type="text"
                                          required
                                          value={formData.name}
                                          onChange={handleInputChange}
                                          className="form-input"
                                      />
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="email">Email:</label>
                                      <input
                                          id="email"
                                          name="email"
                                          type="email"
                                          required
                                          value={formData.email}
                                          onChange={handleInputChange}
                                          className="form-input"
                                      />
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="subject">Subject :</label>
                                      <input
                                          id="subject"
                                          name="subject"
                                          type="text"
                                          required
                                          value={formData.subject}
                                          onChange={handleInputChange}
                                          className="form-input"
                                      />
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="message">Message</label>
                                      <textarea
                                          id="message"
                                          name="message"
                                          required
                                          value={formData.message}
                                          onChange={handleInputChange}
                                          rows={6}
                                          className="form-textarea"
                                      />
                                  </div>

                                  <button type="submit" disabled={isSubmitting} className="form-submit">
                                      {isSubmitting ? "Sending..." : "Send message"}
                                  </button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Footer Section */}
              <div className="footer">
                  <div className="container">
                      <div className="footer-content">
                          {/* Social Media Icons */}
                          <div className="footer-social">
                              <a href="https://www.facebook.com/joven.abalos.16" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                  </svg>
                              </a>
                              <a href="https://www.linkedin.com/in/a-jho-31bbb2371/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                  </svg>
                              </a>
                              <a
                                  href="https://www.instagram.com/rvn.gog/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer-social-link"
                              >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                  </svg>
                              </a>
                              <a href="https://mail.google.com/mail/u/0/#inbox" className="footer-social-link">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z" />
                                  </svg>
                              </a>
                          </div>

                          {/* Copyright */}
                          <p className="footer-copyright">@2025 Jho Abalos | All Rights Reserved.</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Portfolio
