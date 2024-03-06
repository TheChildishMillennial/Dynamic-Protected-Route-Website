import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Divider, HStack, Heading, Icon, Radio, RadioGroup, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, VStack, useStatStyles } from "@chakra-ui/react"
import { MotionBox } from "../motionComps/MotionComps"
import { useEffect, useState } from "react"
import { Pricing } from "../../data/TestData"
import {FaQuestion} from 'react-icons/fa'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { PiCheckCircleFill } from "react-icons/pi";

export function useProjectCosts(){
    const ProjectCosts = () => {
        return (
            <MotionBox
                w='100%'
                display={'flex'}
                flexDirection={'column'}
            >
                <Title
                    Title = {'WHAT WILL IT COST'}
                />
                <VStack
                    w='100%'
                >
                    <PricingUI/>
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

    const PricingUI = () => {
        const [webDesignAccActive, setWebDesignAccActive] = useState(false)
        const [appDesignAccActive, setAppDesignAccActive] = useState(false)
        const [threeDGraphicsAccActive, set3DGraphicsAccActive] = useState(false)
        const [graphicArtAccActive, setGraphicArtAccActive] = useState(false)
        const [xrAccActive, setXRAccActive] = useState(false)
        const [gameAccActive, setGameAccActive] = useState(false)
        const [audioAccActive, setAudioAccActive] = useState(false)
        const [videoAccActive, setVideoAccActive] = useState(false)
        const [mlAccActive, setMLAccActive] = useState(false)
        
        
        const [pages, setPages] = useState(0)
        const [userAuth, setUserAuth] = useState(false)
        const [paymentProcessing, setPaymentProccessing] = useState(false)
        const [dynamicContent, setDynamicContent] = useState(0)
        const [setupFee, setSetupFee] = useState(0)
        const [totalEst, setTotalEst] = useState(0)
        const [aiTasks, setAITasks] = useState(0)

        const [models, setModels] = useState(0)
        const [animatedModels, setAnimatedModels] = useState(0)
        const [animationLength, setAnimationLength] = useState(0)
        const [images, setImages] = useState(0)
        const [webXR, setWebXR] = useState(false)
        const [platformXR, setPlatformXR] = useState(false)

        const [webGame, setWebGame] = useState(false)
        const [mobileGame, setMobileGame] = useState(false)
        const [platformGame, setPlatformGame] = useState(false)

        const [audioTracks, setAudioTracks] = useState(0)
        const [audioComp, setAudioComp] = useState(false)
        const [audioMixing, setAudioMixing] = useState(false)
        const [audioMastering, setAudioMastering] = useState(false)

        const [videos, setVideos] = useState(0)
        const [motionGraphics, setMotionGraphics] = useState(0)
        const [videoSFX, setVideoSFX] = useState(false)

        const [mlCV, setMLCV] = useState(false)
        const [mlNLP, setMLNLP] = useState(false)
        const [mlAudio, setMLAudio] = useState(false)
        const [mlTabular, setMLTabular] = useState(false)
        const [mlMultimodal, setMLMultimodal] = useState(false)
        const [mlRL, setMLRL] = useState(false)

        const [staticApp, setStaticApp] = useState(false)
        const [dynamicApp, setDynamicApp] = useState(false)
        const [appUserAuth, setAppUserAuth] = useState(false)
        const [appPaymentProcessing, setAppPaymentProcessing] = useState(false)
        const [appAITasks, setAppAITasks] = useState(0)

        const WebSetupFee = Pricing.web_setup_fee.setup_fee

        const FrontEndHourly = Pricing.web_frontend_design.hourly
        const FrontEndTime = Pricing.web_frontend_design.per_item
        const FrontEndUnit = FrontEndHourly * FrontEndTime
        const FrontEndEst = FrontEndUnit * pages

        const BackEndHourly = Pricing.web_backend_design.hourly
        
        const AuthSetupTime = Pricing.web_backend_design.authSetup
        const AuthUnit = BackEndHourly * AuthSetupTime
        
        const PaymentSetupTime = Pricing.web_backend_design.paymentSetup
        const PaymentUnit = BackEndHourly * PaymentSetupTime

        const DynamicSetupTime = Pricing.web_backend_design.dynamicSetup
        const DynamicUnit = DynamicSetupTime * BackEndHourly
        const DynamicEst = DynamicUnit * dynamicContent

        const AISetupTime = Pricing.web_backend_design.aiSetup
        const AIUnit = AISetupTime * BackEndHourly

        const ThreeDModelingHourly = Pricing.threeD_Art.modeling_hourly
        const ThreeDAnimationHourly = Pricing.threeD_Art.animation_hourly
        const ThreeDSetupTime = Pricing.threeD_Art.three_d_setup
        const ThreeDRiggingFee = Pricing.threeD_Art.rigging_fee
        const ThreeDHoursPer30Sec = Pricing.threeD_Art.time_animation_per_30sec
        

        const ThreeDModelingUnit = ThreeDSetupTime * ThreeDModelingHourly
        const ThreeDModelingEst = ThreeDModelingUnit * models 
        const ThreeDModelRiggingEst = animatedModels * ThreeDRiggingFee
        
        const ThreeDAnimationPer30Sec = ThreeDHoursPer30Sec * ThreeDAnimationHourly

        const ThreeDAnimationUnit = ThreeDAnimationPer30Sec / 30
        const ThreeDAnimationEst = ThreeDAnimationUnit * animationLength


        const GraphicArtHourly = Pricing.graphic_art.hourly
        const GraphicArtSetup = Pricing.graphic_art.graphic_art_setup
        const GraphicArtUnit = GraphicArtHourly * GraphicArtSetup
        const GraphicArtEst = GraphicArtUnit * images

        const XRHourly = Pricing.xr_development.hourly
        const WebXRSetup = Pricing.xr_development.web_xr_setup
        const PlatformXRSetup = Pricing.xr_development.platform_xr_setup

        const WebXREst = XRHourly * WebXRSetup
        const PlatformXREst = XRHourly * PlatformXRSetup

        const GameHourly = Pricing.game_development.hourly
        const WebGameSetup = Pricing.game_development.web_game
        const MobileGameSetup = Pricing.game_development.mobile_game
        const PlatformGameSetup = Pricing.game_development.platform_game

        const WebGameEst = GameHourly * WebGameSetup
        const MobileGameEst = GameHourly * MobileGameSetup
        const PlatformGameEst = GameHourly * PlatformGameSetup

        const AudioHourly = Pricing.audio_production.hourly
        const AudioCompSetup = Pricing.audio_production.composition_setup
        const AudioMixingSetup = Pricing.audio_production.mixing_setup
        const AudioMasteringSetup = Pricing.audio_production.mastering_setup

        const AudioCompUnit = AudioHourly * AudioCompSetup
        const AudioMixingUnit = AudioHourly * AudioMixingSetup
        const AudioMasteringUnit = AudioHourly * AudioMasteringSetup

        const VideoHourly = Pricing.video_production.hourly
        const VideoSetup = Pricing.video_production.video_setup
        const VideoMotionGraphicsSetup = Pricing.video_production.motion_graphic_setup
        const VideoSFXSetup = Pricing.video_production.sfx_setup

        const VideoUnit = VideoHourly * VideoSetup
        const VideoMotionGraphicsUnit = VideoHourly * VideoMotionGraphicsSetup
        const VideoSFXUnit = VideoHourly * VideoSFXSetup

        const VideoEst = VideoUnit * videos
        const VideoMotionGraphicsEst = VideoMotionGraphicsUnit * motionGraphics
        const VideosSfxEst = VideoSFXUnit * videos

        const MLHourly = Pricing.machine_learning.hourly
        const MLSetup = Pricing.machine_learning.ml_setup
        const MLUnit = MLHourly * MLSetup

        const AppHourly = Pricing.app_design.hourly
        const AppStaticSetup = Pricing.app_design.static_setup
        const AppDynamicSetup = Pricing.app_design.dynamic_setup
        const AppUserAuthSetup = Pricing.app_design.authSetup
        const AppPaymentProssSetup = Pricing.app_design.paymentSetup
        const AppAITasksSetup = Pricing.app_design.ai_setup
        const AppSetupFee = Pricing.app_setup_fee.setup_fee
        
        const AppAITaskUnit = AppHourly * AppAITasksSetup
        const AppStaticEst = AppHourly * AppStaticSetup
        const AppDynamicEst = AppHourly * AppDynamicSetup
        const AppUserAuthEst = AppHourly * AppUserAuthSetup
        const AppPaymentEst = AppHourly * AppPaymentProssSetup

        const findTotal = () => {

            let SetupFee = 0
            if (pages > 0 || userAuth == "true" || paymentProcessing == "true" || dynamicContent > 0 || aiTasks > 0){
                SetupFee = WebSetupFee
            }
            
            if (staticApp == "true" || dynamicApp == "true" || appUserAuth == "true" || appPaymentProcessing == "true" || appAITasks > 0){
                if(SetupFee > 0){
                    SetupFee = SetupFee + AppSetupFee
                } else {
                    SetupFee = AppSetupFee
                }
            }

            let AuthEst = 0
            if(userAuth == "true"){
                AuthEst = AuthUnit
            }

            let PaymentEst = 0
            if (paymentProcessing == 'true'){
                PaymentEst = PaymentUnit
            }

            let StaticAppEst = 0
            if(staticApp == 'true'){
                StaticAppEst = AppStaticEst
            }

            let DynamicAppEst = 0
            if(dynamicApp == "true"){
                DynamicAppEst = AppDynamicEst
            }

            let UserAuthAppEst = 0
            if(appUserAuth == "true"){
                UserAuthAppEst = AppUserAuthEst
                if(userAuth == "true"){
                    UserAuthAppEst = AppUserAuthEst / 2
                }
            }

            let PaymentProcAppEst = 0
            if(appPaymentProcessing == "true"){
                PaymentProcAppEst = AppPaymentEst
                if(paymentProcessing == "true"){
                    PaymentProcAppEst = AppPaymentEst / 2
                }
            }

            let AI_Est = 0
            if(aiTasks != 0){
                if (appAITasks != 0){
                    if(appAITasks > aiTasks){
                        AI_Est = appAITasks * (BackEndHourly + (AppHourly / 2))
                    }
                } else {
                    AI_Est = BackEndHourly * aiTasks
                }
            }
            if(appAITasks != 0){
                if (aiTasks != 0){
                    if(aiTasks > appAITasks){
                        AI_Est = aiTasks * (AppHourly + (BackEndHourly / 2))
                    }
                } else {
                    AI_Est = AppHourly * appAITasks
                }    
            }
            

            let Web_XREst = 0
            if(webXR == "true"){
                Web_XREst = WebXREst
            }

            let Platform_XREst = 0
            if(platformXR == "true"){
                Platform_XREst = PlatformXREst
            }

            let Web_GameEst = 0
            if(webGame == "true"){
                Web_GameEst = WebGameEst
            }

            let Mobile_GameEst = 0
            if(mobileGame == "true"){
                Mobile_GameEst = MobileGameEst
            }

            let Platform_GameEst = 0
            if(platformGame == "true"){
                Platform_GameEst = PlatformGameEst
            }

            let AudioCompEst = 0
            if (audioComp == "true"){
                AudioCompEst = AudioCompUnit * audioTracks
            }

            let AudioMixingEst = 0
            if (audioMixing == "true"){
                AudioMixingEst = AudioMixingUnit * audioTracks
            }

            let AudioMasteringEst = 0
            if (audioMastering == "true"){
                AudioMasteringEst = AudioMasteringUnit * audioTracks
            }

            let VidSFXEst = 0
            if(videoSFX == "true"){
                VidSFXEst = VideosSfxEst
            }

            let MLCVEst = 0
            if(mlCV == "true"){
                MLCVEst = MLUnit
            }

            let MLNLPEst = 0
            if(mlNLP == "true"){
                MLNLPEst = MLUnit
            }

            let MLAudioEst = 0
            if(mlAudio == "true"){
                MLAudioEst = MLUnit
            }

            let MLTabularEst = 0
            if(mlTabular == "true"){
                MLTabularEst = MLUnit
            }

            let MLMultimodalEst = 0
            if(mlMultimodal == "true"){
                MLMultimodalEst = MLUnit
            }

            let MLRLEst = 0
            if(mlRL == "true"){
                MLRLEst = MLUnit
            }



            setSetupFee(SetupFee)

        
            


            const Total = 
                SetupFee +
                FrontEndEst +
                AuthEst +
                PaymentEst +
                DynamicEst +
                AI_Est +
                StaticAppEst +
                DynamicAppEst +
                UserAuthAppEst +
                PaymentProcAppEst +
                ThreeDModelingEst +
                ThreeDModelRiggingEst +
                ThreeDAnimationEst +
                GraphicArtEst +
                Platform_XREst +
                Web_XREst +
                Web_GameEst +
                Mobile_GameEst +
                Platform_GameEst +
                AudioCompEst +
                AudioMixingEst +
                AudioMasteringEst +
                VideoEst +
                VideoMotionGraphicsEst +
                VidSFXEst +
                MLCVEst +
                MLNLPEst +
                MLAudioEst +
                MLTabularEst +
                MLMultimodalEst +
                MLRLEst

            setTotalEst(Total)

        }
        useEffect(() => {
            
            findTotal()
        },[
            pages,
            userAuth,
            paymentProcessing,
            dynamicContent,
            staticApp,
            dynamicApp,
            appUserAuth,
            appPaymentProcessing,
            appAITasks,
            aiTasks,
            models,
            animatedModels,
            ThreeDAnimationEst,
            GraphicArtEst,
            webXR,
            platformXR,
            webGame,
            mobileGame,
            platformGame,
            audioComp,
            audioMixing,
            audioMastering,
            audioTracks,
            videos,
            motionGraphics,
            videoSFX,
            mlCV,
            mlNLP,
            mlAudio,
            mlTabular,
            mlMultimodal,
            mlRL
        ])
        
        
        

        return (
            <MotionBox
                mt={'25px'}
                w='80%'
                maxW={'500px'}
                display={'flex'}
                justifyContent={'center'}
                bgColor={'cm.200'}
            >
                <SimpleGrid
                    w='100%'
                >
                    <Accordion
                        allowMultiple
                    >
                        <AccordionItem id="web-dev">
                            <AccordionButton
                                onClick={() => {
                                    if(webDesignAccActive){
                                        setWebDesignAccActive(false)
                                    } else {
                                        setWebDesignAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                     <MotionBox
                                        h={'20px'} 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ webDesignAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            WEB DEVELOPMENT
                                        </Text>
                                        <MotionBox
                                            h='30px'
                                            w='30px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                display={pages > 0 || userAuth == 'true' || paymentProcessing == 'true' || dynamicContent > 0 || aiTasks > 0 ? 'flex' : 'none'}
                                                w='100%'
                                                h='100%'
                                                as={ PiCheckCircleFill }
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                                <MotionBox
                                    w='100%'
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    flexDirection={'column'}
                                >
                                    <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Static Pages
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setPages(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {pages}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                User Authentication
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => setUserAuth(v)}
                                            value={userAuth == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio  value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                Payment Processing
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => {setPaymentProccessing(v)}}
                                            value={paymentProcessing == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio  value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>


                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Dynamic Items
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setDynamicContent(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {dynamicContent}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                AI Tasks
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => {
                                                setAITasks(value)
                                                
                                            }}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {aiTasks}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>
                                    
                                </MotionBox>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id='app-dev'>
                            <AccordionButton
                                onClick={() => {
                                    if(appDesignAccActive){
                                        setAppDesignAccActive(false)
                                    } else {
                                        setAppDesignAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                     <MotionBox
                                        h={'20px'} 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ appDesignAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            APP DEVELOPMENT
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ appDesignAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                                <VStack>

                                <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                Static App
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => {
                                                setStaticApp(v)
                                                if(dynamicApp == "true"){
                                                    setDynamicApp(false)
                                                }
                                            }}
                                            value={staticApp == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                Dynamic App
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => {
                                                setDynamicApp(v)
                                                if(staticApp == "true"){
                                                    setStaticApp(false)
                                                }
                                            }}
                                            value={dynamicApp == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio  value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                User Authentication
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => setAppUserAuth(v)}
                                            value={appUserAuth == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio  value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                textColor={'white'}
                                                mr={'10px'}
                                            >
                                                Payment Processing
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                            
                                        <RadioGroup
                                            defaultValue="false"
                                            onChange={(v) => setAppPaymentProcessing(v)}
                                            value={appPaymentProcessing == "true" ? "true" : "false"}    
                                        >
                                            <HStack>
                                                <Radio value="true">Yes</Radio>
                                                <Radio  value="false">No</Radio>
                                            </HStack>
                                            
                                        </RadioGroup>
                                        
                                        
                                    </MotionBox>


                                    

                                    <MotionBox
                                        mt={'20px'}
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                AI Tasks
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setAppAITasks(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {appAITasks}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>
                                    
                                
                                </VStack>    
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id ='3d-graphics'>
                            <AccordionButton
                                onClick={() => {
                                    if(threeDGraphicsAccActive){
                                        set3DGraphicsAccActive(false)
                                    } else {
                                        set3DGraphicsAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                     <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ threeDGraphicsAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            3D GRAPHICS
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ threeDGraphicsAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                                <VStack>
                                    <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Total Models
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setModels(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {models}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>

                                    <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                fontSize={'15px'}
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Animated Models
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setAnimatedModels(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {animatedModels}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>

                                    <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                fontSize={'15px'}
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Animated Length
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={120}
                                            defaultValue={0}
                                            onChange={(value) => setAnimationLength(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {animationLength}s
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox> 
                                </VStack>
                                   
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id="graphic-art">
                            <AccordionButton
                                onClick={() => {
                                    if(graphicArtAccActive){
                                        setGraphicArtAccActive(false)
                                    } else {
                                        setGraphicArtAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ graphicArtAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            GRAPHIC ART
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ graphicArtAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                            <VStack>
                                    <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Total Images
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setImages(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {images}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>

                                    
                                </VStack>   
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id="xr-dev">
                            <AccordionButton
                                onClick={() => {
                                    if(xrAccActive){
                                        setXRAccActive(false)
                                    } else {
                                        setXRAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ xrAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            AR/VR DEVELOPMENT
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ xrAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                                <VStack>
                                    <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Web XR
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setWebXR(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Platform XR
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setPlatformXR(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                </VStack>     
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id="game-dev">
                            <AccordionButton
                                onClick={() => {
                                    if(gameAccActive){
                                        setGameAccActive(false)
                                    } else {
                                        setGameAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ gameAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            GAME DEVELOPMENT
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ gameAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                            <VStack>
                                    <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Web Game
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setWebGame(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Mobile Game
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMobileGame(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Platform Game
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setPlatformGame(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                </VStack>     
                            </AccordionPanel>
                        </AccordionItem>
                        
                        <AccordionItem id="audio-prod">
                            <AccordionButton
                                onClick={() => {
                                    if(audioAccActive){
                                        setAudioAccActive(false)
                                    } else {
                                        setAudioAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h={'20px'} 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ audioAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            AUDIO PRODUCTION
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ audioAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                            <VStack>
                            <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Audio Tracks
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setAudioTracks(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {audioTracks}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>
                                    <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Audio Composition
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setAudioComp(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Audio Mixing
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setAudioMixing(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Audio Mastering
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setAudioMastering(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                </VStack>    
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id="video-prod">
                            <AccordionButton
                                onClick={() => {
                                    if(videoAccActive){
                                        setVideoAccActive(false)
                                    } else {
                                        setVideoAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ videoAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            VIDEO PRODUCTION
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ videoAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                            <VStack>
                            <MotionBox
                                        w='100%'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Videos
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setVideos(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {videos}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>
                                    <MotionBox
                                        w='100%'
                                        mt='20px'
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        pr={'10px'}
                                        pl={'10px'}
                                    >
                                        <MotionBox
                                            display={'flex'}
                                            alignItems={'center'}
                                            w='200px'
                                            mr={'20px'}
                                        >
                                            <Text
                                                noOfLines={1}
                                                mr={'10px'}
                                                textColor={'white'}
                                            >
                                                Motion Graphics
                                            </Text>
                                            <InfoIcon/>
                                        </MotionBox>
                                        
                                        
                                        <Slider
                                            min={0}
                                            max={50}
                                            defaultValue={0}
                                            onChange={(value) => setMotionGraphics(value)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack
                                                    bg={'black'}
                                                />
                                            </SliderTrack>
                                            
                                            <SliderThumb
                                                boxSize={'30px'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                display={'flex'}
                                                
                                            >
                                                <Text
                                                    mb={'1px'}
                                                >
                                                    {motionGraphics}
                                                </Text>
                                            </SliderThumb>
                                        </Slider>
                                    </MotionBox>
                                    <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Video SFX
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setVideoSFX(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                        
                                </VStack>        
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem id="ml-dev">
                            <AccordionButton
                                onClick={() => {
                                    if(mlAccActive){
                                        setMLAccActive(false)
                                    } else {
                                        setMLAccActive(true)
                                    }    
                                }}
                                bgColor={'cm.400'}
                            >
                                <VStack
                                    w='100%'
                                >
                                    <MotionBox
                                        h='20px' 
                                        w={'100%'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ mlAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                        <Text
                                        textColor={'white'}
                                        align = 'center'
                                        fontSize={'30px'}
                                        >
                                            MACHINE LEARNING
                                        </Text>
                                        <MotionBox
                                            h='20px'
                                            w='20px'
                                            borderRadius={'30px'}
                                            color={'white'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Icon
                                                w='80%'
                                                h='80%'
                                                as={ mlAccActive ? BiSolidUpArrow : BiSolidDownArrow}
                                            />
                                        </MotionBox>
                                    </MotionBox>
                                    
                                    <Divider
                                        borderWidth={'1px'}
                                        w='70%'
                                    />
                                </VStack>
                            
                            </AccordionButton>
                            <AccordionPanel>
                                <VStack>
                                <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Computer Vision
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLCV(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Natural Language Proccessing
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLNLP(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Audio
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLAudio(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Tabular
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLTabular(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Multimodal
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLMultimodal(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>

                                        <MotionBox
                                            mt={'20px'}
                                            w='100%'
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            pr={'10px'}
                                            pl={'10px'}
                                        >
                                            
                                            <MotionBox
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Text
                                                    noOfLines={1}
                                                    textColor={'white'}
                                                    mr={'10px'}
                                                >
                                                    Reinforcement Learning
                                                </Text>
                                                <InfoIcon/>
                                            </MotionBox>
                                                
                                            <RadioGroup
                                                defaultValue="false"
                                                onChange={(v) => setMLRL(v)}    
                                            >
                                                <HStack>
                                                    <Radio value="true">Yes</Radio>
                                                    <Radio  value="false">No</Radio>
                                                </HStack>
                                                
                                            </RadioGroup>
                                            
                                            
                                        </MotionBox>
                                </VStack>    
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                    <MotionBox
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        w='100%'
                    >
                    </MotionBox>
                    <MotionBox
                        w='100%'
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <VStack
                            spacing={'0px'}
                        >
                            
                            <Text
                                display={setupFee != 0 ? "initial" : "none"}
                            >+ Setup Fee ${setupFee.toFixed(2)}</Text>
                            
                            <Text
                                fontSize={'25px'}
                            >
                                Current Estimate: ${totalEst.toFixed(2)}
                            </Text>
                        </VStack>
                        
                    </MotionBox>
                </SimpleGrid>
            </MotionBox>
        )
    }

    const InfoIcon = () => {
        return (
            <MotionBox
                h='15px'
                w='15px'
                bgColor={'white'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'20px'}
            >
                <Icon
                    w='80%'
                    h='80%'
                    as={FaQuestion}
                />
            </MotionBox>
        )
    }

    

    

    
    return {ProjectCosts}
}