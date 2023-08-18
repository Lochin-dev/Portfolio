import React from 'react';
import c from './Socialmedia.module.css';
import { FaTelegramPlane, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail, FiExternalLink } from 'react-icons/fi';

const SocialMedia: React.FC = () => {
  return (
    <div className={c.SocialMedia}>
      <a
        href="https://t.me/Lochinbek2212"
        target="_blank"
        className={c.telegram}
      >
        <FaTelegramPlane className={c.telegramIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="https://www.instagram.com/_kuvond1kov/"
        target="_blank"
        className={c.instagram}
      >
        <FaInstagram className={c.instagramIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="https://github.com/Lochin-dev"
        target="_blank"
        className={c.github}
      >
        <FaGithub className={c.GithubIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/lochin-quvondiqov-8b892325b/"
        target="_blank"
        className={c.linkedin}
      >
        <FaLinkedin className={c.linkedinIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="mailto:lochinquvondiqov31@gmail.com"
        target="_blank"
        className={c.mail}
      >
        <FiMail className={c.mailIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
