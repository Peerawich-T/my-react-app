import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function NewPage  () {
  const location = useLocation()
  const navigate = useNavigate()

  const {msg} = location.state
  return (
    <>
       <h1>This is a new Page.</h1>
       <p>This is a message from Home : {msg}</p>
       <button onClick={() => navigate('/')}>Back To HomePage</button>
    </>
 
  )
}

export default NewPage