import Layout from './Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Register from './pages/Register'
import Login from './pages/Login'
import WebApplication from './pages/WebApplication'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './assets/App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './palette'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                index
                element={<Home />}
                path='/'
              />
              <Route
                element={<Blog />}
                path='/blog'
              />
              <Route
                element={<Login />}
                path='/login'
              />
              <Route
                element={<Register />}
                path='/register'
              />
            </Route>
            <Route
              element={
                <WebApplication />
              }
              path='/webapplication'
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
