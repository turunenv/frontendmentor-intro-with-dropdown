import mobileHeroImgUrl from '../assets/image-hero-mobile.png';
import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <main>
      <h1>Make remote work</h1>
      <div>
        <img 
          src={mobileHeroImgUrl} 
          alt="a man working on his laptop" 
          className={styles.heroImg}
        />
      </div>
      <div>
        Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.
      </div>
      <div>
        <button>Learn more</button>
      </div>
    </main>
  )
}