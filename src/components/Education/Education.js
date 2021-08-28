/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import initialData from '../../data/educations';
import './Education.css';

function Education() {
  const [tab, setTab] = useState(0);
  const [educationData, setEducationData] = useState(initialData);

  function tabChange(tabParam) {
    setTab(tabParam);
  }

  return (
    <section className="section-education">
      <div className="section-title">
        <h2>
          <span className="text-primary">03. </span>
          Education
        </h2>
      </div>

      <div className="section-content-education">
        <aside className="education-navigator">
          {educationData.map((data, index) => (
            <button type="button" className={`education-tab ${tab === index ? 'active' : ''}`} onClick={() => tabChange(index)}>{data.level}</button>
          ))}
        </aside>

        <div className="overflow-hidden">
          <div className="education-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>
            {educationData.map((data) => (
              <div className="education-content" id="diploma">
                <div className="section-image">
                  <img src={data.image} alt={data.school} height="100" width="100" />
                  <h3>{data.school}</h3>
                  <p>{data.major}</p>
                  <p>{data.duration}</p>
                </div>
                <div className="section-description">
                  <ul className="section-description-list">
                    {data.description.map((description) => (
                      <li>
                        <i className="fas fa-caret-square-right" />
                        <p>{description}</p>
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

export default Education;
