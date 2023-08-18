import React from "react";
import c from "./Home.module.css";
import resume from "../../files/FullStackCV.pdf";
import mainImg from "../../assets/Images/lochindev.jpg";

const Home: React.FC = () => {
  return (
    <main>
      <div className={c.hero}>
        <div className={c.heroTextWrap}>
          <h1 className={c.heroTitle}>HI</h1>
          <h2 className={c.heroText}>My name is Lochin Kuvaondikov</h2>
          <p className={c.heroDes}>
            I am from Samarkand region, I am 21 years old. I am interested in
            web programming, XI have now completed the Salvation Education
            Full-Stack course. Now I am preparing independent projects.
            <br /> <b>I'm Full-Stack Web Developer</b>
          </p>
          <a href={resume} className={c.downloadCV} download={resume}>
            Download My CV
          </a>
        </div>
        <div className={c.heroBg_div}>
          <img className={c.heroBg} src={mainImg} alt="mainImg" />
        </div>
      </div>
    </main>
  );
};

export default Home;
