import { useRef } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { MotionBox } from "../motionComps/MotionComps"

import 'swiper/css';
import { AspectRatio, Heading, Image } from "@chakra-ui/react";

export function useHeroSwiper(){
    const swiperRef = useRef()

    const SwiperItem = (props) => {
        return(
            <MotionBox
                w='100%'
                bgColor={'yellow'}
                maxH={'500px'}
            >
                
                <MotionBox
                    display={'flex'}
                    justifyContent={'center'}
                    
                >
                    <Image
                        maxH={'500px'}
                        h='100%'
                        w='100%'
                        objectFit={'cover'}
                        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />
                </MotionBox>   
            </MotionBox>
        )
    }


    const HeroSwiper = () => {
        return (
            <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <SwiperItem/>    
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem/>    
                </SwiperSlide>
                
            </Swiper>
        )
    }

    return {HeroSwiper}
}