import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = (props) => {
  const { callback, variant } = props

  return (
    <Button
      onClick={callback}
      variant={variant}
    >
      <Link to='/login'>Login</Link>
    </Button>
  )
}

export default LoginButton
