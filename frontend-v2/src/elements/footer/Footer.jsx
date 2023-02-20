import {
  Grid,
  Typography,
  Box,
  Container,
} from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import React from 'react'

const FooterItem = (props) => {
  const { icon, text } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
      <Typography
        variant='h6'
        align='center'
        
      >
        {text}
      </Typography>
    </Box>
  )
}

const Footer = () => {
  return (
    <footer>
      <Container maxWidth='md'>
        <Grid
          container
          sx={{
            rowGap: '1rem',
            marginX: 'auto',
          }}
        >
          <Grid
            item
            xs={12}
            lg={4}
          >
            <FooterItem
              icon={<InstagramIcon />}
              text='Instagram'
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
          >
            <FooterItem
              icon={<FacebookIcon />}
              text='Facebook'
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
          >
            <FooterItem
              icon={<TwitterIcon />}
              text='Twitter'
            />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
