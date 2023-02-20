import {
  Avatar,
  Box,
  Container,
  FormControl,
  Input,
  InputLabel,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import RegisterButton from '../elements/buttons/RegisterButton'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  return (
    <>
      <Toolbar />
      <Container maxWidth='sm'>
        <Box
          sx={{
            maxWidth: '30rem',
            margin: '2rem auto',
            height: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:
              'flex-start',
            alignItems: 'center',
            rowGap: '1rem',
          }}
        >
          <Avatar>
            <LockPersonIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
          >
            Sign Up
          </Typography>
          <form>
            <FormControl
              margin='normal'
              required
              fullWidth
            >
              <InputLabel htmlFor='firstname'>
                Firstname
              </InputLabel>
              <Input
                id='firstname'
                type='text'
                name='firstname'
                autoComplete='firstname'
                autoFocus
              />
            </FormControl>
            <FormControl
              margin='normal'
              required
              fullWidth
            >
              <InputLabel htmlFor='email'>
                Email Address
              </InputLabel>
              <Input
                id='email'
                type='email'
                name='email'
                autoComplete='email'
                autoFocus
              />
            </FormControl>
            <FormControl
              margin='normal'
              required
              fullWidth
            >
              <InputLabel htmlFor='password'>
                Password
              </InputLabel>
              <Input
                name='password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </FormControl>
            <FormControl
              margin='normal'
              required
              fullWidth
            >
              <InputLabel htmlFor='repeatPassword'>
                Repeat Password
              </InputLabel>
              <Input
                name='repeatPassword'
                type='password'
                id='repeatPassword'
                autoComplete='current-repeatPassword'
              />
            </FormControl>
            <Box
              component='div'
              sx={{
                marginY: '2rem',
                textAlign: 'left',
              }}
            >
              <Typography>
                Already Registered?
                <Link
                
                  onClick={() =>
                    navigate('/login')
                  }
                  underline='none'
                  sx={{
                    marginLeft: '.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Sign In
                </Link>
              </Typography>
            </Box>
            <RegisterButton variant='contained' />
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Register
