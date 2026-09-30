import styles from './SectionHero.module.css'

const SectionHero = (props) => {
  const {
    image,
    title,
    alt
  } = props;
  return (
    <div className={styles.heroContainer}>
      <img
        src={image}
        alt={alt}
        className={styles.heroImage}
      />
      <div className={styles.actions}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default SectionHero;