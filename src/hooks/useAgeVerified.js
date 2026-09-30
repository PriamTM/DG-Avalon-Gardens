import { useState, useCallback } from 'react'

const STORAGE_KEY = 'avalon_age_verified'

export function useAgeVerified() {
  const [verified, setVerified] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'true',
  )

  const verify = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVerified(true)
  }, [])

  return { verified, verify }
}
