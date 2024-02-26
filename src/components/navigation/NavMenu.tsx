import { useState } from 'react';
import styles from './NavMenu.module.css';
import { SubMenu } from './SubMenu';
import { navMenuItems } from '../../content/navMenuItems.ts';
import { MenuItem, SubMenuState } from './types.ts';

const itemsWithSubmenu: MenuItem[] = navMenuItems.filter((navItem) => {
  return !!navItem.subMenu && navItem.subMenu.length > 0;
});

const initialSubMenuState: SubMenuState = {};
for (const item of itemsWithSubmenu) {
  initialSubMenuState[item.title] = false;
}

export function NavMenu() {
  const [subMenusOpen, setSubMenusOpen] = useState(initialSubMenuState);

  function getSubMenuClickHandler(key: string) {
    if (!(key in subMenusOpen)) throw new Error(`no submenu for key: ${key}`);

    return () => {
      const newSubMenuState = { ...subMenusOpen };
      newSubMenuState[key] = !subMenusOpen[key];
      setSubMenusOpen(newSubMenuState);
    };
  }

  return (
    <ul className={styles.navlist}>
      {navMenuItems.map((menuItem) => (
        <li key={menuItem.title} className={styles.navlistItem}>
          <div
            className={styles.navWrapper}
            onClick={
              menuItem.subMenu
                ? getSubMenuClickHandler(menuItem.title)
                : undefined
            }
          >
            <span>{menuItem.title}</span>
            {menuItem.iconUrl && (
              <img
                src={menuItem.iconUrl}
                alt='down arrow'
                className={styles.arrowImg}
              />
            )}
          </div>
          {menuItem.subMenu && (
            <SubMenu
              visible={subMenusOpen[menuItem.title]}
              navItems={menuItem.subMenu}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
