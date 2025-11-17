import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../image/logo.png";
import "./menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav id="menu">
      <div id="menu-content">
        <div id="logo">
          <img src={logo} alt="Logo" />
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <GiHamburgerMenu />
        </button>

        <ul className={open ? "menu-links open" : "menu-links"}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">SOBRE</a>
          </li>
          <li>
            <a href="/">PRODUTOS</a>
          </li>
          <li>
            <a href="/">SERVIÇOS</a>
          </li>
          <li className="item-contato-mobile">
            <a href="/">CONTATO</a>
          </li>
        </ul>

        <div id="botoes">
          <button className="btnContato">
            <a href="/">CONTATO</a>
          </button>
          <LuSun className="icon-sun" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
