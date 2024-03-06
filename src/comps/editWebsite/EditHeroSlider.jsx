import { HStack, Heading, Icon, Image, Input, Text, VStack } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react"
import 'swiper/css';
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../lib/Firebase";
import { useWebtools } from "../../hooks/WebTools";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
export function useEditHeroSlider(){
    const {generateUUID} = useWebtools()
    const [heroSlides, setHeroSlides] = useState([])
    const [slideIndex, setSlideIndex] = useState()

    const EditHeroSlider = () => {
        
        return (
            <MotionBox
                w='100%'
                display={'flex'}
                justifyContent={'center'}
            >
                <VStack
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
                            HERO SLIDER
                        </Heading>
                    </MotionBox>
                    <MotionBox
                        w='100%'
                        display={'flex'}
                        justifyContent={'center'}
                    >

                        <VStack
                            spacing={'15px'}
                        >
                            {heroSlides
                            .sort((a, b) => a.slide_idx > b.slide_idx)
                            .map((slide, idx) => (
                                <MotionBox
                                    key={idx}
                                    w='100%'
                                >
                                    <SlideItem
                                    Index = {slide.slide_idx}
                                    MediaSrc = {slide.URL}
                                />
                                </MotionBox>
                                
                            ))}
                            <MotionBox>
                                <AddSlideButton/>
                            </MotionBox>
                        </VStack>
                        
                    </MotionBox>
                </VStack>
                
            </MotionBox>
        )
            
    }

    const SlideItem = (props) => {
        return (
            <MotionBox
                id={props.Index}
                w='100%'
                h={['100px', '100px', '150px']}
                maxW={'1000px'}
                bgColor={'cm.200'}
                border={'1px solid black'}
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
                        onClick={() => addSlideIndex(props.Index)}
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
                        onClick={() => subtractSlideIndex(props.Index)}
                        _hover={{
                            color: 'cm.200'
                        }}
                        display={ props.Index < heroSlides.length - 1 ? 'flex' : 'none'}
                    >
                        <Icon
                            w='100%'
                            h='100%'
                            as={ FaArrowAltCircleDown }
                        />
                    </MotionBox>

                    
                    
                </MotionBox>
                <MotionBox
                    w='100px'
                    h='100%'
                    bgColor={'white'}
                    display={'flex'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    pl={'5px'}
                    pr={'5px'}
                >
                    <Text>SLIDE DELAY</Text>
                    <HStack
                        w='100%'
                    >
                    <Input
                        type='number'
                    />
                    <Text>sec</Text>
                    </HStack>
                    <MotionBox
                        w='80%'
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt='5px'
                    >
                        <MotionBox
                            borderRadius={'25px'}
                            h='20px'
                            w='20px'
                            bgColor={'red'}
                            cursor={'pointer'}
                            whileHover={{
                                scale: 1.1
                            }}
                        >

                        </MotionBox>
                        <MotionBox
                            borderRadius={'25px'}
                            h='20px'
                            w='20px'
                            bgColor={'green'}
                            cursor={'pointer'}
                            whileHover={{
                                scale: 1.1
                            }}
                        >

                        </MotionBox>
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
                    w='80px'
                    bgColor={'white'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    position={'relative'}
                >
                    <MotionBox
                        h='25px'
                        cursor={'pointer'}
                        color={'black'}
                        _hover={{
                            color: 'red.600'
                        }}
                        onClick={() => deleteSlide(props.Index)}
                    >
                        <Icon
                            w='100%'
                            h='100%'
                            as={FaTrash}
                        />
                    </MotionBox>
                </MotionBox>
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
                        onChange={(e) => handleUploadMedia(e)}
                        multiple
                    />
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
            const imageRef = ref(storage, `hero-slides/${mediaID}`)
            
            try {
                await uploadBytes(imageRef, file)
                .then((snapshot) => {
                    console.log("snapshot: ", snapshot)
                    // After upload, get URL
                    getDownloadURL(snapshot.ref)
                    .then((URL) => {
                        // Add Media Entry to DB
                        const mType = file.type.split("/")
                        setDoc(doc(db, 'hero-slides', mediaID), {
                            slide_idx: slideIdx,
                            media_id: mediaID,
                            original_name: file.name,
                            media_type: mType[0],
                            file_type: mType[1],
                            URL: URL,
                            time_created: snapshot.metadata.timeCreated
                        })
                        const slides = getHeroSlides()
                        slides.then((res) => {
                            setHeroSlides(res)
                        })  
                    })
                })
            } catch (error) {
                console.log(error)
            }
        
        
        }
                   
    }

    


    const deleteSlide = async (index) => {
        const slide = heroSlides.filter((slide) => slide.slide_idx == index)
        console.log("slide",slide[0])
        const slideID = slide && slide[0].media_id
        const slideRef = ref(storage, `hero-slides/${slideID}`)
        let updateTheseIndexes = []
        const updateIndexArray = () => {
            heroSlides.map((slide, idx) => {
                if(index < slide.slide_idx){
                    updateTheseIndexes = [...updateTheseIndexes, slide]
                }
            })
        }
        if (heroSlides){
            await updateIndexArray()
        }
        
        
        console.log("to update", updateTheseIndexes)
        try {
            await deleteObject(slideRef)
            .then(() => {
                deleteDoc(doc(db, `hero-slides/${slideID}`))
                .then(console.log('file Deleted'))
            })
        } catch (error) {
            console.log(error)
        }
        
        await updateSlideIndex(updateTheseIndexes)
        
        const slides = getHeroSlides()
        slides.then((res) => {
            setHeroSlides(res)
        })    
    }

    const updateSlideIndex = async (toUpdate) => {
        for (let file of toUpdate){
            try {
                await updateDoc(doc(db, "hero-slides", file.media_id), {
                    slide_idx: file.slide_idx - 1
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const addSlideIndex = async (slideIndex) => {
        const alteredSlide = heroSlides.filter((file) => file.slide_idx == slideIndex)
        const slideToAlterBefore = heroSlides.at(slideIndex - 1)
        
        console.log("altered Slide",alteredSlide)
        console.log("slide to alter before", slideToAlterBefore)


        const updateMainSlide = async () => {
            try {
                await updateDoc(doc(db, 'hero-slides', alteredSlide[0].media_id), {
                    slide_idx: alteredSlide[0].slide_idx - 1
                }) 
            } catch (error) {
                console.log(error)
            }      
        }
        const updateSlideBefore = async () => {
            try {
                await updateDoc(doc(db, 'hero-slides', slideToAlterBefore.media_id), {
                    slide_idx: slideToAlterBefore.slide_idx + 1
                }) 
            } catch (error) {
                console.log(error)
            }          
        }

        

        
        updateMainSlide()
        updateSlideBefore()
        const slides = getHeroSlides()
        slides.then((res) => {
            setHeroSlides(res)
        }) 
    }

    const subtractSlideIndex = async (slideIndex) => {
        const alteredSlide = heroSlides.filter((file) => file.slide_idx == slideIndex)
        const slideToAlterAfter = heroSlides.at(slideIndex + 1)
        
        console.log("altered Slide",alteredSlide)
        console.log("slide to alter before", slideToAlterAfter)


        const updateMainSlide = async () => {
            try {
                await updateDoc(doc(db, 'hero-slides', alteredSlide[0].media_id), {
                    slide_idx: alteredSlide[0].slide_idx + 1
                }) 
            } catch (error) {
                console.log(error)
            }      
        }
        const updateSlideBefore = async () => {
            try {
                await updateDoc(doc(db, 'hero-slides', slideToAlterAfter.media_id), {
                    slide_idx: slideToAlterAfter.slide_idx - 1
                }) 
            } catch (error) {
                console.log(error)
            }          
        }

        

        
        updateMainSlide()
        updateSlideBefore()
        const slides = getHeroSlides()
        slides.then((res) => {
            setHeroSlides(res)
        }) 
    }

    const getHeroSlides = async () => {
        setSlideIndex(0)
        let HeroSlides = []
        try {
            await getDocs(collection(db, 'hero-slides'))
            .then((response) => {
                for (let doc of response.docs){
                    HeroSlides = [...HeroSlides, doc.data()]
                    setSlideIndex(HeroSlides.length)
                }                
            })
        } catch (error) {
            console.log(error)
        }
        return HeroSlides
    }

    

    useEffect(() => {
        const slides = getHeroSlides()
        slides.then((res) => {
            setHeroSlides(res)
        })
    }, [])

      
    useEffect(() => {
        console.log("hs: ", heroSlides)
        
    },[heroSlides])
    

    
    return {EditHeroSlider}
}