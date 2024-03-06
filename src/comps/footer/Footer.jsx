import { Heading } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"

export function useFooter(){
    const Footer = () => {
        return (
            <MotionBox
                w='100%'
                bgColor={'yellow'}
            >
                <Heading>
                    Footer
                </Heading>
            </MotionBox>
        )
    }

    return {Footer}
}