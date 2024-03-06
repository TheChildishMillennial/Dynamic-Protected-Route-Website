import React from 'react'
import { MotionBox } from '../motionComps/MotionComps'
import { Outlet } from 'react-router-dom'
import { useAdminNavbar } from '../navbar/AdminNavbar'

const AdminLayout = () => {
  const {AdminNavbar} = useAdminNavbar()
  return (
    <MotionBox
        w='100vw'
        position={'relative'}
        bgColor={'cm.800'}
    >
        <MotionBox
            w='100%'
            position={'fixed'}
            zIndex={950}
            top={'0px'}
        >
          <AdminNavbar
            NavbarHeight = '65px'
            NavbarColor = 'black'
          />   
        </MotionBox>

        <MotionBox
            mt={'65px'}
            w='100%'
        >
            <Outlet/>
        </MotionBox>

        <MotionBox
            w='100%'
            position={'fixed'}
            bottom={"0px"}
        >
            
        </MotionBox>
        
        
        
    </MotionBox>
  )
}

export default AdminLayout

