import React from "react";
import { BsXCircleFill, BsInstagram, BsFillThreadsFill, BsFacebook } from "react-icons/bs";
import * as stylex from "@stylexjs/stylex";

const footerStyles = stylex.create({
  footer: {
    padding: "5rem",
    background: "#222",
    color: "white",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateRows: "auto auto",
    alignItems: "center",
    gap: "1rem",
  },
  socials: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gridColumn: "3",
    gridRow: "2",
    justifyContent: "end",
    alignItems: "end",
    gap: "1rem",
  },
  artists: {
    gridColumn: "1",
    gridRow: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  copyright: {
    gridColumn: "3",
    gridRow: "1",
    textAlign: "right",
  },
  navLinks: {
    gridColumn: "2",
    gridRow: "1",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  artistLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    marginBottom: "0.5rem",
  },
  socialIcon: {
    color: "white",
    fontSize: "24px",
    textDecoration: "none",
  },
});

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <BsInstagram />, url: "https://instagram.com/tunestermusic" },
    { icon: <BsFillThreadsFill />, url: "https://threads.net/tunestermusic" },
    { icon: <BsXCircleFill />, url: "https://x.com/tunestermusic" },
    { icon: <BsFacebook />, url: "https://facebook.com/tunestermusic" },
  ];

  const navLinks = ["Home", "Features", "FAQ", "Investors"];

  const artistLinks = [
    { title: "Profiles", url: "https://artists.tunester.online/profiles" },
    { title: "Groups", url: "https://artists.tunester.online/groups" },
    { title: "FAQ", url: "https://artists.tunester.online/faq" },
    { title: "Tour Guide", url: "https://artists.tunester.online/tourguide" },
    { title: "Creator Cloud Toolkit", url: "https://artists.tunester.online/creatorcloudtoolkit" },
  ];

  return (
    <footer {...stylex.props(footerStyles.footer)}>
      {/* Artists Section */}
      <div {...stylex.props(footerStyles.artists)}>
        <h4 style={{ margin: 0 }}>Artist Resources</h4>
        {artistLinks.map(({ title, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(footerStyles.artistLink)}
          >
            {title}
          </a>
        ))}
      </div>

      {/* Nav Links Section */}
      <div {...stylex.props(footerStyles.navLinks)}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            {...stylex.props(footerStyles.artistLink)}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright Section */}
      <div {...stylex.props(footerStyles.copyright)}>
        <span>Copyright © {currentYear} Tunester</span>
      </div>

      {/* Social Links Section */}
      <div {...stylex.props(footerStyles.socials)}>
        {socialLinks.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(footerStyles.socialIcon)}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;