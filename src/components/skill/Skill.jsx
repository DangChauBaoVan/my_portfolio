import React from "react";
import "./Skill.css";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { BiLogoNodejs } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiGraphql } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import viteLogo from "../../assets/viteLogo.png"

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I Have</h5>
      <h2>My Skill</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <FaReact
                className="skill__icon"
                style={{ color: "var(--color-primary)" }}
              />
              <h4>ReactJS</h4>
            </article>
            <article className="skill__details">
              <TbBrandReactNative
                className="skill__icon"
                style={{ color: "var(--color-primary)" }}
              />
              <h4>React Native</h4>
            </article>
            <article className="skill__details">
              <SiRedux className="skill__icon" style={{ color: "#764abc" }} />
              <h4>Redux Toolkit</h4>
            </article>
            <article className="skill__details">
              <BiLogoTailwindCss
                className="skill__icon "
                style={{ color: "var(--color-primary)" }}
              />
              <h4>Tailwindcss</h4>
            </article>
            <article className="skill__details">
              <BsWordpress
                className="skill__icon"
                style={{ color: "#FFF" }}
              />
              <h4>WordPress</h4>
            </article>
            <article className="skill__details">
              <AiOutlineHtml5
                className="skill__icon"
                style={{ color: "#F47932" }}
              />
              <h4>HTML</h4>
            </article>
            <article className="skill__details">
              <DiCss3 className="skill__icon" style={{ color: "#264DE6" }} />
              <h4>CSS</h4>
            </article>
            <article className="skill__details">
              <SiJavascript
                className="skill__icon"
                style={{ color: "#F0DC4E" }}
              />
              <h4>JavaScript</h4>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Backend development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BiLogoNodejs
                className="skill__icon"
                style={{ color: "#79b461" }}
              />
              <h4>NodeJS</h4>
            </article>

            <article className="skill__details">
              <SiNestjs
                className="skill__icon"
                style={{ color: "#e0234e" }}
              />
              <h4>NestJS</h4>
            </article>
            <article className="skill__details">
              <SiPrisma className="skill__icon" style={{ color: "#fff" }} />
              <h4>Prisma</h4>
            </article>
            <article className="skill__details">
              <TbBrandMysql
                className="skill__icon"
                style={{ color: "#fff" }}
              />
              <h4>MySQL</h4>
            </article>
            <article className="skill__details">
              <SiGraphql className="skill__icon" style={{ color: "#e535ab" }} />
              <h4>GraphQL</h4>
            </article>
            
          </div>
        </div>
        <div className="skill__tool">
          <h3>Tools</h3>
          <div className="skill__content">
            <article className="skill__details">
              <AiOutlineGithub
                className="skill__icon"
                style={{ color: "#1B1F23" }}
              />
              <h4>Github</h4>
            </article>
            <article className="skill__details">
              <SiNotion className="skill__icon" />
              <h4>Notion</h4>
            </article>
            <article className="skill__details">
              <SiPostman className="skill__icon" style={{ color: "#FE6C35" }} />
              <h4>Postman</h4>
            </article>
            <article className="skill__details">
              <SiSwagger className="skill__icon" style={{ color: "#85ea2d" }} />
              <h4>Swagger</h4>
            </article>
            <article className="skill__details">
              <FaDocker className="skill__icon" style={{ color: "var(--color-primary)" }} />
              <h4>Docker</h4>
            </article>
            <article className="skill__details">
              {/* <FaDocker className="skill__icon" style={{ color: "var(--color-primary)" }} /> */}
              <img src={viteLogo} alt="" style={{width:"22px",height:"22px"}} />
              <h4>Vite</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
