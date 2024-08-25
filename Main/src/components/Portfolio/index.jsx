import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'dreamThreads',
      description: 'Full Stack Application',
      link: "https://project2-xj7g.onrender.com/",
      repo: "https://github.com/Dfyerman/Project2"
    },
    {
      name: 'RPG',
      description: 'MERN Stack',
      link: "https://project3-rpg-3t2r.onrender.com/",
      repo: "https://github.com/jovanna24/Project3-RPG"
    },
    {
      name: 'noteTaker',
      description: 'HTML/CSS/JS',
      link: "https://note-taker-p6cf.onrender.com/",
      repo: "https://github.com/Dfyerman/note-taker"
    },
    {
      name: 'Terminal',
      description: 'Node/JS',
      link: "https://the-story-of-text-editing-1.onrender.com/",
      repo: "https://github.com/Dfyerman/The-Story-Of-Text-Editing"
    },
    {
      name: 'employeePayroll',
      description: 'JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com/Dfyerman/Money-Maker"
    },
    {
      name: 'travelBuddy',
      description: 'JavaScript/CSS',
      link: "https://dfyerman.github.io/Travel-Buddy/",
      repo: "https://github.com/Dfyerman/Travel-Buddy"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
