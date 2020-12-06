import { useReducer, useEffect } from 'react'

export default function useLocalStorageReducer(key, reducer) {
  function getFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : []
  }

  // State
  const [state, dispatch] = useReducer(reducer, getFromLocalStorage(key))

  // Listening for changes in `state`
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, dispatch]
}
