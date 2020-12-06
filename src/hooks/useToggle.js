import { useState } from 'react'

export default function useToggle(initialState) {
  const [state, setState] = useState(initialState)

  function toggle() {
    setState(!state)
  }

  return [state, toggle]
}
