import React from "react";
import "../App.css";
import profile from "../assets/profilepic.jpg";

function Home() {
  return (
    <>
      {/* HERO */}
    <section id="home" className="hero fade-in">
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
    <section id="about" className="fade-in">
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
      <section id="skills" className="fade-in">
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
    <section id="projects" className="fade-in">
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
                <img src=".\src\assets\ftapp.jpg" alt="ERP System" />
              </div>

              <div className="project-content">
                <h4>Mobile App</h4>
                <h3>Fitness & Diet Tracking Mobile Application</h3>
                <p>Developed a mobile application that generates personalized diet and workout plans based on user profiles using Flutter and a Node.js backend.
                  Implemented real-time chat with WebSocket, addressing synchronization challenges between users, and built backend logic to automatically calculate daily calorie and nutrient intake.
                  The app enhances user motivation through goal tracking, progress monitoring, and live coaching support.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

          </div>
        </div>
   
        <div className="container">


          <div className="projects-grid">

            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\pos1.png" alt="Doctor App" />
              </div>

              <div className="project-content">
                <h4>Desktop Application</h4>
                <h3>Stationery Shop POS System</h3>
                <p>Developed a desktop-based Point of Sale (POS) system using C#, .NET, and SQL Server to manage shop operations,
                  including inventory, billing, and sales analytics. Designed a relational database to handle
                  complex many-to-many relationships and implemented efficient CRUD operations for products and categories.
                  The system includes secure login, role-based access, and centralized management, improving overall store efficiency.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\fitness.png" alt="Resort App" />
              </div>

              <div className="project-content">
                <h4>Mobile Application</h4>
                <h3>Fitness & Diet Tracking Mobile Application</h3>
                <p>Developed a mobile application using Flutter and Node.js that generates personalized
                  diet and workout plans based on user profiles. Integrated real-time chat with WebSocket to
                  facilitate live communication and overcome synchronization challenges. The backend automatically
                  calculates daily calorie and nutrient intake, while features like goal tracking,
                  progress monitoring, and live coaching boost user motivation and engagement.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card mb-2">
              <div className="project-image">
                <img src=".\src\assets\Picture1.jpg" alt="ERP System" />
              </div>

              <div className="project-content">
                <h4>Desktop Application (Group Project)</h4>
                <h3>Phoenix Furniture Management Application</h3>
                <p>Developed a desktop application using Java Swing, OpenGL, and Java 3D that allows customers to
                  design and visualize furniture in both 2D and 3D before purchase. Overcame challenges in integrating
                  graphics technologies for interactive rendering, and implemented features such as product customization,
                  order placement, and order tracking.
                  The system helps customers make better purchasing decisions through realistic visual previews.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Articles */}
     <section id="contact" className="fade-in">
        <div className="container">
          <h2>Articles</h2>

          <div className="projects-grid">

            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\Ai.webp" alt="Doctor App" />
              </div>

              <div className="project-content">

                <h3>Introduction to Artificial Intelligence , Machine Learning & Deep learning</h3>
                <p>Deep Learning (DL) is a part of Machine Learning (ML) and Machine Learning is a part of Artificial Intelligence .so,
                  Artificial Intelligence is a broad field that creates intelligent machines. While Machine Learning is mainly focused on algorithms and models that learn using data. On the other hand Deep learning uses a neural network to process and analyze complex data and It is a specialized form of machine learning.
                  In summary, These three fields are interconnected. And because of enabling machines to perform tasks that were once thought to be exclusive by humans various industries recolonized.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">Read the article</a>

              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src=".\src\assets\sdlc.webp" alt="Resort App" />
              </div>

              <div className="project-content">

                <h3>How Software Teams Deploy Projects to Production Every Week</h3>
                <p>In today’s world of software development, writing good code is just the start. The real magic happens in how teams test, build, and release that
                  code and do it consistently and safely.
                  Most professional teams use CI/CD pipelines to help them deliver production-ready software every single week. In this guide,
                  I’ll walk you through how that works in simple terms even if you’re new to the topic.</p>
              </div>

              <div className="project-buttons">
                <a href="#" className="btn primary">Read the article</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card mb-2">
              <div className="project-image">
                <img src=".\src\assets\ftapp.jpg" alt="ERP System" />
              </div>

              <div className="project-content">
              
                <h3>Software Architecture A-Z: A Complete Guide for Developers and Teams</h3>
                <p>Software architecture is the foundation of every successful software project.
                  Whether you’re building a simple app or a complex system,
                  understanding architecture helps you design scalable, maintainable, and robust software.
                  In this article, we will explore software architecture from A to Z what it is, why it matters, common architectural styles,
                  and the roles involved in designing and maintaining it.</p>
              </div>

              <div className="project-buttons">
              <a href="#" className="btn primary">Read the article</a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="fade-in">
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