import { Heading, VStack } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react"
import { Autoplay } from "swiper/modules"
import 'swiper/css';

export function usePortfolioSwiper(){

    const swiperRef = useRef()

    const PortfolioSwiper = (props) => {
        return (
            <MotionBox>
                <VStack>
                    <Title
                        Title = {props.Title}
                    />
                    <Slider
                        Slides = {props.Slides}
                    />
                </VStack>
            </MotionBox>
        )
    }

    const Title = (props) => {
        return (
            <MotionBox
                w='100%'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <MotionBox
                    borderTop={'solid'}
                    borderBottom={'solid'}
                    borderTopColor={'cm.200'}
                    borderBottomColor={'cm.200'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Heading
                        textColor={'white'}
                    >
                        {props.Title}
                    </Heading>
                </MotionBox>
                
            </MotionBox>
        )
    }

    const Slider = (props) => {
        return (
            <MotionBox
                w='100%'
            >
                <Swiper
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    slidesPerView={1}  
                >
                    {props.Slides.map((slide, idx) => (
                        <SwiperSlide
                            key={idx}
                        >
                            <WebDevSlide
                                Slide = {slide}
                            />    
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </MotionBox>
        )
    }

    

    const WebDevSlide = (props) => {
        return (
            <MotionBox>
                <Heading
                    textColor={'red'}
                >
                    {props.Slide.text}
                </Heading>
            </MotionBox>
        )
    }

    return {PortfolioSwiper}
}