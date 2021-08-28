/* eslint-disable no-console */
import React, { useState } from 'react';
import './Experience.css';

function Education() {
  const [tab, setTab] = useState(0);

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
          <button type="button" className={`experience-tab ${tab === 0 ? 'active' : ''}`} data-tab="student-mentor" onClick={() => tabChange(0)}>IDCamp 2021</button>
          <button type="button" className={`experience-tab ${tab === 1 ? 'active' : ''}`} data-tab="student-mentor" onClick={() => tabChange(1)}>Kotakode</button>
          <button type="button" className={`experience-tab ${tab === 2 ? 'active' : ''}`} data-tab="external-code-reviewer" onClick={() => tabChange(2)}>Dicoding Indonesia</button>
          <button type="button" className={`experience-tab ${tab === 3 ? 'active' : ''}`} data-tab="external-code-reviewer" onClick={() => tabChange(3)}>Universitas Surakarta</button>
        </aside>

        <div className="overflow-hidden">
          <div className="experience-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>

            <div className="experience-content">
              <div className="experience-title">
                <h3>
                  Course Facilitator
                  {' '}
                  <span>@ Indosat Ooredoo Digital Camp</span>
                </h3>
                <p>August 2021 - October 2021</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Hold online meetings with IDCamp participants
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Monitor the learning progress of IDCamp participants
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Create a group as a discussion forum between facilitator and participants
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Help participants to complete the IDCamp scholarship
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-content">
              <div className="experience-title">
                <h3>
                  Student Mentor
                  {' '}
                  <span>@ Kotakode</span>
                </h3>
                <p>July 2021 - September 2021</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Help answer questions from
                      <a href="https://www.kotakode.com/pertanyaan" className="text-primary"> kotakode.com</a>
                      {' '}
                      users
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>Share knowledge by posting programming questions and answers</p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>Sharing knowledge through microblogging</p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>Interact and provide assistance for kotakode users</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-content">
              <div className="experience-title">
                <h3>
                  External Code Reviewer
                  {' '}
                  <span>@ Dicoding Indonesia</span>
                </h3>
                <p>July 2021 - Present</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Review student submission codes on the learning path
                      <a href="https://www.dicoding.com/learningpaths/22" className="text-primary"> Front-End Web</a>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Provide suggestions that students need on the learning path
                      <a href="https://www.dicoding.com/learningpaths/22" className="text-primary"> Front-End Web</a>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Answer questions on the
                      <a href="https://www.dicoding.com" className="text-primary"> Dicoding</a>
                      {' '}
                      discussion forum
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-content">
              <div className="experience-title">
                <h3>
                  Intern
                  {' '}
                  <span>@ Universitas Surakarta</span>
                </h3>
                <p>February 2018 - May 2018</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Develop a PHP Project about Incoming and Outgoing Mail Management
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>
                      Setup Internet Network at the University of Surakarta
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
