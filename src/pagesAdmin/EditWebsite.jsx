import React, { useEffect, useState } from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { useEditHeroSlider } from '../comps/editWebsite/EditHeroSlider'
import { VStack } from '@chakra-ui/react'
import { useEditHomeBlock1 } from '../comps/editWebsite/editHomeBlock1'
import { useEditPortfolio } from '../comps/editWebsite/EditPortfolio'

const EditWebsite = () => {
    const {EditHeroSlider, heroSlides} = useEditHeroSlider()
    const {EditPortfolio} = useEditPortfolio()
    
    return (
        <MotionBox
            w='100%'
        >
            <VStack
                w='100%'
            >
                    <EditHeroSlider
                        Slides={heroSlides}
                    />
                    <EditPortfolio/>
                
            </VStack>
        </MotionBox>
    )
    
    
  
}

export default EditWebsite