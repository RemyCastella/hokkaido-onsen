import React from 'react';
import onsenImg from '../assets/onsen.svg';

export default function Header() {
  return (
    <header>
      <img src={onsenImg} alt="onsen logo" className="header-icon" />
      <h1>北海道のすごい温泉</h1>
    </header>
  );
}
