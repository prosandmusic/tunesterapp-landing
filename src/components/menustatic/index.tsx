import { AiOutlineUser } from "react-icons/ai";
import {
  BsPostageHeart,
  BsQrCodeScan,
  BsCameraReels,
  BsCalendarHeart,
  BsGlobe,
  BsShopWindow,
  BsFileEarmarkMusic,
  BsGear,
  BsBell,
} from "react-icons/bs";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import React from "react";

// Mock components for tabbed content
const CrowdFeed = () => <div>CrowdFeed</div>;
const Subscriptions = () => <div>Subscriptions</div>;
const Fashion = () => <div>Fashion</div>;
const GroupFeed = () => <div>GroupFeed</div>

// Stylex styles
const styles = stylex.create({
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  leftMenu: {
    width: "250px",
    padding: "16px",
    backgroundColor: "var(--color-background, #f5f5f5)",
    "@media (max-width: 768px)": {
      width: "80px",
    },
  },
  rightMenu: {
    width: "200px",
    padding: "16px",
    backgroundColor: "var(--color-background, #f5f5f5)",
    position: "sticky",
    top: "0",
    height: "100vh",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  content: {
    flex: 1,
    padding: "16px",
  },
  tabbedMenu: {
    display: "flex",
    borderBottom: "1px solid var(--color-border, #ddd)",
    marginBottom: "16px",
  },
  tab: {
    padding: "12px 24px",
    textDecoration: "none",
    color: "var(--color-text, #333)",
    fontWeight: "500",
    ":hover": {
      backgroundColor: "var(--color-hover, #f0f0f0)",
    },
  },
  activeTab: {
    borderBottom: "2px solid var(--color-primary, #1da1f2)",
    color: "var(--color-primary, #1da1f2)",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    width: "100%",
    textDecoration: "none",
    color: "var(--color-text, #333)",
    ":hover": {
      backgroundColor: "var(--color-hover, #e8e8e8)",
    },
  },
  icon: {
    display: "inline-block",
    fontSize: "3.5rem",
    marginRight: "2px",
    color: "var(--color-primary, #1da1f2)",
    "@media (max-width: 768px)": {
      marginRight: "0",
    },
  },
  menuLabel: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
});

const Menu: React.FC = () => {
  // Menu items for left sidebar
  const leftMenuItems = [
    { icon: BsFileEarmarkMusic, label: "CrowdFeed", href: "#" },
    { icon: BsPostageHeart, label: "Groups", href: "#" },
    { icon: BsCameraReels, label: "PPV", href: "#" },
    { icon: BsCalendarHeart, label: "Fanmail", href: "#" },
    { icon: BsQrCodeScan, label: "Souvenirs", href: "#" },
    { icon: AiOutlineUser, label: "Profile", href: "#" },
  ];

  // Menu items for right sidebar
  const rightMenuItems = [
    { icon: BsBell, label: "Notif", href: "#" },
    { icon: BsGear, label: "Settings", href: "#" },
  ];

  // Tabbed menu items
  const tabs = [
    { label: "CrowdFeed", path: "/CrowdFeed" },
    { label: "Subscriptions", path: "/Subscriptions" },
    { label: "Fashion", path: "/Fashion" },
    { label: "GroupFeed", path: "/GroupFeed"},
  ];

  return (
    <Router>
      <div {...stylex.props(styles.container)}>
        {/* Left Sidebar */}
        <nav {...stylex.props(styles.leftMenu)}>
          <div>
            {leftMenuItems.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...stylex.props(styles.menuItem)}
              >
                <Icon {...stylex.props(styles.icon)} />
                <span {...stylex.props(styles.menuLabel)}>{label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content with Tabbed Menu */}
        <div {...stylex.props(styles.content)}>
          <div {...stylex.props(styles.tabbedMenu)}>
            {tabs.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                {...stylex.props(styles.tab)}
                style={({ isActive }) =>
                  isActive ? stylex.props(styles.activeTab).style : {}
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Routes>
            <Route path="/CrowdFeed" element={<CrowdFeed />} />
            <Route path="/Subscriptions" element={<Subscriptions />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/GroupFeed" element={<GroupFeed />} />
          </Routes>
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <nav {...stylex.props(styles.rightMenu)}>
          <div>
            {rightMenuItems.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...stylex.props(styles.menuItem)}
              >
                <Icon {...stylex.props(styles.icon)} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default Menu;