// src/components/Resume.jsx
import React from 'react';
import './Resume.css';
//import profileImage from './myphoto.jpg'; // Add your own image
import myPhoto from '../components/myphoto.jpg';


const Resume = () => {
  // Personal information - customize these values
  const personalInfo = {
    name: "Samrudh H V",
    title: "Software Developer",
    email: "samrudhsamrudh38@gmail.com",
    phone: "8310280471",
    location: "hassan karnataka",
    summary: " I am a dedicated computer science student with experience in AWS and web development, seeking growth and excellence in my career.  ",
    skills: ["React", "JavaScript", "Python", "CSS", "Java", "SQL", "Node.js", "AWS",  "Git"],
  };

  // Experience data
  const experience = [
    {
      id: 1,
      position: "Intern",
      company: "Crystallize Technologies",
      period: "02/2023 - 05/2023",
      description: " Internship focused on web development and AWS technologies",
      achievements: [
        "Internship on AWS and web development",
       
      ]
    },
    
 
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: " B.E Computer Science",
      institution: " MALNAD COLLEGE OF ENGINEERING",
      period: "11/2023 - 05/2026"
    },
    {
      id: 2,
      degree: "Diploma",
      institution: "SMT.LV POLYTECHNIC",
      period: "01/2021 - 06/2023"
    },
      {
      id: 3,
      degree: "10th",
      institution: "ST. JOSEPH'S HIGH SCHOOLC",
      period: " 01/2015 - 05/2020"
    },
  ];

  // Certifications
  const certifications = [
    { id: 1, name: "Cloud computing", issuer: "Infosys springboard", date: "2023" },
    { id: 2, name: "Google  Cloud Developer", issuer: "Google Cloud", date: "2023" },
    { id: 3, name: "React Certification", issuer: "MIRISE", date: "2023" },
    { id: 4, name: "human computer interaction", issuer: "NPTEL", date: "2025" }
  ];

  // Projects
  const projects = [
    {
      id: 1,
      name: " CHATBOT IN FLASK",
      description: "Chatbot using Flask and JSON file Chatbot that accepts voice commands and provides responses in voice and text ",
      technologies: ["Python", "HTML", "CSS", "Json"]
    },
    {
      id: 2,
      name: "student Management system",
      description: "manages students detailes like usn and branch for workshop in branch",
      technologies: ["html", "css", "xamp", "php"]
    },
    {
      id: 3,
      name: "banking managment",
      description: "Created a tool for banking work like account creating and balance check etc",
      technologies: ["c", "DSA"]
    }
  ];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={myPhoto} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="name-title">
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.title}</h2>
          </div>
        </div>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> {personalInfo.email}</p>
          <p><i className="fas fa-phone"></i> {personalInfo.phone}</p>
          <p><i className="fas fa-map-marker-alt"></i> {personalInfo.location}</p>
        </div>
      </header>

      <div className="resume-body">
        <section className="resume-section">
          <h3><i className="fas fa-user"></i> Summary</h3>
          <p>{personalInfo.summary}</p>
        </section>

        <div className="columns">
          <div className="main-column">
            <section className="resume-section">
              <h3><i className="fas fa-briefcase"></i> Professional Experience</h3>
              {experience.map(job => (
                <div key={job.id} className="experience-item">
                  <div className="job-header">
                    <h4>{job.position}</h4>
                    <div className="job-meta">
                      <span className="company">{job.company}</span>
                      <span className="period">{job.period}</span>
                    </div>
                  </div>
                  <p>{job.description}</p>
                  <ul>
                    {job.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="resume-section">
              <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              {education.map(edu => (
                <div key={edu.id} className="education-item">
                  <h4>{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="sidebar-column">
            <section className="resume-section">
              <h3><i className="fas fa-code"></i> Technical Skills</h3>
              <div className="skills-container">
                {personalInfo.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <h3><i className="fas fa-certificate"></i> Certifications</h3>
              <ul className="certifications-list">
                {certifications.map(cert => (
                  <li key={cert.id}>
                    <strong>{cert.name}</strong> - {cert.issuer} ({cert.date})
                  </li>
                ))}
              </ul>
            </section>

            <section className="resume-section">
              <h3><i className="fas fa-project-diagram"></i> Projects</h3>
              {projects.map(project => (
                <div key={project.id} className="project-item">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-section">
              <h3><i className="fas fa-language"></i> Languages</h3>
              <div className="languages">
                <p><strong>English:</strong> Professional Proficiency</p>
                <p><strong>kannada:</strong> Native</p>
                <p><strong>Hindi:</strong> Intermediate</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Resume;