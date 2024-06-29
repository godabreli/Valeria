import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Navigation.css";

const mobNavLinks = [
  { title: "Home", link: "/" },
  { title: "Leistungen", link: "/Leistungen" },
  { title: "Über mich", link: "/Uebermich" },
  { title: "Kontakt", link: "/Kontakt" },
];

export const Navigation = ({ mobNavBarVisible, setMobNavBarVisible }) => {
  const [linkActive, setLinkActiv] = useState("");

  if (linkActive === "homeLink")
    setLinkActiv({ transform: "translate(0px, 0px)" });

  const leistungenLinkStyle =
    linkActive === "leistungenLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  const ueberMichLinkStyle =
    linkActive === "ueberMichLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  const kontaktLinkStyle =
    linkActive === "kontaktLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  return (
    <>
      <AnimatePresence>
        {mobNavBarVisible && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              transition: {
                duration: 0.3,
                ease: [0.51, 0.21, 0.38, 0.82],
                delay: 0.8,
              },
            }}
            transition={{
              duration: 0.3,
              ease: [0.51, 0.21, 0.38, 0.82],
            }}
            className="mobileNavBar"
          >
            <div
              className="xbutton"
              onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
            >
              &times;
            </div>
            <div className="navList">
              {mobNavLinks.map((link, index) => {
                return (
                  <div className="linkWrapper" key={index}>
                    <motion.div
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      exit={{ y: 100 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.51, 0.21, 0.38, 0.82],
                        delay: (1 + index) * 0.15,
                      }}
                      className="linkDiv"
                    >
                      <Link
                        to={link.link}
                        onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="navbar">
        <img
          className="logo"
          src="images/Logo.png"
          alt="Valeria Gerol Logo"
        ></img>
        <ul className="navbar-list">
          <li>
            <div className="homeLink">
              <Link to="/" onClick={() => setLinkActiv("homeLink")}>
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className="leistungenLink" style={leistungenLinkStyle}>
              <NavLink
                to="/Leistungen"
                onClick={() => setLinkActiv("leistungenLink")}
              >
                Leistungen
              </NavLink>
            </div>
          </li>
          <li>
            <div className="uebermichLink" style={ueberMichLinkStyle}>
              <NavLink
                to="Uebermich"
                onClick={() => setLinkActiv("ueberMichLink")}
              >
                Über mich
              </NavLink>
            </div>
          </li>
          <li>
            <div className="kontaktLink" style={kontaktLinkStyle}>
              <NavLink to="Kontakt" onClick={() => setLinkActiv("kontaktLink")}>
                Kontakt
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="menuIcon">
          <span
            className="material-symbols-outlined"
            onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
          >
            menu
          </span>
        </div>
      </nav>
    </>
  );
};
