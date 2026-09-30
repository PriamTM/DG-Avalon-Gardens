import { storeInfo } from '../../data/storeInfo'
import MapPlaceholder from '../../components/MapPlaceholder/MapPlaceholder'
import SectionHero from '../../components/Hero/SectionHero';
import styles from './Contact.module.css'
import contactImage from '../../assets/contact.webp';

function Contact() {
  const fullAddress = `${storeInfo.address.street}, ${storeInfo.address.city}, ${storeInfo.address.state} ${storeInfo.address.zip}`
  return (
    <>
      <SectionHero image={contactImage} alt="blurred image of dispensary inside" title="Visit Us" />
      <div className={`container ${styles.page}`}>
        <h1>Contact &amp; Location</h1>
    
        <div className={styles.grid}>
          <div>
            <h2>Get In Touch</h2>
            <p>{fullAddress}</p>
            <p>{storeInfo.phone}</p>
            <p>
              <a>{storeInfo.email}</a>
            </p>
    
            <h2>Hours</h2>
            <table className={styles.hours}>
              <tbody>
                {storeInfo.hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>
                      {h.open} – {h.close}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
              
          <MapPlaceholder address={fullAddress} />
        </div>
      </div>
    </>
  )
}

export default Contact
