import {
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ListAltIcon from '@mui/icons-material/ListAlt'
import CardIcon from '../elements/cards/CardIcon'
import React from 'react'
import LoginButton from '../elements/buttons/LoginButton'
import RegisterButton from '../elements/buttons/RegisterButton'
import ButtonGruppe from '../elements/buttons/ButtonGruppe'

const Home = () => {
  return (
    <>
      <Toolbar />

      <div className='heroSection'>
        <Container maxWidth='md'>
          <Box
            sx={{
              height: '75vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '2rem',
            }}
          >
            <Typography
              fontWeight='600'
              variant='h2'
            >
              Welcome on Vity! <br />{' '}
              Your portable Agenda
            </Typography>
            <Typography
              fontWeight='400'
              variant='p'
            >
              Keep your Notes,
              Appointments, Things to do
              always with you
            </Typography>
            <ButtonGruppe>
              <LoginButton variant='contained' />
              <RegisterButton variant='outlined' />
            </ButtonGruppe>
          </Box>
        </Container>
      </div>

      <Container
        className='features'
        maxWidth='xl'
      >
        <Grid
          container
          sx={{
            rowGap: '1rem',
            margin: '3rem auto',
          }}
        >
          <Grid
            item
            xs={12}
            lg={4}
          >
            <CardIcon
              title='Take Notes'
              icon={<TextSnippetIcon />}
              description='Keep Notes easly and stay focused on your Job'
            />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
          >
            <CardIcon
              title='Make Appointments'
              icon={
                <CalendarMonthIcon />
              }
              description='Do not forgot your Events of the Day'
            />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
          >
            <CardIcon
              title='Trace Daily Progress'
              icon={<ListAltIcon />}
              description='Keep Things you have planned on your Todo List'
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        className='banner'
        maxWidth='md'
      >
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: '2rem',
          }}
        >
          <Typography
            fontWeight='600'
            variant='h2'
            color='inherit'
          >
            Keep your Notes <br />{' '}
            Everywhere & <br />{' '}
            Everytime you want!
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Home
