import styles from './MapPlaceholder.module.css'

function MapPlaceholder({ address }) {
  const randomInt = Math.floor(Math.random() * 21);
  return (
    <div className={styles.placeholder}>
      {randomInt > 1 ? (
        <div className="min-h-65 flex flex-col items-center justify-center text-center">
          <span className={styles.pin}>📍</span>
          <p className={styles.label}>Map Unavailable — {address}</p>
        </div>
      ): (
        <a href="https://maps.app.goo.gl/ujMb4DDhE8ZBQ2vC6" target="_blank" rel="noopener noreferrer">
          <img
            src="src/assets/location.png"
            alt="Unusual Google Maps Location"
          />
        </a>
      )}
    </div>
  )
}

export default MapPlaceholder
