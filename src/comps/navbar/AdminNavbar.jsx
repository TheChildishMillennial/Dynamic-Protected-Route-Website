import { HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { useCMIcons } from "../icons/CMIcons"
import { MotionBox } from "../motionComps/MotionComps"
import { useNavigate } from "react-router-dom"
import { ADMIN_DASHBOARD, EDIT_WEBSITE } from "../../lib/Routes"

export function useAdminNavbar(){
    const {ChildishMillennialLogo} = useCMIcons()
    const navigate = useNavigate()
    const AdminNavbar = (props) => {
        return (
            <MotionBox
                w='100%'
                h={props.NavbarHeight}
                bgColor={props.NavbarColor}
                display={'flex'}
                justifyContent={'space-evenly'}
                minW={'275px'}
            >
                <MotionBox
                    display={'flex'}
                    flex={1}
                >
                    <VStack
                        ml={'25px'}
                    >
                        <ChildishMillennialLogo
                            IconColor = 'white'
                            IconSize = '50px'
                        />
                        <Text
                            textColor={'white'}
                            mt={'-20px'}
                        >
                            ADMIN
                        </Text>
                    </VStack>
                </MotionBox>
                <MotionBox
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    flex={1}
                >
                    <MotionBox
                        onClick={() => navigate(ADMIN_DASHBOARD)}
                        cursor={'pointer'}
                        h='100%'
                        display={'flex'}
                        alignItems={'center'}
                        _hover={{
                            bg: 'cm.600'
                        }}
                    >
                        <Text
                            textColor={'cm.200'}

                        >
                            DASHBOARD
                        </Text>
                    </MotionBox>

                    <MotionBox
                        cursor={'pointer'}
                        onClick={() => navigate(EDIT_WEBSITE)}
                        h='100%'
                        display={'flex'}
                        alignItems={'center'}
                        _hover={{
                            bg: 'cm.600'
                        }}
                    >
                        <Text
                            textColor={'cm.200'}
                            
                        >
                            EDIT WEBSITE
                        </Text>
                    </MotionBox>
                </MotionBox>
            </MotionBox>
        )
    }

    return {AdminNavbar}
}