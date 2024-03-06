import React, { useState } from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { useLoginForm } from '../forms/LoginForm'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { useRegisterForm } from '../forms/RegisterForm'

const Clients = () => {
    const [isLogin, setIsLogin] = useState(true)
    const {LoginForm} = useLoginForm()
    const {RegisterForm} = useRegisterForm()
    
    

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
                    {isLogin ? "Client Login" : "Client Register"}
                </Heading>
            </MotionBox>
            <MotionBox
                w='125px'
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderBottom={'2px solid white'}
            >
                
                    <MotionBox
                        bgColor={isLogin ? "white" : 'cm.400'}
                        cursor={'pointer'}
                        onClick={() => setIsLogin(true)}
                    >
                        <Text
                            textColor={'black'}
                            m={'10px'}
                        >
                            LOGIN
                        </Text>
                    </MotionBox>
                    <MotionBox
                        bgColor={!isLogin ? "white" : 'cm.400'}
                        cursor={'pointer'}
                        onClick={() => setIsLogin(false)}
                    >
                        <Text
                            textColor={'black'}
                            m={'10px'}
                        >
                            REGISTER
                        </Text>
                    </MotionBox>
                
            </MotionBox>
            {isLogin ? 
                <LoginForm/>
            :
                <RegisterForm/>
            }
        </VStack>
        
    </MotionBox>
  )
}

export default Clients