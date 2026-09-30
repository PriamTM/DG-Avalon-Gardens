import { Link } from 'react-router-dom'
import { storeInfo } from '../../data/storeInfo'
import styles from './Home.module.css'
import dayjs from 'dayjs';
import neonLitGarden from '../../assets/Neon_lit_garden.jpeg'
import dispensary from '../../assets/dispensary.jpeg'

function Home() {
  const today = storeInfo.hours[dayjs().day() === 0 ? 6 : new Date().getDay() - 1]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <img
            src={neonLitGarden}
            alt="Neon-lit garden at Avalon Gardens"
            height="500"
            className={styles.heroImage}
          />
          <div className="absolute bottom-3.75 w-full hidden sm:flex justify-center gap-4 flex-wrap">
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Visit Us
            </Link>
          </div>
        </div>
        <div className="w-full mb-8 flex sm:hidden">
          <div className="flex w-full justify-center gap-4 flex-wrap">
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Visit Us
            </Link>
          </div>
        </div>
        <div className="container article-list grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4 sm:mb-0 border-solid border-border">
            <img
              src={dispensary}
              alt="Rountable Dispensary"
              height="330"
            >
            </img>
          </div>
          <div>
            <p className={styles.eyebrow}>{storeInfo.tagline}</p>
            <h2 className={styles.title}>At the Roundtable Dispensary</h2>
            <p>
              Come visit our single physical location in Greeley. Follow the scent to us and let our
              budtenders guide you. 
            </p>
            <Link to="/contact" className="btn btn-primary">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.features}`}>
        <div className={styles.feature}>
          <h3>High Quality</h3>
          <p>Specialists in high-quality post-process marijuana; extracts, shatter, crystals, and THC food additives.</p>
        </div>
        <div className={styles.feature}>
          <h3>Potent and Affordable</h3>
          <p>Exceptionally strong and easy on your wallet.</p>
          <p>Still on the fence?</p>
          <Link to="/branhorn">Check out the multiple benefits of Cannabis!</Link>
        </div>
        <div className={styles.feature}>
          <h3>Knowledgeable Staff</h3>
          <p>Our budtenders help first-timers and connoisseurs alike find the right fit.</p>
        </div>
      </section>

      <section className={`container ${styles.hoursStrip}`}>
        <p>
          Open today, <strong>{today.day}</strong>: {today.open} – {today.close}
        </p>
        <Link to="/contact">Full hours &amp; directions →</Link>
      </section>
    </>
  )
}

export default Home
