import { StyleXClassNameTag } from '@stylexjs/stylex/lib/StyleXTypes';
import React, { useState } from 'react';
import {BsPostageHeart, BsQrCodeScan, BsCameraReels, BsCalendarHeart, BsGlobe, BsShopWindow, BsFileEarmarkMusic } from "react-icons/bs";
import * as stylex from '@stylexjs/stylex';

const iconStyles = stylex.create({
  base: {
    display: 'inline-block',
    fontSize: '3.5rem',
    marginRight: '2px',
    color: 'var(--color-primary)',
  }
  })

  const menuItem = stylex.create({
  base: { 
    display: 'flex',
    alignItems: 'center', 
    gap: '12px', 
    padding: '12px',
    width: '100%', 
  }
})
  

const Menu: React.FC = () => {
  return (
    <>
      <nav className="menu">
        <div className="menu-items">
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsFileEarmarkMusic {...stylex.props(iconStyles.base)} />
            <span>SoundLine</span>
          </a>
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsPostageHeart {...stylex.props(iconStyles.base)} />
            <span>Groups</span>
          </a>
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsCameraReels {...stylex.props(iconStyles.base)} />
            <span>PPV</span>
          </a>
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsCalendarHeart {...stylex.props(iconStyles.base)} />
            <span></span>
          </a>
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsQrCodeScan {...stylex.props(iconStyles.base)} />
            <span>Showcase</span>
          </a>
          <a href="#" {...stylex.props(menuItem.base)}>
            <BsShopWindow {...stylex.props(iconStyles.base)} />
            <span>Merchandise</span>
          </a>
        </div>
      </nav>
      
    
      
      
    </>
  );
};

export default Menu;