import React from "react";
import "./project.css";
import IMG1 from "../../assets/Brick-Braker.png";
import IMG2 from "../../assets/Weather-App.jpg";
import IMG3 from "../../assets/Movie-app.png";


const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>2D Brick Braker</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/idkabhi/2dcanvasgame"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://2d-canvas-game.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Weather-App</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/idkabhi/Weatherapp"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://weather-news-forecast.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Movie App</h3>
          <div className="project_item-cta">
            <a
              href="https://github.com/idkabhi/Movieapp"
              className="btn"
              target="_blank"
            >
              <b>Github</b>
            </a>
            <a
              href="https://movie-app12.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;