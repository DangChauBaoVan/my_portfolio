import React from "react";
import pj1 from "../../assets/pj1.png";
import PJ2 from "../../assets/PJ2.png";
import PJ3 from "../../assets/PJ3.png";
import PJ4 from "../../assets/PJ4.jpg";
import PJ5 from "../../assets/PJ5.png";
import PJ6 from "../../assets/PJ6.png";
import PJ7 from "../../assets/PJ7.jpg";
import "./project.css";
const Project = () => {
  return (
    <section id="project">
      <h5>What Projects I Have</h5>
      <h2>My Project</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={PJ6} alt="" />
          </div>
          <h3>
            AirBnB:{" "}
            <span className="project__stack">
              {" "}
              NestJS, Prisma, Docker, Swagger,MySQL
            </span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/Node25_DangChauBaoVan_AirBnBapi.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PJ7} alt="" />
          </div>
          <h3>
            Deliveroo:{" "}
            <span className="project__stack">
              {" "}
              ReactNative, Tailwindcss, Redux Toolkit, Sanity
            </span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/RN_Deliveroo_Clone.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        {/* <article className="project__item">
          <div className="project__item-image">
            <img src={PJ3} alt="" />
          </div>
          <h3>Food Website: <span className="project__stack">HTML, CSS, JS</span></h3>
          <div className="project__item-cta">
            <a href="https://github.com/DangChauBaoVan/Food-Restaurant-Website.git" className="btn" target="_blank">Github</a>
            <a href="https://dangchaubaovan.github.io/Food-Restaurant-Website/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article> */}
        <article className="project__item">
          <div className="project__item-image">
            <img src={PJ5} alt="" />
          </div>
          <h3>
            E-learning:{" "}
            <span className="project__stack">
              {" "}
              React, Hook, Redux-Thunk, SCSS, Ant Design
            </span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/BC12_Elearing.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PJ4} alt="" />
          </div>
          <h3>
            Cinema Booking:{" "}
            <span className="project__stack">
              {" "}
              React, Redux-Thunk, SignalR, SCSS, Ant Design
            </span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/BC12_DangChauBaoVan_CinemaBooking.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={pj1} alt="" />
          </div>
          <h3>
            Moive4u: <span className="project__stack">React, SASS</span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/movie-app.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://movie4u.surge.sh/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PJ2} alt="" />
          </div>
          <h3>
            Shoes Website: <span className="project__stack">HTML, CSS, JS</span>
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/DangChauBaoVan/Responsive-E-Commerce-Shoes-Website.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dangchaubaovan.github.io/Responsive-E-Commerce-Shoes-Website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
