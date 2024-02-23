import { footerImages } from '../content/footerItems';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      {footerImages.map((image) => (
        <div className={styles.imgContainer} key={image[0]}>
          <img className={styles.img} src={image[0]} alt={image[1]} />
        </div>
      ))}
    </footer>
  );
}
