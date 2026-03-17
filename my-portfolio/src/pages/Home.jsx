import React from "react";
import "../App.css";
import profile from "../assets/profilepic.jpg";

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-content">

          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight-text">Darshana Weerasooriya</span>
            </h1>

            <h2 className="title">Software Engineer</h2>

            <p className="description">
              Full Stack Developer specializing in React, Node.js, ASP.NET and Flutter.
              I build scalable web and mobile applications with modern technologies.
            </p>

            <div className="hero-buttons">
              <a href="/Darshana_Weerasooriya_CV.pdf" className="btn primary" download>
                Download CV
              </a>

              <a href="#projects" className="btn secondary">
                View Projects
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={profile} alt="Darshana Weerasooriya" />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">

          <h2>About Me</h2>

          <p className="about-text">
            I am a passionate Software Engineer with experience in full-stack web and
            mobile application development. I specialize in building scalable and
            user-friendly applications using modern technologies such as React, Node.js,
            ASP.NET, and Flutter. I enjoy designing efficient backend systems, creating
            responsive user interfaces, and continuously learning new technologies to
            improve my development skills.
          </p>

          <h3>Education</h3>
          <p className="about-text">
            I hold a BSc (Hons) in Software Engineering from the University of Plymouth
            (NSBM Green University), where I graduated with a Second Class Upper Division.
            I completed my GCE O/L and A/L (Biology Stream) at Kegalu Vidyalaya.
          </p>

          <h3>Experience</h3>
          <p className="about-text">
            Alongside my development work, I have gained industry experience as a Software Developer Intern, 
            where I worked on real world software development tasks and improved my practical development skills. 
            In addition, I am involved in academia as a University Demonstrator, where I support students in 
            learning programming, databases, and software development concepts. These experiences have helped me develop
            strong technical, communication, mentoring, and problem-solving skills.
          </p>

          <p className="about-text">
            I am passionate about building impactful software solutions, contributing
            to innovative projects, and continuously growing as a software engineer
            in both industry and academic environments.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">React</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">ASP.NET</div>
            <div className="skill-card">Flutter</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">SQL Server</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>

          <div className="projects-grid">

            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\poster.jpg" alt="Doctor App" />
              </div>

              <div className="project-content">
                <h4>University Project</h4>
                <h3>Pediatric skin diseases mobile app</h3>
                <p>Developed an AI-powered mobile application to help parents detect children’s skin diseases at an early stage using a CNN model. 
                  Built with Flutter and integrated via a FastAPI backend, the app achieved 85% prediction accuracy. 
                  This project highlights my skills in machine learning, mobile development, and backend integration.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\smedia.jpg" alt="Resort App" />
              </div>

              <div className="project-content">
                <h4>Web Application</h4>
                <h3>Gamified Social Media Platform for Students</h3>
                <p>Developed a gamified social media platform to encourage students to share academic content and improve engagement. 
                  Built using React, Node.js, and MongoDB, the system includes role-based access for students, teachers, 
                  and admins, along with a custom reward system to promote active participation and collaboration.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card mb-2">
              <div className="project-image">
                <img src=".\src\assets\poster.jpg" alt="ERP System" />
              </div>

              <div className="project-content">
                <h3>ERP Messaging System</h3>
                <p>Angular + .NET SignalR real-time messaging platform.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <h2>Contact</h2>

          <div className="contact-box">
            <p>Email: darshana@email.com</p>
            <p>LinkedIn: linkedin.com/in/darshana</p>
            <p>GitHub: github.com/darshana</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;