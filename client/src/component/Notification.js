import React, { useContext, useEffect } from 'react'
import { ErrorContext } from '../context/errorContext'

const Notification = () => {

  const {error, setError} = useContext(ErrorContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setError({type: "", text: ""})
    }, 5000)
    return () => {
      clearTimeout(timer)
    };
  }, [error, setError]);

  return (
    <div>
      {error & error.text}
    </div>
  )
}

export default Notification