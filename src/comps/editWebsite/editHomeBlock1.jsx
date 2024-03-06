import { Heading } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"

export function useEditHomeBlock1(){
    const EditHomeBlock1 = () => {
        return (
            <MotionBox
                w='100%'
            >
                <MotionBox
                        w='100%'
                        h='50px'
                        bgColor={'cm.400'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Heading
                            fontSize={'40px'}
                            textColor={'white'}
                        >
                            HOME BLOCK 1
                        </Heading>
                    </MotionBox>
            </MotionBox>
        )
    }

    return {EditHomeBlock1}
}