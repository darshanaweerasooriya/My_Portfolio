import React from "react";
import "../App.css";

function About() {
  return (
    <section className="page">
      <h2>Projects</h2>

      <div className="project">
        <h3>Doctor Booking App</h3>
        <p>Flutter + Node.js app with role-based authentication and live chat.</p>
      </div>

      <div className="project">
        <h3>ERP Messaging System</h3>
        <p>Angular + .NET + SignalR real-time messaging system.</p>
      </div>

      <div className="project">
        <h3>Inventory Management System</h3>
        <p>ASP.NET + SQL Server system with Windows authentication.</p>
      </div>
    </section>
  );
}
export default About;