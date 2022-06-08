import React, { useEffect } from 'react'

function Alert({ type, msg, removeAlert ,list}) {
  useEffect(() => {
    const outalert = setTimeout(() => {
      removeAlert();
    },3000)
    return () => clearTimeout(outalert) ;
  }, [list])
  
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
