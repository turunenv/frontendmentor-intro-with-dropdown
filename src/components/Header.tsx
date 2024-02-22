import { NavWrapper } from './navigation/NavWrapper';
import { Logo } from './ui/Logo';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavWrapper />
    </header>
  );
}
