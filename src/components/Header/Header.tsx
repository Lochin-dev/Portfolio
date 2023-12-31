import c from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import logo from '../../assets/Images/logatip_LochinDev.png';
import { RiMenu4Fill } from 'react-icons/ri';
import navbardata from '../../json/navbardata.json';
import { active } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
const Header: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  return (
    <>
      <header>
        <Link to="/" className={c.logoWrapper}>
          <img src={logo} alt="logatip" width={230} />
        </Link>
        <nav>
          <ul className={c.navList}>
            {navbardata.map((el) => {
              return (
                <li key={uuidv4()}>
                  <Link
                    style={{
                      color: `${active(
                        pathname,
                        el.link,
                        'rgb(0,255,255)',
                        '#fff'
                      )}`,
                      cursor: `${active(
                        pathname,
                        el.link,
                        'not-allowed',
                        'pointer'
                      )}`,
                    }}
                    to={el.link}
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div onClick={() => setIsSideBarOpen(true)} className={c.mobileMenu}>
            <RiMenu4Fill />
          </div>
        </nav>
      </header>
      <MobileSidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
};

export default Header;
