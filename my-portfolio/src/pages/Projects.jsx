import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="project">
        <h3>Doctor Booking App</h3>
        <p>Flutter + Node.js app with role-based authentication and live chat.</p>
        <a href="https://github.com/yourusername/doctor-app" target="_blank">
          GitHub
        </a>
      </div>

      <div className="project">
        <h3>ERP Messaging System</h3>
        <p>Angular + .NET + SignalR real-time messaging system.</p>
        <a href="https://github.com/yourusername/erp-system" target="_blank">
          GitHub
        </a>
      </div>

      <div className="project">
        <h3>Inventory Management System</h3>
        <p>ASP.NET + SQL Server system with Windows authentication.</p>
        <a href="https://github.com/yourusername/inventory-system" target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;