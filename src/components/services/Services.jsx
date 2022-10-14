import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User flow charts,diagrams.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>
        {/* end of UI */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Clean, modern website designs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>e-Commerce website development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web portals.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CMS Development.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Research.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ideation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing/Creating.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Editing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Uploading.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publishing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Promoting.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services