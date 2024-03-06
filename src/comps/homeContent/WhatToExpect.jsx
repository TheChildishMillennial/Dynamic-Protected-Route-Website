import { Heading } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"

export function useWhatToExpect(){
    const WhatToExpect = () => {
        return (
            <MotionBox
                w='100%'
            >
                <Title
                    Title = 'What To Expect'
                />
            </MotionBox>
        )
    }

    const Title = (props) => {
        return (
            <MotionBox
                w='100%'
                bgColor={'cm.800'}
                display={'flex'}
                justifyContent={'center'}
            >
                <MotionBox
                    borderBottom={'solid'}
                    borderTop={'solid'}
                    color={'cm.200'}
                    mt='25px'
                >
                    <Heading
                        textColor={'white'}
                        fontSize={['50px', '60px', '70px', '80px']}
                    >
                        {props.Title}
                    </Heading>
                </MotionBox>
            </MotionBox>
        )
    }

    return { WhatToExpect }
}