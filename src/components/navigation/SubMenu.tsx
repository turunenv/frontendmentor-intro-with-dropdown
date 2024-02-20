import { MenuItem } from './types';
import styles from './SubMenu.module.css';

type Props = {
  visible: boolean;
  navItems: MenuItem[];
};

export function SubMenu({ visible, navItems }: Props) {
  if (!visible) return null;
  return (
    <ul className={styles.submenu}>
      {navItems.map((item) => {
        return (
          <li 
            key={item.title}
            className={styles.submenuItem}
          >
            {item.iconUrl &&
              <img 
                src={item.iconUrl}
                className={styles.submenuImg}  
              />
            }
            <span
              className={styles.submenuTitle}
            >
              {item.title}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
