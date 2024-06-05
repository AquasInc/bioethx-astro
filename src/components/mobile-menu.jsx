import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/mobile-menu.module.css";

const MobileMenu = ({ mobile, setMobile }) => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <a href="/" className={navLinkText} onClick={() => setMobile(!mobile)}>
        Home
      </a>
    </li>
    <li className={navLinkItem}>
      <a
        href="/service"
        className={navLinkText}
        onClick={() => setMobile(!mobile)}
      >
        Service
      </a>
    </li>
    <li className={navLinkItem}>
      <a
        href="/register"
        className={navLinkText}
        onClick={() => setMobile(!mobile)}
      >
        Register
      </a>
    </li>
    <li className={navLinkItem}>
      <a
        href="https://online.bioethx.net/"
        target="_blank"
        rel="noreferrer"
        className={navLinkText}
        onClick={() => setMobile(!mobile)}
      >
        Login
      </a>
    </li>
  </ul>
);

export default MobileMenu;
