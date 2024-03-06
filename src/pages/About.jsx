import React from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { Heading, VStack } from '@chakra-ui/react'

const About = () => {
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
                    About us
                </Heading>
            </MotionBox>
                
                    
        </VStack>
        
    </MotionBox>
  )
}

export default About