import React, { useState } from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { useLoginForm } from '../forms/LoginForm'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { useRegisterForm } from '../forms/RegisterForm'
import { useContactForm } from '../forms/ContactForm'

const Contact = () => {
  const {ContactForm} = useContactForm()
  return (
    <MotionBox
        w='100%'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={'cm.800'}
    >
        <VStack>
            <MotionBox
                mt={'25px'}
                mb={'25px'}
                borderBottom={'solid'}
                borderBottomColor={'cm.200'}
                borderTop={'solid'}
                borderTopColor={'cm.200'}
            >
                <Heading
                    fontSize={['50px', '60px', '70px', '80px']}
                    textColor={'white'}
                >
                    Contact
                </Heading>
            </MotionBox>
            <ContactForm/>
                
                    
        </VStack>
        
    </MotionBox>
  )
}

export default Contact