/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import parse from 'html-react-parser';
import './Experience.css';

function Education() {
  const [tab, setTab] = useState(0);
  const [experienceData, setExperienceData] = useState([
    {
      menu: 'IDCamp',
      company: 'Indosat Ooredoo Digital Camp',
      role: 'Course Facilitator',
      date: 'August 2021 - October 2021',
      description: [
        'Hold online meetings with IDCamp participants',
        'Monitor the learning progress of IDCamp participants',
        'Create a group as a discussion forum between facilitator and participants',
        'Help participants to complete the IDCamp scholarship',
      ],
    },
    {
      menu: 'Kotakode',
      company: 'Kotakode',
      role: 'Student Mentor',
      date: 'July 2021 - September 2021',
      description: [
        'Help answer questions from <a href="https://www.kotakode.com/pertanyaan" class="text-primary"> kotakode.com</a> users',
        'Share knowledge by posting programming questions and answers',
        'Sharing knowledge through microblogging',
        'Interact and provide assistance for kotakode users',
      ],
    },
    {
      menu: 'Dicoding Indonesia',
      company: 'Dicoding Indonesia',
      role: 'External Code Reviewer',
      date: 'July 2021 - Present',
      description: [
        'Review student submission codes on the learning path <a href="https://www.dicoding.com/learningpaths/22" class="text-primary">  Front-End Web</a>',
        'Provide suggestions that students need on the learning path <a href="https://www.dicoding.com/learningpaths/22" class="text-primary">  Front-End Web</a>',
        'Answer questions on the <a href="https://www.dicoding.com" class="text-primary"> Dicoding Discussion Forum</a>',
        'Interact and provide assistance for kotakode users',
      ],
    },
    {
      menu: 'Universitas Surakarta',
      company: 'Universitas Surakarta',
      role: 'Intern',
      date: 'February 2018 - May 2018',
      description: [
        'Develop a PHP Project about Incoming and Outgoing Mail Management',
        'Setup Internet Network at the University of Surakarta',
      ],
    },
  ]);

  function tabChange(tabParam) {
    setTab(tabParam);
  }

  return (
    <section className="section-experience">
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

export default Education;
