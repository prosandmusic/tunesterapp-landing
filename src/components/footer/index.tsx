import React from "react";
import { BsXCircleFill, BsInstagram, BsFillThreadsFill, BsFacebook } from "react-icons/bs";
import * as stylex from "@stylexjs/stylex"; 

const footerstyles = stylex.create({
  footer: {
    padding: '5rem',
    background: '#222',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: 'auto auto', // Add a second row for socials
    alignItems: 'center',
    gap: '1rem',
  },
  socials: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)', // Adjusted for icon sizing
    gridColumn: '3', // Move to the third column (right)
    gridRow: '2', // Move to the second row (bottom)
    justifyContent: 'end', // Align icons to the right
    alignItems: 'end', // Align icons to the bottom
    gap: '1rem', // Space between icons
  },
  artists: {
    alignItems: 'baseline',
  },
  copyright: {
    gridColumn: '3',
    gridRow: '1', // Keep in the first row
    textAlign: 'right',
  },
});

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <BsInstagram />, url: 'https://instagram.com/tunestermusic' },
    { icon: <BsFillThreadsFill />, url: 'https://threads.net/tunestermusic' },
    { icon: <BsXCircleFill />, url: 'https://x.com/tunestermusic' },
    { icon: <BsFacebook />, url: 'https://facebook.com/tunestermusic' },
    ];

  // Sample navLinks (since it wasn't provided)
  const navLinks = ['Home', 'Features', 'FAQ', 'Investors'];
  const artistLinks = ['Profiles', 'Groups', 'FAQ', 'Tour Guide', 'Creator Cloud Toolkit'];

  return (
    <footer {...stylex.props(footerstyles.footer)}>
      {/* Artists Section */}
      <div>
        <h4 style={{ margin: 0 }}>Artist Resources</h4>
      </div>

      {/* Social Links Section */}
      <div {...stylex.props(footerstyles.socials)}>
        {socialLinks.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright and Nav Links Section */}
      <div {...stylex.props(footerstyles.copyright)}>
        <span>Copyright © {currentYear} Tunester</span>
        <div style={{ marginTop: '1rem' }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ color: 'white', textDecoration: 'none', marginLeft: '1rem' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;