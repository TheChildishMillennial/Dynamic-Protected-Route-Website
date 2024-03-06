import React from 'react'
import { MotionBox } from '../comps/motionComps/MotionComps'
import { Heading } from '@chakra-ui/react'
import { useCMIcons } from '../comps/icons/CMIcons'
import { useHeroSwiper } from '../comps/swipers/HeroSwiper'
import { useWhyChooseUs } from '../comps/homeContent/WhyChooseUs'
import { useProjectCosts } from '../comps/homeContent/ProjectCosts'
import { useTechnologies } from '../comps/homeContent/Technologies'
import { useWhatToExpect } from '../comps/homeContent/WhatToExpect'

const Home = () => {
    const {ChildishMillenialLogo} = useCMIcons()
    const {HeroSwiper} = useHeroSwiper()
    const {WhyChooseUs} = useWhyChooseUs()
    const {ProjectCosts} = useProjectCosts()
    const {Technologies} = useTechnologies()
    const {WhatToExpect} = useWhatToExpect()
  return (
    <MotionBox
        w='100%'
        bgColor={'cm.800'}
    >
        <HeroSwiper/>
        <WhyChooseUs/>
        <Technologies/>
        <ProjectCosts/>
        
        <WhatToExpect/>
        <MotionBox
          h='50px'
        />
    </MotionBox>
  )
}

export default Home