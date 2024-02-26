import mobileHeroImgUrl from '../assets/image-hero-mobile.png';
import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <main>
      <div className={styles.heroImgWrapper}>
        <img
          src={mobileHeroImgUrl}
          alt='a man working on his laptop'
          className={styles.heroImg}
        />
      </div>
      <section className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Make remote work</h1>
        <p className={styles.mainDescription}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={styles.button}>Learn more</button>
      </section>
    </main>
  );
}
