import { useState } from 'react'
import { Box } from '@mui/material'
import DashboardNavbar from '../elements/navbars/DashboardNavbar'
import DashboardHeader from '../elements/header/DashboardHeader'
import DashboardMain from '../elements/main/DashboardMain'

const WebApplication = () => {
  const drawerWidth = '64px'
  const [open, setOpen] =
    useState(false)

  return (
    <>
      <DashboardNavbar
        initialValue={open}
        setInitialValue={setOpen}
      />

      <Box
        sx={{
          ml: drawerWidth,
        }}
      >
        <DashboardHeader />
        <DashboardMain />
      </Box>
    </>
  )
}

export default WebApplication
