import React from 'react'
import icon from '../../assets/Images/logatip_LochinDev.png'
import c from './Footer.module.css'
const Footer: React.FC = () => {
  return (
    <footer className={c.footer}>
      <img className={c.icon} src={icon} alt="icon" width={200} />
      <p className={c.footerText}>
        © 2023 Lochin's partfolio. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
