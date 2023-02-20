import { useState } from 'react'
import {
  Link,
  useLocation,
} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LoginButton from './elements/buttons/LoginButton'
import Home from './pages/Home'
import Blog from './pages/Blog'
import WebApplication from './pages/WebApplication'

const drawerWidth = 240

const paths = {
  Homepage: {
    title: 'Homepage',
    path: '/',
    element: <Home />,
  },
  Blog: {
    title: 'Blog',
    path: '/blog',
    element: <Blog />,
  },
  WebApplication: {
    title: 'Web Application',
    path: '/webapplication',
    element: <WebApplication />,
  },
}

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] =
    useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(
      (prevState) => !prevState
    )
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant='h6'
        sx={{ my: 2 }}
      >
        MUI
      </Typography>
      <Divider />
      <List>
        {Object.values(paths).map(
          (item) => (
            <ListItem
              key={item.title}
              disablePadding
            >
              <ListItemButton>
                <Link to={item.path}>
                  {item.title}
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
        <LoginButton />
      </List>
    </Box>
  )

  const container =
    window !== undefined
      ? () => window().document.body
      : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent:
              'space-between',
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 0,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            MUI
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            {Object.values(paths).map(
              (item) => (
                <Button
                  key={item.title}
                  sx={{ color: '#fff' }}
                >
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </Button>
              )
            )}
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <LoginButton variant='contained' />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default DrawerAppBar
