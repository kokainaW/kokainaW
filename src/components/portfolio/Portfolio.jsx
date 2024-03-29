import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://githhub.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Sashboard & Financial Visualization',
    github: 'https://githhub.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Charts templates & infographics in Figma',
    github: 'https://githhub.com',
    demo: 'https://dribbble.com/shots/169580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://githhub.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio