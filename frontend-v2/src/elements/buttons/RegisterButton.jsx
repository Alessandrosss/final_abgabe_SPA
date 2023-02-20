import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterButton = (props) => {
  const { callback, variant } = props

  return (
    <Button
      onClick={callback}
      variant={variant}
    >
      <Link to='/register'>
        Register
      </Link>
    </Button>
  )
}

export default RegisterButton
