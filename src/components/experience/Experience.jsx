import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Engineer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
                <BsPatchCheckFill classname='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill classname='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill classname='experience__details-icon' />
                <div>
                  <h4>NodesJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience