import styles from './Footer.module.css';
import databizImgUrl from '../assets/client-databiz.svg';
import audiophileImgUrl from '../assets/client-audiophile.svg';
import makerImgUrl from '../assets/client-maker.svg';
import meetImgUrl from '../assets/client-meet.svg';

type ImageTuple = [string, string];

const images: ImageTuple[] = [
  [databizImgUrl, "logo of databiz"],
  [audiophileImgUrl, "logo of audiophile"],
  [makerImgUrl, "logo of maker"],
  [meetImgUrl, "logo of meet"]
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      {images.map((image) => (
        <div className={styles.imgContainer}>
          <img 
            className={styles.img}
            src={image[0]}
            alt={image[1]}
            />
        </div>
      ))}
    </footer>
  )
}