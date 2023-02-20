import {
  Avatar,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
} from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import React from 'react'
import LoginButton from '../elements/buttons/LoginButton'
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
            justifyContent: 'flex-start',
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
            Sign In
          </Typography>
          <form>
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
            <Box
              component='div'
              sx={{
                marginY: '2rem',
                textAlign: 'left',
              }}
            >
              <Typography>
                Not Registered yet?
                <Link
                
                  onClick={() =>
                    navigate('/register')
                  }
                  underline='none'
                  sx={{
                    marginLeft: '.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
            <LoginButton variant='contained' />
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Login
