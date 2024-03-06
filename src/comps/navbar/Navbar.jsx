import { Fade, Heading } from "@chakra-ui/react"
import { useCMIcons } from "../icons/CMIcons"
import { MotionBox } from "../motionComps/MotionComps"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import { ABOUT, CLIENTS, CONTACT, PORTFOLIO, ROOT } from "../../lib/Routes"

export function useNavbar(){
    const {ChildishMillennialLogo} = useCMIcons()
    const location = useLocation()
    const routerPath = location.pathname
    const Navbar = (props) => {
        return (
            <MotionBox
                w='100%'
                h={props.NavbarHeight}
                bgColor={props.NavbarColor}
                display={'flex'}
                justifyContent={'center'}
                position={'relative'}
                minW={'275px'}
            >
                <MotionBox
                    position={'absolute'}
                    top={'-10px'}
                >
                    <ChildishMillennialLogo
                        IconSize={'80px'}
                        IconColor={'white'}
                    />
                </MotionBox>
                <MotionBox
                    w='100%'
                    position={'absolute'}
                    top={'60px'}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    maxW={'1000px'}
                >
                    <MotionBox
                        as={Link}
                        to={ROOT}
                        cursor={'pointer'}
                        borderBottom='solid'
                        borderBottomWidth={'2px'}
                        borderBottomColor={routerPath == "/" ? 'white' : 'black'}
                        color={routerPath == "/" ? 'white' : 'cm.400'}
                        h={['30px', '35px']}
                        _hover={{
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                        }}
                    >
                        <Heading
                            fontSize={['20px','25px']}
                        >
                            HOME
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        as={Link}
                        to={ABOUT}
                        cursor={'pointer'}
                        borderBottom='solid'
                        borderBottomWidth={'2px'}
                        borderBottomColor={routerPath == "/about-us" ? 'white' : 'black'}
                        color={routerPath == "/about-us" ? 'white' : 'cm.400'}
                        h={['30px', '35px']}
                        _hover={{
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                        }}
                    >
                        <Heading
                            fontSize={['20px','25px']}
                        >
                            ABOUT US
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        as={Link}
                        to={PORTFOLIO}
                        cursor={'pointer'}
                        borderBottom='solid'
                        borderBottomWidth={'2px'}
                        borderBottomColor={routerPath == "/portfolio" ? 'white' : 'black'}
                        color={routerPath == "/portfolio" ? 'white' : 'cm.400'}
                        h={['30px', '35px']}
                        _hover={{
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                        }}
                    >
                        <Heading
                            fontSize={['20px','25px']}
                        >
                            PORTFOLIO
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        as={Link}
                        to={CONTACT}
                        cursor={'pointer'}
                        borderBottom='solid'
                        borderBottomWidth={'2px'}
                        borderBottomColor={routerPath == "/contact" ? 'white' : 'black'}
                        color={routerPath == "/contact" ? 'white' : 'cm.400'}
                        h={['30px', '35px']}
                        _hover={{
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                        }}
                    >
                        <Heading
                            fontSize={['20px','25px']}
                        >
                            CONTACT
                        </Heading>
                    </MotionBox>
                    
                    <MotionBox
                        as={Link}
                        to={CLIENTS}
                        cursor={'pointer'}
                        borderBottom='solid'
                        borderBottomWidth={'2px'}
                        borderBottomColor={routerPath == "/clients" ? 'white' : 'black'}
                        color={routerPath == "/clients" ? 'white' : 'cm.400'}
                        h={['30px', '35px']}
                        _hover={{
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                            transition: 'easeInOut'
                        }}
                        
                    >
                        
                        <Heading
                            fontSize={['20px','25px']}
                        >
                            CLIENTS
                        </Heading>
                    </MotionBox>
                    
                    
                </MotionBox>
                
            </MotionBox>    
        )
    }

    return {Navbar}
}