import { useState, useEffect } from 'react'

export default function useLocalStorageState(key, defaultValue) {
  function getFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : String(defaultValue)
  }

  // State
  const [state, setState] = useState(getFromLocalStorage(key, defaultValue))

  // Listening for changes in `state`
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
