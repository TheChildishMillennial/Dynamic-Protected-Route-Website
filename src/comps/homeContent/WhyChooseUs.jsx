import React, { useEffect, useRef, useState } from 'react'
import { MotionBox } from '../motionComps/MotionComps'
import { Button, HStack, Heading, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { WhyChooseUs1, WhyChooseUs2, WhyChooseUsList } from '../../data/TestData'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CONTACT } from '../../lib/Routes';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

export function useWhyChooseUs(){
    

    const WhyChooseUs = () => {
        const navigate = useNavigate()
      return (
        <MotionBox
            w='100%'
            bgColor={'cm.800'}
            display={'flex'}
            justifyContent={'center'}
        >
            <VStack
                w='80%'
                maxW={'800px'}
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
                        WHY YOU NEED US
                    </Heading>
                </MotionBox>
                
                <Text
                    align='center'
                    textColor={'white'}
                    fontSize={'20px'}
                    fontWeight={'500'}
                >
                    {WhyChooseUs1}
                </Text>
                <Slider
                    Slides = {WhyChooseUsList}
                />
                
                <Text
                    align='center'
                    textColor={'white'}
                    fontSize={'20px'}
                    fontWeight={'500'}
                >
                    {WhyChooseUs2}
                </Text>
                
                <MotionBox
                    w='80%'
                    maxW={'300px'}
                >
                    <Button
                        bg={'cm.200'}
                        width={'full'}
                        _hover={{
                            bg: 'white'
                        }}
                        onClick={() => navigate(CONTACT)}
                    >
                        <Text
                            fontSize={'30px'}
                        >
                            CONTACT US
                        </Text>
                    </Button>
                </MotionBox>
                    
            </VStack>
            
        </MotionBox>
      )
    }

    const Slider = (props) => {
        const swiperRef = useRef()
        const [activeIndex, setActiveIndex] = useState(0)
        
        return (
            <MotionBox
                w='100%'
            >
                <Swiper
                    modules={[Autoplay]}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500
                    }}
                    onAutoplay={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {props.Slides.map((slide, idx) => (
                        <SwiperSlide
                            key={idx}
                        >
                            <MotionBox
                                id={idx}
                                display={'flex'}
                                justifyContent={'center'}
                                w='100%'
                            >
                                <MotionBox
                                    p={'10px 10px'}
                                    borderRadius={'15px'}
                                    bgColor={'cm.200'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <VStack>
                                        <MotionBox
                                            w='80%'
                                            h='150px'
                                            display={'flex'}
                                            justifyContent={'center'}
                                            overflow={'hidden'}
                                        >
                                            <MotionBox
                                                initial={{
                                                    scale: 1
                                                }}
                                                animate={{
                                                    scale: activeIndex == idx ? 1.5 : 1,
                                                    
                                                }}
                                                transition={{
                                                    ease: 'linear',
                                                    duration: 3.5
                                                }}
                                            >
                                                <Image
                                                    h='100%'
                                                    w='100%'
                                                    objectFit={'scale-down'}
                                                    src={slide.ImgSrc}
                                                />
                                            </MotionBox>
                                        </MotionBox>
                                        
                                        
                                        <HStack>
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                h='30px'
                                                w='30px'
                                                initial={{
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    opacity: activeIndex == idx ? 1 : 0
                                                }}
                                                transition={{
                                                    ease: 'easeInOut',
                                                    duration: 0.25,
                                                    delay: 1
                                                }}
                                            >
                                                <Icon
                                                    h='100%'
                                                    w='100%'
                                                    color={'white'}
                                                    as={FaCheckCircle}
                                                />
                                            </MotionBox>
                                            <Text
                                                textColor={'white'}
                                                fontSize={'30px'}
                                            >
                                                {slide.Text}
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    
                                </MotionBox>
                            </MotionBox>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </MotionBox>
        )
    }

    return {WhyChooseUs}
}


