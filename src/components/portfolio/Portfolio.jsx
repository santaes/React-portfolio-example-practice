import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'COLORS Website',
    gitHub: 'https://github.com/santaes/Responsive-WebSite',
    demo: 'https://batsolsky2.netlify.app',
    alt: 'image example1',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Online Store Website',
    gitHub: 'https://github.com/santaes/react-website-practice-4',
    demo: 'https://batsolsky.netlify.app',
    alt: 'image example2',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website Example',
    gitHub:
      'https://github.com/santaes/Batsol---Portfolio-Website-WebSite-HTML-',
    demo: 'https://batsolsky2.netlify.app',
    alt: 'image example3',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Company Website Example',
    gitHub: 'https://github.com/santaes/React-WebSite-Practice-3',
    demo: 'https://batsolsky1.netlify.app',
    alt: 'image example4',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, gitHub, demo, alt }) => {
          return (
            <article className='portfolio__item' key={id}>
              <div className='portfolio__item-img'>
                <img src={image} alt={alt} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={gitHub}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
