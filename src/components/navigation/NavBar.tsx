import { NavMenu } from './NavMenu';
import styles from './NavBar.module.css';
import { LoginRegister } from './LoginRegister';

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavMenu />
      <LoginRegister />
    </nav>
  );
}
