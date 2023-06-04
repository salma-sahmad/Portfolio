import React from 'react';
import './portfolio.css';
import IMG from '../../assets/Capture.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <h3>The project tilte </h3>
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <div className="portfolio_item-cta">
            <a href="//githublinkoftheproject" className='btn' target='_blank'>Github</a>
            <a href="//githublinkoftheproject" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;