import { useFormik } from "formik"
import { MotionBox } from "../comps/motionComps/MotionComps"
import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, Text, Textarea, VStack, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useValidationSchema } from "../lib/FormValidate"
import {doc, setDoc, serverTimestamp} from "firebase/firestore"
import {db} from '../lib/Firebase'
import { useWebtools } from "../hooks/WebTools"
import { useCMIcons } from "../comps/icons/CMIcons"
export function useContactForm(){
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState()
    const [completedUpload, setCompletedUpload] = useState(false)
    const {generateUUID} = useWebtools()
    const {ChildishMillennialLogo} = useCMIcons()
    
    
    const ContactForm = () => {
        const [messageLength, setMessageLength] = useState(0)
        const {contactSchema} = useValidationSchema()
        const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, isSubmitting} = useFormik({
            initialValues: {
                name: "",
                company: "",
                email: "",
                phone: "",
                message: ""
            },
    
            validationSchema: contactSchema,
    
            onSubmit: (values) => {
                uploadMessage(values.name, values.company, values.email, values.phone, values.message)
                resetForm()
            }
        })
        return (
            !completedUpload ?
            <MotionBox
                w={['300px', '400px']}
                bgColor={'cm.200'}
                display={'flex'}
                justifyContent={'center'}
            >
                <form
                    onSubmit={handleSubmit}
                >
                    <VStack
                        w={['250px', '300px']}
                        mt={'25px'}
                        mb={'25px'}
                    >
                        <FormControl
                            isInvalid={touched.name && errors.name}
                        >
                            <FormLabel
                                textColor={'black'}
                                htmlFor="name"
                            >
                                Name  *
                            </FormLabel>
                            <Input
                                id="name"
                                name="name"
                                variant={'outlined'}
                                bg={'white'}
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <Text>{touched.name && errors.name}</Text>
                        </FormControl>

                        <FormControl
                            isInvalid={touched.company && errors.company}
                        >
                            <FormLabel
                                textColor={'black'}
                                htmlFor="company"
                            >
                                Company
                            </FormLabel>
                            <Input
                                id="company"
                                name="company"
                                variant={'outlined'}
                                bg={'white'}
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.company}
                            />
                            <Text>{touched.company && errors.company}</Text>
                        </FormControl>

                        <FormControl
                            isInvalid={touched.email && errors.email}
                        >
                            <FormLabel
                                htmlFor="email"
                                textColor={'black'}
                            >
                                Email *
                            </FormLabel>
                            <Input
                                id="email"
                                name="email"
                                variant={'outlined'}
                                bg={'white'}
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <Text>{touched.email && errors.email}</Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                textColor={'black'}
                                htmlFor="phone"
                            >
                                Phone
                            </FormLabel>
                            <Input
                                id="phone"
                                name='phone'
                                variant={'outlined'}
                                bg={'white'}
                                type='tel'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <Text>{touched.phone && errors.phone}</Text>
                        </FormControl>
                        <FormControl
                            isInvalid={touched.message && errors.message}
                        >
                            <FormLabel
                                htmlFor="message"
                                textColor={'black'}
                            >
                                Message *
                            </FormLabel>
                            <Textarea
                                id="message"
                                name="message"
                                variant={'outlined'}
                                bg={'white'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            
                            <Text>{touched.message && errors.message}</Text>
                        </FormControl>
                        
                        
                        
                        <Button
                            bg={'cm.600'}
                            type="submit"
                            width={'full'}
                            isLoading={isLoading}
                            mt={'20px'}
                            _hover={{
                                bg:'white'
                            }}
                        >
                            <Text
                                textColor={'black'}
                                fontSize={'25px'}
                            >
                                LOGIN
                            </Text>
                        </Button>
                    </VStack>
                </form>
            </MotionBox>
            :
            <MotionBox
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                maxW={'300px'}
            >
                <Heading
                    align='center'
                    textColor={'white'}
                >
                    Your Message Has Been Sent!
                </Heading>
                <Text
                    align='center'
                    fontSize={'20px'}
                    textColor={'cm.200'}
                >
                    Thank you for your interest in The Childish Millennial. We will respond to your inquiry as soon as possible and we look forward to the possibility of working with you on your project!
                </Text>
                
                    <ChildishMillennialLogo
                        IconSize = '100px'
                        IconColor = 'white'
                    />            
                
            </MotionBox>
            
        )
    }

    const uploadMessage = async (name, company, email, phone, message) => {
        
        const messageID = generateUUID()
        
        setIsLoading(true)
        setCompletedUpload(false)
        try {
            await setDoc(doc(db, "messages", messageID), {
                timestamp: serverTimestamp(),
                name: name,
                company: company,
                email: email,
                phone: phone,
                message: message
            })
            setCompletedUpload(true)
        } catch (error) {
            setIsError(error)
            setCompletedUpload(false)  
        }
        setIsLoading(false)

        return {isLoading, isError, completedUpload}
    }

    

    return {ContactForm}
}