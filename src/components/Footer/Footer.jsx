import { Link } from 'react-router-dom'
import { storeInfo } from '../../data/storeInfo'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div>
            <p className={styles.brand}>{storeInfo.name}</p>
            <p className={styles.small}>
              {storeInfo.address.street}, {storeInfo.address.city}, {storeInfo.address.state}{' '}
              {storeInfo.address.zip}
            </p>
            <p className={styles.small}>{storeInfo.phone}</p>
            <p className={styles.small}>{storeInfo.medLicense}</p>
          </div>
          <nav className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <p className={styles.legal}>
          For use only by adults 21 years of age or older, or registered qualifying patients 18
          and older. Keep out of reach of children and pets. Marijuana can impair concentration,
          coordination, and judgment — do not operate a vehicle or machinery under the
          influence. There may be health risks associated with marijuana use. This product has
          not been analyzed or approved by the FDA.
        </p>

        <p className={styles.portfolio}>
          Avalon Gardens is a fictional company created for Delta Green: The Roleplaying Game by Arc Dream Publishing. 
          No real products are sold and no real transactions occur on this site.
        </p>

        <p className={styles.copy}>
          ©2017 All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
