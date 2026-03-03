import React from "react";
import "../App.css"


function Home()
{
    return(
         <section className="hero">
      <h1>Darshana Weerasooriya</h1>
      <h2>Software Engineer</h2>
      <p>Full Stack Developer | React | Node.js | ASP.NET | Flutter</p>

      <div className="hero-buttons">
        <a href="/cv.pdf" download className="btn">
          Download CV
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary"
        >
          LinkedIn
        </a>
      </div>
    </section>

    );

}
export default Home;