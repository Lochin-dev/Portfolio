import React from "react";
import c from "./Work.module.css";
import texnomart from "../../assets/Images/texnomart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Work: React.FC = () => {
  return (
    <div className={c.workWrapper}>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/dm16fzmqd/image/upload/v1692204549/Screenshot_117_amppr4.png"
            alt=""
          />
        </div>
        <h2>Yangi avlod to'lov usuli</h2>
        <div className={c.des}>
          <p>Used libraries: react, redux, react router dom</p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://tailwindcss-pi.vercel.app/">
              Show Clone
            </a>
            <a
              target="_blank"
              href="https://github.com/Lochin-dev/Tailwindcss.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
        <span className={c.workDate}>11.12.2022</span>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/dm16fzmqd/image/upload/v1692242455/Screenshot_120_x5zlw6.png"
            alt="siyte "
          />
        </div>
        <span className={c.workDate}>01.12.2022</span>
        <h2>Pizza</h2>
        <div className={c.des}>
          <p>
          JavaSctipt, SASS. BOOTSTRAP
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://commerce-nine-liart-61.vercel.app/">
              Show Clone
            </a>
            <a
              target="_blank"
              href="https://github.com/Lochin-dev/EXAM_PIZZA.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/dm16fzmqd/image/upload/v1692335431/Screenshot_121_fwxhnf.png"
            alt=""
          />
        </div>
        <span className={c.workDate}>08.05.2023</span>
        <h2>Davlatlar</h2>
        <div className={c.des}>
          <p>
          JavaSctipt, SASS. BOOTSTRAP
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://davlatlar.vercel.app/">
              Show Project
            </a>
            <a
              target="_blank"
              href="https://github.com/Lochin-dev/Davlatlar.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            className="img"
            effect="blur"
            src="https://res.cloudinary.com/dm16fzmqd/image/upload/v1692337913/Screenshot_ysahq3.png"
            alt=""
          />
        </div>
        <span className={c.workDate}>24.05.2023</span>
        <h2>Eduvi</h2>
        <br />
        <div className={c.des}>
          <p>
            HTML, SASS, JAVASCTIPT
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://examen-4.vercel.app/login.html">
              Show Clone
            </a>
            <a
              target="_blank"
              href="https://github.com/Lochin-dev/EXAMEN-4.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
