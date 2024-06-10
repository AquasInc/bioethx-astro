import { useState } from "react";
import MobileMenu from "./mobile-menu";
import bioethxLogo from "../../public/bioethx.png";
import {
  flexContainer,
  navbar,
  navLinks,
  navLinkItem,
  navLinkText,
  hamburger,
  bar,
  imageWrapper,
} from "../styles/nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={navbar}>
      <div id={flexContainer}>
        <a
          href="/"
          onClick={() => (mobile ? setMobile(!mobile) : null)}
          className={imageWrapper}
        >
          <img
            src="/bioethx.png"
            width={80}
            alt="BioEthx logo"
          />
        </a>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <a href="/" className={navLinkText}>
              Home
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="/service/overview" className={navLinkText}>
              Service
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="/events/iccec2024" className={navLinkText}>
              ICCEC 2024
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="/register" className={navLinkText}>
              Register
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://online.bioethx.net/"
              target="_blank"
              rel="noreferrer"
              className={navLinkText}
            >
              Login
            </a>
          </li>
        </ul>
        <button className={hamburger} onClick={() => setMobile(!mobile)}>
          <div className={bar}></div>
          <div className={bar}></div>
          <div className={bar}></div>
        </button>
      </div>
      {mobile ? <MobileMenu mobile={mobile} setMobile={setMobile} /> : null}
    </nav>
  );
};

export default Nav;
