import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AgeGate.module.css'

function AgeGate({ onVerify }) {
  const [declined, setDeclined] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
      <div className={styles.card}>
        <h1 className={styles.brand}>Avalon Gardens</h1>

        {declined ? (
          <>
            <p className={styles.message}>
              You must meet Colorado's age requirements to view this site. Please check back
              once you're eligible.
            </p>
            <div>
              <p>You can call our experts for more information about this:</p>
              <p>(303) 555-7712</p>
            </div>
          </>
        ) : (
          <>
            <p className={styles.message}>
              This site contains information about cannabis products. You must be 21+ or a
              registered medical patient 18+ to enter.
            </p>
            <div className={styles.actions}>
              <button type="button" className="btn btn-primary" onClick={onVerify}>
                I'm 21+ (Recreational)
              </button>
              <button type="button" className="btn btn-outline" onClick={onVerify}>
                I'm 18+ with a Valid CO Medical Card
              </button>
            </div>
            <button
              type="button"
              className={styles.decline}
              onClick={() => setDeclined(true)}
            >
              I do not meet these requirements
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default AgeGate
