/* eslint-disable no-console */
import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [tab, setTab] = useState(0);

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
          <button type="button" className={`education-tab ${tab === 0 ? 'active' : ''}`} data-tab="student-mentor" onClick={() => tabChange(0)}>Diploma</button>
          <button type="button" className={`education-tab ${tab === 1 ? 'active' : ''}`} data-tab="external-code-reviewer" onClick={() => tabChange(1)}>High School</button>
        </aside>

        <div className="overflow-hidden">
          <div className="education-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>
            <div className="education-content" id="diploma">
              <div className="section-image">
                <img src="polman.png" alt="Profile" height="100" width="100" />
                <h3>Politeknik Astra</h3>
                <p>2019 - 2022</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>1st Winner HIMFEST 2021 Binus University Malang</p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>Robotic Polman Astra (Secretary)</p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>Himma Manajemen Informatika (Education Department)</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="education-content" id="high-school">
              <div className="section-image">
                <img src="stmj.png" alt="Profile" height="100" width="100" />
                <h3>SMKN 1 Jenangan</h3>
                <p>2016 - 2019</p>
              </div>
              <div className="section-description">
                <ul className="section-description-list">
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>6th Place LKS Web Design Jatim</p>
                  </li>
                  <li>
                    <i className="fas fa-caret-square-right" />
                    <p>1st Winner LKS Web Design Wilker IV Jatim</p>
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
