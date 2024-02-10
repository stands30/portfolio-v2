/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: 'Krypt App',
    description:"A Web 3.0 App where one can send ethereum coins securely ",
    tags: [ 'React Js', 'Solidity', 'MetaMask'],
    url: 'https://react-kryptoverse.netlify.app/',
    id: 1,
  },
  {
    title: 'Cryptoverse',
    description:"Cryptocurrency app providing comprehensive information: News, Exchanges, Statistics.",
    tags: [ 'React Js', ' Redux Toolkit', ' RapidAPI' ],
    url: 'https://cryptoverse-report.netlify.app/',
    id: 2,
  },
  {
    title: 'AI News App',
    description:"A News App which can be read through AI, Alan AI will read out the news for you",
    tags: [ 'React Js', 'Alan AI' ],
    url: 'https://ai-news-app.netlify.app/',
    id: 3,
  },
  {
    title: 'Covid-19 Global Tracker',
    description: "Using React Js have developed global covid cases tracker, where one can track covid cases in each country ",
      tags: ['React', 'Material UI'],
    url: 'https://covid19globaltracker.herokuapp.com/',
    id: 4,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                {project.tags.map((tag) => (
                  <p key={tag} className="tag">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
