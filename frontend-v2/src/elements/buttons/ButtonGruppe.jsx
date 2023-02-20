import { Box } from '@mui/material'
import React from 'react'

const ButtonGruppe = (props) => {
  return (
    <Box sx={{
        display:'flex',
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        gap: '1rem'
    }}>{props.children}</Box>
  )
}

export default ButtonGruppe