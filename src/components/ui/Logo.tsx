import logoUrl from '../../assets/logo.svg';
import styles from './Logo.module.css';

export function Logo() {
  console.log('Logo: ', logoUrl);
  return (
    <div className={styles.logo}>
      <img src={logoUrl} alt='The logo of snap' />
    </div>
  );
}
