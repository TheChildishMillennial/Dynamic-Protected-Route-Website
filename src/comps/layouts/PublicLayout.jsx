import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useNavbar } from '../navbar/Navbar'
import { MotionBox } from '../motionComps/MotionComps'
import { Outlet } from 'react-router-dom'
import { useFooter } from '../footer/Footer'

const PublicLayout = () => {
    const {Navbar} = useNavbar()
    const {Footer} = useFooter()
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
            <Navbar
                NavbarHeight = '100px'
                NavbarColor = 'black'
            />
        </MotionBox>

        <MotionBox
            mt={'100px'}
            w='100%'
        >
            <Outlet/>
        </MotionBox>

        <MotionBox
            w='100%'
            position={'fixed'}
            bottom={"0px"}
        >
            <Footer/>
        </MotionBox>
        
        
        
    </MotionBox>
  )
}

export default PublicLayout