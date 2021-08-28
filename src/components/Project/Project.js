/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import initialData from '../../data/projects';
import './Project.css';

function Project() {
  const [projects, setProjects] = useState(initialData);

  return (
    <section className="section-project">
      <div className="section-title">
        <h2>
          <span className="text-primary">05. </span>
          Projects
        </h2>
      </div>

      <div className="section-content">
        {projects.map((data, index) => (
          <div className="section-project-item">
            <div className="project-content">
              <div>
                <p className="project-overline">{data.overline}</p>
                <p className="project-title">{data.title}</p>
                <p className="project-description">{data.description}</p>

                <div className="project-links">
                  <ul className="project-tech">
                    {data.tech.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>

                  <a href={data.links.github} aria-label={`Github ${data.title}`}><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <picture>
                <img src={`/projects/${data.image}`} alt={data.title} />
              </picture>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Project;
