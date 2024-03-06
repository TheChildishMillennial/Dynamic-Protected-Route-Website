import { Heading, Text, VStack } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"
import { CuttingEdgeTechText } from "../../data/TestData"

export function useTechnologies(){
    const Technologies = () => {
        return (
            <MotionBox
                w='100%'
                display={'flex'}
                justifyContent={'center'}
            >
                <VStack
                    w='100%'
                    maxW={'1000px'}
                >
                    <Title
                        Title = 'Cutting Edge Tech'
                    />
                    <TextArea/>
                </VStack>
                
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

    const TextArea = () => {
        return (
            <MotionBox
                display={'flex'}
                w='80%'
            >
                <Text
                    fontWeight={'500'}
                    fontSize={'20px'}
                    align={'center'}
                    textColor={'white'}
                >
                    {CuttingEdgeTechText}
                </Text>
            </MotionBox>
        )
    }

    return { Technologies }
}