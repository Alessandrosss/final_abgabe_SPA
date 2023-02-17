import { useState } from 'react'
import {
  useNavigate,
  Link,
} from 'react-router-dom'
import paths from '../../utils/paths'
import {
  ButtonCompact,
  ButtonOutlined,
} from '../buttons'
import Logo from './Logo'
import {
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai'
import { useQuery } from 'react-query'

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(true)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex justify-between items-center h-20 w-full px-8 lg:w-9/12 lg:mx-auto lg:px-0'>
      <Logo />

      {/* Navigationsleiste */}
      <ul className='hidden lg:flex flex-row items-center gap-6 uppercase font-semibold'>
        <li>
          <Link to={paths.Home.path}>
            Home
          </Link>
        </li>
        <li>
          <Link to={paths.Blog.path}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={paths.Application.path}
          >
            Application
          </Link>
        </li>
        <div className='ml-8 flex flex-row gap-4'>
          <ButtonCompact
            path='/register'
            value='Sign up'
          />
          <ButtonOutlined
            path='/login'
            value='Login'
          />
        </div>
      </ul>

      {/* Hamburger Menü Icon */}
      <div
        onClick={handleNav}
        className='block lg:hidden'
      >
        {!isOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={
          !isOpen
            ? 'fixed left-0 top-0 w-3/6 h-full bg-slate-50 p-4 text-center ease-in-out duration-300'
            : 'fixed left-[-100%] translate-x-9'
        }
      >
        <Logo />

        <ul className='pt-12 uppercase font-semibold flex flex-col lg:hidden w-full gap-5'>
          <Link
            style={{ padding: '1rem' }}
            onClick={() =>
              setIsOpen(!isOpen)
            }
            to={paths.Home.path}
          >
            Home
          </Link>
          <Link
            style={{ padding: '1rem' }}
            onClick={() =>
              setIsOpen(!isOpen)
            }
            to={paths.Blog.path}
          >
            Blog
          </Link>
          <Link
            style={{ padding: '1rem' }}
            onClick={() =>
              setIsOpen(!isOpen)
            }
            to={paths.Application.path}
          >
            Application
          </Link>
          <ButtonCompact
            path='/register'
            value='Sign up'
          />
          <ButtonOutlined
            path='/login'
            value='Login'
          />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
