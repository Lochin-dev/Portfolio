import React from "react";
import c from "./Contact.module.css";
import { useSpring, animated } from 'react-spring';


const Contact: React.FC = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <div className={c.contactHero}>
      <h1 className={c.title}>Contact me</h1>
      <animated.div style={styles}>Salom, animatsiya!</animated.div>
    </div>
  );
};

export default Contact;
