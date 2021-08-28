/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import parse from 'html-react-parser';
import initialData from '../../data/experiences';
import './Experience.css';

function Experience({ componentRef }) {
  const [tab, setTab] = useState(0);
  const [experienceData, setExperienceData] = useState(initialData);

  function tabChange(tabParam) {
    setTab(tabParam);
  }

  return (
    <section className="section-experience" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">04. </span>
          Experience
        </h2>
      </div>

      <div className="section-content-experience">
        <aside className="experience-navigator">
          {experienceData.map((experience, index) => (
            <button type="button" className={`experience-tab ${tab === index ? 'active' : ''}`} onClick={() => tabChange(index)}>{experience.menu}</button>
          ))}
        </aside>

        <div className="overflow-hidden">
          <div className="experience-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>
            {experienceData.map((experience, index) => (
              <div className="experience-content">
                <div className="experience-title">
                  <h3>
                    {experience.role}
                    {' '}
                    <span>
                      @
                      {' '}
                      {experience.company}
                    </span>
                  </h3>
                  <p>{experience.date}</p>
                </div>
                <div className="section-description">
                  <ul className="section-description-list">
                    {experience.description.map((desc) => (
                      <li>
                        <i className="fas fa-caret-square-right" />
                        <p>{parse(desc)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
