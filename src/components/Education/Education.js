/* eslint-disable no-console */
import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [tab, setTab] = useState('diploma');

  function tabChange(e) {
    const { tab: buttonTab } = e.target.dataset;

    setTab(buttonTab);
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
          <button type="button" className={`education-tab ${tab === 'diploma' ? 'active' : ''}`} data-tab="diploma" onClick={tabChange}>Diploma</button>
          <button type="button" className={`education-tab ${tab === 'high-school' ? 'active' : ''}`} data-tab="high-school" onClick={tabChange}>High School</button>
        </aside>

        <div className={`education-content ${tab === 'diploma' ? 'active' : ''}`} id="diploma">
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

        <div className={`education-content ${tab === 'high-school' ? 'active' : ''}`} id="high-school">
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
    </section>
  );
}

export default Education;
