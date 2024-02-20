import { useState } from 'react';
import { NavBar } from './NavBar';
import styles from './NavWrapper.module.css';
import menuIconUrl from '../../assets/icon-menu.svg';
import closeMenuIconUrl from '../../assets/icon-close-menu.svg';

export function NavWrapper() {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const menuIconStyle = {
    background: `url(${menuIconUrl})`,
    width: 32,
    height: 18,
    border: 'none',
  };

  const closeMenuIconStyle = {
    background: `url(${closeMenuIconUrl})`,
    width: 26,
    height: 26,
    alignSelf: 'flex-end',
    border: 'none'
  }

  if (!navigationVisible) {
    return (
      <button
        style={menuIconStyle}
        onClick={() => setNavigationVisible(true)}
      ></button>
    )
  }

  return (
    <div className={styles.navwrapper}>
      <button
        style={closeMenuIconStyle}
        onClick={() => setNavigationVisible(false)}
      ></button>
      <NavBar />
    </div>
  )
}
