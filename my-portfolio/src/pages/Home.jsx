import React from "react";
import "../App.css";
import profile from "../assets/profilepic.jpg";
import fitness from "../assets/fitness.png"
import hero from "../assets/smedia.jpg"
import fitapp from "../assets/ftapp.jpg"
import pos from "../assets/pos1.png"
import  skindapp from "../assets/poster.jpg"
import furniturapp from "../assets/Picture1.jpg"
import Ai from "../assets/Ai.webp"
import sdlc from "../assets/sdlc.webp"
import sd from "../assets/sd.webp"


import {
  FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaGithub, FaHtml5, FaCss3,
  FaBootstrap, FaGitAlt, FaFigma, FaDocker
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiDart, SiFlutter, SiKotlin, SiMysql, SiDotnet, SiMongodb, SiFirebase, SiTensorflow, SiTailwindcss, SiExpress,

} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";


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

            <h2 className="title">Full Stack Software Engineer | React • Node.js • .NET • Flutter</h2>

            <p className="description">
              Full Stack Developer specializing in React, Node.js, ASP.NET and Flutter.
              I build scalable web and mobile applications with modern technologies.
            </p>

            <div className="hero-buttons">
              <a href="/Darshana Weerasooriya_Resume.pdf" className="btn primary" download>
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
          <h2>Technical Skills</h2>

          <div className="tech-grid">

            {/* Languages & Core */}
            <div className="tech-item" data-name="C#">
              <TbBrandCSharp size={50} style={{ color: "#239120" }} /> {/* Microsoft C# */}
            </div>

            <div className="tech-item" data-name="Java">
              <FaJava size={50} style={{ color: "#007396" }} />
            </div>

            <div className="tech-item" data-name="Python">
              <FaPython size={50} style={{ color: "#3776AB" }} />
            </div>

            <div className="tech-item" data-name="Kotlin">
              <SiKotlin size={50} style={{ color: "#7F52FF" }} />
            </div>

            <div className="tech-item" data-name="Dart">
              <SiDart size={50} style={{ color: "#0175C2" }} />
            </div>

            <div className="tech-item" data-name="JavaScript">
              <SiJavascript size={50} style={{ color: "#F7DF1E" }} />
            </div>

            <div className="tech-item" data-name="TypeScript">
              <SiTypescript size={50} style={{ color: "#3178C6" }} />
            </div>

            {/* Frameworks */}
            <div className="tech-item" data-name="React">
              <FaReact size={50} style={{ color: "#61DAFB" }} />
            </div>

            <div className="tech-item" data-name="Angular">
              <FaAngular size={50} style={{ color: "#DD0031" }} />
            </div>

            <div className="tech-item" data-name="Node.js">
              <FaNodeJs size={50} style={{ color: "#339933" }} />
            </div>

            <div className="tech-item" data-name="ASP.NET">
              <SiDotnet size={50} style={{ color: "#512BD4" }} />
            </div>

            <div className="tech-item" data-name="Flutter">
              <SiFlutter size={50} style={{ color: "#02569B" }} />
            </div>

            <div className="tech-item" data-name="React Native">
              <FaReact size={50} style={{ color: "#61DAFB" }} />
            </div>

            {/* Web */}
            <div className="tech-item" data-name="HTML">
              <FaHtml5 size={50} style={{ color: "#E34F26" }} />
            </div>

            <div className="tech-item" data-name="CSS">
              <FaCss3 size={50} style={{ color: "#1572B6" }} />
            </div>

            <div className="tech-item" data-name="Bootstrap">
              <FaBootstrap size={50} style={{ color: "#7952B3" }} />
            </div>

            <div className="tech-item" data-name="Tailwind CSS">
              <SiTailwindcss size={50} style={{ color: "#06B6D4" }} />
            </div>

            {/* Databases */}
            <div className="tech-item" data-name="MongoDB">
              <SiMongodb size={50} style={{ color: "#47A248" }} />
            </div>

            <div className="tech-item" data-name="MySQL">
              <SiMysql size={50} style={{ color: "#4479A1" }} />
            </div>

            <div className="tech-item" data-name="Firebase">
              <SiFirebase size={50} style={{ color: "#FFCA28" }} />
            </div>

            {/* Tools */}
            <div className="tech-item" data-name="Git">
              <FaGitAlt size={50} style={{ color: "#F05032" }} />
            </div>

            <div className="tech-item" data-name="GitHub"> <FaGithub size={50} style={{ color: "#ffffff" }} /> </div>

            <div className="tech-item" data-name="Figma">
              <FaFigma size={50} style={{ color: "#F24E1E" }} />
            </div>

            <div className="tech-item" data-name="TensorFlow">
              <SiTensorflow size={50} style={{ color: "#FF6F00" }} />
            </div>

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
                  <img src={skindapp} alt="doctor app" />
              </div>

              <div className="project-content">
                <h4>University Project</h4>
                <h3>Pediatric skin diseases mobile app</h3>
                <p>Developed an AI-powered mobile application to help parents detect children’s skin diseases at an early stage using a CNN model.
                  Built with Flutter and integrated via a FastAPI backend, the app achieved 85% prediction accuracy.
                  This project highlights my skills in machine learning, mobile development, and backend integration.</p>
              </div>

              <div className="project-buttons">
                <a href="https://github.com/darshanaweerasooriya/ChildCare.git" className="btn primary">View Project</a>
                <a href="https://github.com/darshanaweerasooriya/ChildCare.git" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src={hero}alt="Resort App" />
              </div>

              <div className="project-content">
                <h4>Web Application</h4>
                <h3>Gamified Social Media Platform for Students</h3>
                <p>Developed a gamified social media platform to encourage students to share academic content and improve engagement.
                  Built using React, Node.js, and MongoDB, the system includes role-based access for students, teachers,
                  and admins, along with a custom reward system to promote active participation and collaboration.</p>
              </div>

              <div className="project-buttons">
                <a href="https://github.com/darshanaweerasooriya/Hero-dev-.git" className="btn primary">View Project</a>
                <a href="https://github.com/darshanaweerasooriya/Hero-dev-.git" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card mb-2">
              <div className="project-image">
                <img src={fitapp} alt="ERP System" />
              </div>

              <div className="project-content">
                <h4>Mobile App</h4>
                <h3>Fitness & Diet Tracking Mobile Application</h3>
                <p>Developed a mobile application that generates personalized diet and workout plans based on user profiles using Flutter and a Node.js backend.
                  Implemented real-time chat with WebSocket, addressing synchronization challenges between users, and built backend logic to automatically calculate daily calorie and nutrient intake.
                  The app enhances user motivation through goal tracking, progress monitoring, and live coaching support.</p>
              </div>

              <div className="project-buttons">
           
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
                <img src={pos} alt="Doctor App" />
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
              
                <a href="https://github.com/darshanaweerasooriya/StationeryPOS.git" className="btn secondary">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src={fitness} alt="Resort App" />
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

              {/* <div className="project-buttons">
                <a href="" className="btn primary">View Project</a>
                <a href="#" className="btn secondary">GitHub</a>
              </div> */}
            </div>

            {/* Project 3 */}
            <div className="project-card mb-2">
              <div className="project-image">
                <img src={furniturapp} alt="ERPSystem" />
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
               
                <a href="https://github.com/Plymouth-University/main-assessment-group-20.git" className="btn secondary">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Articles */}
      <section id="article" className="fade-in">
        <div className="container">
          <h2>Articles</h2>

          <div className="projects-grid">

            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src={Ai} alt="Doctor App" />
              </div>

              <div className="project-content">

                <h3>Introduction to Artificial Intelligence , Machine Learning & Deep learning</h3>
                <p>Deep Learning (DL) is a part of Machine Learning (ML) and Machine Learning is a part of Artificial Intelligence .so,
                  Artificial Intelligence is a broad field that creates intelligent machines. While Machine Learning is mainly focused on algorithms and models that learn using data. On the other hand Deep learning uses a neural network to process and analyze complex data and It is a specialized form of machine learning.
                  In summary, These three fields are interconnected. And because of enabling machines to perform tasks that were once thought to be exclusive by humans various industries recolonized.</p>
              </div>

              <div className="project-buttons">
                <a href="https://medium.com/@darshanaweerasooriya11/introduction-to-artificial-intelligence-machine-learning-deep-learning-81b6b29d98d7" className="btn primary">Read the article</a>

              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src={sdlc} alt="Resort App" />
              </div>

              <div className="project-content">

                <h3>How Software Teams Deploy Projects to Production Every Week</h3>
                <p>In today’s world of software development, writing good code is just the start. The real magic happens in how teams test, build, and release that
                  code and do it consistently and safely.
                  Most professional teams use CI/CD pipelines to help them deliver production-ready software every single week. In this guide,
                  I’ll walk you through how that works in simple terms even if you’re new to the topic.</p>
              </div>

              <div className="project-buttons">
                <a href="https://medium.com/@darshanaweerasooriya11/how-software-teams-deploy-projects-to-production-every-week-b791494f6fe2" className="btn primary">Read the article</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card mb-4">
              <div className="project-image">
                <img src={sd} alt="ERP System" />
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
                <a href="https://medium.com/@darshanaweerasooriya11/software-architecture-a-z-a-complete-guide-for-developers-and-teams-b719b3f6d640" className="btn primary">Read the article</a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="fade-in">
        <div className="container">
          <h2>Contact Me</h2>

          <div className="contact-container">
            <div className="contact-info">
              <p>Email: <a href="mailto:darshana@email.com">darshanaweerasooriya11@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/darshana-weerasooriya-86a2ba215/" target="_blank" rel="noreferrer">Darshana Weerasooriya</a></p>
              <p>GitHub: <a href="https://github.com/darshanaweerasooriya" target="_blank" rel="noreferrer">darshanaweerasooriya</a></p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;