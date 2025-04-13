import { AiOutlineUser } from "react-icons/ai";
import {
  BsPostageHeart,
  BsQrCodeScan,
  BsCameraReels,
  BsCalendarHeart,
  BsFileEarmarkMusic,
  BsGear,
  BsBell,
} from "react-icons/bs";
import * as stylex from "@stylexjs/stylex";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React from "react";

// Mock components for tabbed content
const CrowdFeedDemo = [
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "UserOne",
    handle: "@userone",
    timestamp: "2h",
    content: "Just dropped a new track! Check it out! 🎵 #Music",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    username: "UserTwo",
    handle: "@usertwo",
    timestamp: "4h",
    content: "Loving the new PPV feature! Anyone watching tonight? #PPV",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "UserThree",
    handle: "@userthree",
    timestamp: "6h",
    content: "Sent some fanmail today! Can’t wait to hear back! 💌 #Fanmail",
  },
];

const CrowdFeed = () => (
  <div {...stylex.props(styles.feedContainer)}>
    {CrowdFeedDemo.map((post) => (
      <div key={post.username} {...stylex.props(styles.post)}>
        <img
          src={post.avatar}
          alt={`${post.username}'s avatar`}
          {...stylex.props(styles.avatar)}
        />
        <div {...stylex.props(styles.postContent)}>
          <div {...stylex.props(styles.postHeader)}>
            <span {...stylex.props(styles.username)}>{post.username}</span>
            <span {...stylex.props(styles.handle)}>{post.handle}</span>
            <span {...stylex.props(styles.timestamp)}>{post.timestamp}</span>
          </div>
          <p {...stylex.props(styles.content)}>{post.content}</p>
        </div>
      </div>
    ))}
  </div>
);

const Subscriptions = () => <div>Subscriptions</div>;
const Fashion = () => <div>Fashion</div>;
const GroupFeed = () => <div>GroupFeed</div>;

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
  feedContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  post: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    border: "1px solid var(--color-border, #ddd)",
    borderRadius: "8px",
    backgroundColor: "var(--color-background, #fff)",
    ":hover": {
      backgroundColor: "var(--color-hover, #f9f9f9)",
    },
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid var(--color-primary, #1da1f2)",
  },
  menuAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid var(--color-primary, #1da1f2)",
    "@media (max-width: 768px)": {
      width: "24px",
      height: "24px",
    },
  },
  postContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  username: {
    fontWeight: "600",
    color: "var(--color-text, #333)",
  },
  handle: {
    color: "var(--color-secondary, #666)",
    fontSize: "0.9rem",
  },
  timestamp: {
    color: "var(--color-secondary, #666)",
    fontSize: "0.9rem",
  },
  content: {
    margin: "0",
    color: "var(--color-text, #333)",
  },
});

// Updated MenuItem interface to support avatar
interface MenuItem {
  icon?: React.ComponentType;
  avatar?: string;
  label: string;
  path: string;
  ariaLabel?: string;
}

// Avatar component for menu items
const MenuAvatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} {...stylex.props(styles.menuAvatar)} />
);

const Menu: React.FC = () => {
  // Menu items for left sidebar
  const leftMenuItems: MenuItem[] = [
    { icon: BsFileEarmarkMusic, label: "CrowdFeed", path: "/CrowdFeed" },
    { icon: BsPostageHeart, label: "Groups", path: "/Groups" },
    { icon: BsCameraReels, label: "PPV", path: "/PPV" },
    { icon: BsCalendarHeart, label: "Fanmail", path: "/Fanmail" },
    { icon: BsQrCodeScan, label: "Souvenirs", path: "/Souvenirs" },
    {
      avatar: "https://i.pravatar.cc/150?img=1",
      label: "Profile",
      path: "/Profile",
      ariaLabel: "User profile",
    },
  ];

  // Menu items for right sidebar
  const rightMenuItems: MenuItem[] = [
    {
      icon: BsBell,
      label: "Notifications",
      path: "/Notifications",
      ariaLabel: "View notifications",
    },
    {
      icon: BsGear,
      label: "Settings",
      path: "/Settings",
      ariaLabel: "View settings",
    },
  ];

  // Tabbed menu items
  const tabs = [
    { label: "CrowdFeed", path: "/CrowdFeed" },
    { label: "Subscriptions", path: "/Subscriptions" },
    { label: "Fashion", path: "/Fashion" },
    { label: "GroupFeed", path: "/GroupFeed" },
  ];

  return (
    <Router>
      <div {...stylex.props(styles.container)}>
        {/* Left Sidebar */}
        <nav {...stylex.props(styles.leftMenu)}>
          <div>
            {leftMenuItems.map(({ icon: Icon, avatar, label, path, ariaLabel }) => (
              <NavLink
                key={label}
                to={path}
                {...stylex.props(styles.menuItem)}
                style={({ isActive }) => (isActive ? styles.activeTab : {})}
                aria-label={ariaLabel}
              >
                {avatar ? (
                  <MenuAvatar src={avatar} alt={`${label} avatar`} />
                ) : Icon ? (
                  <Icon {...stylex.props(styles.icon)} />
                ) : null}
                <span {...stylex.props(styles.menuLabel)}>{label}</span>
              </NavLink>
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
                style={({ isActive }) => (isActive ? styles.activeTab : {})}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/CrowdFeed" replace />} />
            <Route path="/CrowdFeed" element={<CrowdFeed />} />
            <Route path="/Subscriptions" element={<Subscriptions />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/GroupFeed" element={<GroupFeed />} />
          </Routes>
        </div>

        {/* Right Sidebar */}
        <nav {...stylex.props(styles.rightMenu)}>
          <div>
            {rightMenuItems.map(({ icon: Icon, label, path, ariaLabel }) => (
              <NavLink
                key={label}
                to={path}
                {...stylex.props(styles.menuItem)}
                aria-label={ariaLabel}
                style={({ isActive }) => (isActive ? styles.activeTab : {})}
              >
                <Icon {...stylex.props(styles.icon)} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default Menu;