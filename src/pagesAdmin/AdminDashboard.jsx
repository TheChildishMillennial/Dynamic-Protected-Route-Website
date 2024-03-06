import React, { useContext, useEffect } from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { Heading } from '@chakra-ui/react'
import { Context } from '../lib/AuthContext'



const AdminDashboard = () => {
  const {user} = useContext(Context)
  return (
    <MotionBox
      w='100%'
    >
      <Heading>hello {user.email}</Heading>
    </MotionBox>
  )
  
}




export default AdminDashboard