import { FormControl, FormErrorMessage, FormLabel, HStack, Heading, Icon, Image, Input, Select, SimpleGrid, Stack, Text, Textarea, VStack } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"
import { IoMdAdd } from "react-icons/io"
import { useState } from "react"
import { useWebtools } from "../../hooks/WebTools"
import { ref } from "firebase/storage"
import { storage } from "../../lib/Firebase"
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaTrash, FaEdit } from "react-icons/fa"

export function useEditPortfolio(){
    const {generateUUID} = useWebtools()
    const [portfolioSlides, setPortfolioSlides] = useState([])
    const [slideIndex, setSlideIndex] = useState()
    const [isEdit, setIsEdit] = useState(false)

        
    const EditPortfolio = () => {
        return (
            <MotionBox
                w='100%'
                mb={'100px'}
            >
                <VStack>
                    <TypeTitle
                        Title = 'PORTFOLIO'
                        BlockColor = 'cm.400'
                    />
                    <PortfolioItemCard/>
                    <AddSlideButton/>
                </VStack>
            </MotionBox>
        )
    }

    const TypeTitle = (props) => {
        return (
            <MotionBox
                w='100%'
                h='50px'
                bgColor={props.BlockColor}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Heading
                    fontSize={'40px'}
                    textColor={'white'}
                >
                    {props.Title}
                </Heading>
            </MotionBox>
        )
    }

    const AddSlideButton = () => {
        return (
            <MotionBox
                w='100%'
                display={'flex'}
                justifyContent={'center'}
            >
                <MotionBox
                    cursor={'pointer'}
                    h='50px'
                    w='50px'
                    borderRadius={'100%'}
                    bgColor={'cm.200'}
                    position={'relative'}
                    mt={'20px'}
                    _hover={{
                        bgColor: 'white'
                    }}
                >
                    <Icon
                        w='100%'
                        h='100%'
                        as={IoMdAdd}
                        position={'absolute'}
                    />
                    <Input
                        opacity={0}
                        w='100%'
                        h='100%'
                        type='file'
                        position={'absolute'}
                        //onChange={(e) => handleUploadMedia(e)}
                        multiple
                    />
                </MotionBox>
            </MotionBox>
        )
    }

    const PortfolioItemCard = (props) => {
        
        return (
            <MotionBox
                id={props.Index}
                w='100%'
                maxW={'1000px'}
                bgColor={'cm.200'}
                border={'1px solid black'}
                display={'flex'}
                justifyContent={'center'}
                flexDir={'column'}
                
            >
                <MotionBox
                    bgColor={'white'}
                    borderBottom={'1px solid black'}
                    w='100%'
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <Heading>Jon</Heading>
                </MotionBox>
                <MotionBox
                    h='100px'
                    w='100%'
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                                    
                
                    <MotionBox
                        borderRight={'1px solid black'}
                        w='80px'
                        bgColor={'white'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        position={'relative'}
                    >
                        
                        <MotionBox
                            mt={'5px'}
                            cursor={'pointer'}
                            position={'absolute'}
                            top={0}
                            h='25px'
                            w='25px'
                            color={'black'}
                            //onClick={() => addSlideIndex(props.Index)}
                            _hover={{
                                color: 'cm.200'
                            }}
                            display={ props.Index != 0 ? 'flex' : 'none'}
                        >
                            <Icon
                                w='100%'
                                h='100%'
                                as={FaArrowAltCircleUp }
                            />
                        </MotionBox>
                        <Text
                            fontSize={'30px'}
                        >
                            {props.Index + 1}
                        </Text>
                        <MotionBox
                            mb={'5px'}
                            cursor={'pointer'}
                            position={'absolute'}
                            bottom={0}
                            h='25px'
                            w='25px'
                            color={'black'}
                            //onClick={() => subtractSlideIndex(props.Index)}
                            _hover={{
                                color: 'cm.200'
                            }}
                            //display={ props.Index < heroSlides.length - 1 ? 'flex' : 'none'}
                        >
                            <Icon
                                w='100%'
                                h='100%'
                                as={ FaArrowAltCircleDown }
                            />
                        </MotionBox>

                        
                        
                    </MotionBox>
                    

                    <MotionBox
                        h='100%'
                        w='200px'
                    >
                        <Image
                            w='100%'
                            h='100%'
                            objectFit={'scale-down'}
                            src={props.MediaSrc}
                        />
                    </MotionBox>

                    <MotionBox
                        borderRight={'1px solid black'}
                        bgColor={'white'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        position={'relative'}
                    >
                        <MotionBox
                            h='25px'
                            m={'10px'}
                            cursor={'pointer'}
                            color={'black'}
                            _hover={{
                                color: 'red.600'
                            }}
                            //onClick={() => deleteSlide(props.Index)}
                        >
                            <Icon
                                w='100%'
                                h='100%'
                                as={FaTrash}
                            />
                        </MotionBox>
                        <MotionBox
                            m={'10px'}
                            h='25px'
                            cursor={'pointer'}
                            color={'black'}
                            _hover={{
                                color: 'yellow.400'
                            }}
                            onClick={() => isEdit ? setIsEdit(false) : setIsEdit(true)}
                        >
                            <Icon
                                h='100%'
                                w='100%'
                                as={FaEdit}
                            />
                        </MotionBox>
                    </MotionBox>
                </MotionBox>
                <MotionBox
                    display={'flex'}
                    justifyContent={'center'}
                >
                    
                    <Text>Description</Text>
                </MotionBox>
                <MotionBox
                    w='100%'
                    bgColor='white'
                    display={isEdit ? 'flex' : 'none'}
                    justifyContent={'center'}
                >
                    <VStack
                        w='100%'
                    >
                        <Heading>EDIT</Heading>
                        <form>
                            <FormControl>
                                <FormLabel>
                                    Title    
                                </FormLabel>
                                <Input
                                    type="text"
                                />
                                <FormErrorMessage>

                                </FormErrorMessage>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Description    
                                </FormLabel>
                                <Textarea/>
                                <FormErrorMessage>
                                    
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Class   
                                </FormLabel>
                                <HStack
                                    w='100%'
                                >
                                    <SimpleGrid
                                        templateColumns={'repeat(2, 1fr)'}
                                        spacing={'15px'}
                                    >
                                        <MotionBox
                                            bgColor={'red'}
                                            p={'5px 10px'}
                                            borderRadius={'20px'}
                                            cursor={'pointer'}
                                        >
                                            <Text>
                                                OPTION
                                            </Text>
                                        </MotionBox>

                                        <MotionBox>
                                            <Text>
                                                OPTION
                                            </Text>
                                        </MotionBox>

                                        <MotionBox>
                                            <Text>
                                                OPTION
                                            </Text>
                                        </MotionBox>

                                        <MotionBox>
                                            <Text>
                                                OPTION
                                            </Text>
                                        </MotionBox>
                                        
                                    </SimpleGrid>
                                    <MotionBox
                                        h='25px'
                                        w='25px'
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        cursor={'pointer'}
                                        _hover={{
                                            color: 'cm.200'
                                        }}
                                    >
                                        <Icon
                                            h='100%'
                                            w='100%'
                                            as={IoMdAdd}
                                        />
                                    </MotionBox>    
                                </HStack>
                                
                                <FormErrorMessage>
                                    
                                </FormErrorMessage>
                            </FormControl>
                        </form>
                    </VStack>
                </MotionBox>
            </MotionBox>
        )
    }

    

    const handleUploadMedia = async (e) => {
        
        const files = e.target.files
        console.log(e)
        //Parse through media input
        
        for (let idx = 0; idx <= files.length - 1; idx++){
            const slideIdx = slideIndex + idx
            const file = files[idx]
            
            const mediaID = generateUUID()
            // Upload Media to storage
            const imageRef = ref(storage, `portfolio/${mediaID}`)
{/*            
            try {
                await uploadBytes(imageRef, file)
                .then((snapshot) => {
                    console.log("snapshot: ", snapshot)
                    // After upload, get URL
                    getDownloadURL(snapshot.ref)
                    .then((URL) => {
                        // Add Media Entry to DB
                        const mType = file.type.split("/")
                        setDoc(doc(db, 'portfolio', mediaID), {
                            slide_idx: slideIdx,
                            media_id: mediaID,
                            original_name: file.name,
                            media_type: mType[0],
                            file_type: mType[1],
                            URL: URL,
                            time_created: snapshot.metadata.timeCreated
                        })
                        //const slides = getHeroSlides()
                        //slides.then((res) => {
                        //    setPortfolioSlides(res)
                        //})  
                    })
                })
            } catch (error) {
                console.log(error)
            }
*/}        
        
        }

    }

    
    return {EditPortfolio}
}