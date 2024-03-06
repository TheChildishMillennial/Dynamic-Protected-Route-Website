import { Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, IconButton, Input, InputGroup, InputRightAddon, InputRightElement, Text, VStack } from "@chakra-ui/react"
import { MotionBox } from "../comps/motionComps/MotionComps"
import { useFormik } from "formik"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useValidationSchema } from "../lib/FormValidate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/Firebase";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CLIENTS } from "../lib/Routes";

export function useRegisterForm(){
    const [isLoading, setIsLoading] = useState(false)
    const [resterComplete, setRegisterComplete] = useState(false)
    const [userID, setUserID] = useState()
    const [tempEmail, setTempEmail] = useState("email@email.com")
    const [emailExists, setEmailExists] = useState(false)
    const navigate = useNavigate()

    const RegisterForm = () => {
        const {registerSchema} = useValidationSchema()
        const [showPassword, setShowPassword] = useState(false)
        const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, isSubmitting} = useFormik({
            initialValues: {
                name: "",
                company: "",
                email: "",
                password: "",
                verify_password: ""
            },

            validationSchema: registerSchema,

            onSubmit: (values) => {
                CreateNewUser(values.name, values.company, values.email, values.password)
                resetForm()
            }
        })

        const handlePasswordVisible = () => {
            if (showPassword) {
                setShowPassword(false)
            } else {
                setShowPassword(true)
            }
        }
        return(
            !resterComplete ?
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
                                htmlFor="name"
                                textColor={'black'}
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
                                textColor={'black'}
                                htmlFor="email"
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
                            <Text>{emailExists && "Email is already registered"}</Text>
                        </FormControl>
                        <FormControl
                            isInvalid={touched.password && errors.password}
                        >
                            <FormLabel
                                textColor={'black'}
                                htmlFor="password"
                            >
                                Password *
                            </FormLabel>
                            <InputGroup>
                                
                                <Input
                                    id="password"
                                    name="password"
                                    variant={'outlined'}
                                    bg={'white'}
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <InputRightElement>
                                    <IconButton
                                        icon={!showPassword ? <FaEye/> : <FaEyeSlash/>}
                                        onClick={() => handlePasswordVisible()}
                                        bg={'cm.400'}
                                        _hover={{
                                            color: 'white'
                                        }}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <Text>{touched.password && errors.password}</Text>
                        </FormControl>

                        <FormControl
                            isInvalid={touched.verify_password && errors.verify_password}
                        >
                            <FormLabel
                                textColor={'black'}
                                htmlFor="verify_password"
                            >
                                Verify Password *
                            </FormLabel>
                            <InputGroup>
                                
                                <Input
                                    id="verify_password"
                                    name="verify_password"
                                    variant={'outlined'}
                                    bg={'white'}
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.verify_password}
                                />
                                <InputRightElement>
                                    <IconButton
                                        icon={!showPassword ? <FaEye/> : <FaEyeSlash/>}
                                        onClick={() => handlePasswordVisible()}
                                        bg={'cm.400'}
                                        _hover={{
                                            color: 'white'
                                        }}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>

                            </FormErrorMessage>
                        </FormControl>
                        
                        
                        <Button
                            bg={'cm.600'}
                            width={'full'}
                            type="submit"
                            mt={'20px'}
                            _hover={{
                                bg:'white'
                            }}
                        >
                            <Text
                                textColor={'black'}
                                fontSize={'25px'}
                            >
                                REGISTER
                            </Text>
                        </Button>
                    </VStack>
                </form>
            </MotionBox>
            :
            <MotionBox>
                <Heading
                    mt={'40px'}
                    align='center'
                    textColor={'white'}
                    fontSize={'40px'}
                >
                    Success!
                </Heading>
                <Text
                    align={'center'}
                    textColor={'cm.200'}
                >
                    A validation link has been sent to {tempEmail}
                </Text>
                <Text
                    align={'center'}
                    textColor={'cm.200'}
                >
                    Please validate your email to finish registration
                </Text>
                <Text
                    cursor={'pointer'}
                    onClick={() => navigate(CLIENTS)}
                    align={'center'}
                    textDecor={'underline'}
                    textColor={'cm.200'}
                    _hover={{
                        textColor: 'white'
                    }}
                >
                    Go To Login
                </Text>
            </MotionBox>
        )
    }

    const CreateNewUser = async (name, company, email, password) => {
        setTempEmail(email)
        setIsLoading(true)
        setRegisterComplete(false)
        setEmailExists(false)
        try {
            //Check if email exists
            const usersRef = collection(db, "users")
            const q = query(usersRef, where("email", "==", email))
            await getDocs(q)
            .then((snapshot) => {
                if (snapshot.docs.length == 0){

                    try {
                        //CreateAuthUser
                        createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user
                            const userID = user.uid
                            try {
                                //Add user to db
                                setDoc(doc(db, "users", userID), {
                                    name: name,
                                    company: company,
                                    email: email,
                                    timestamp: serverTimestamp()
                                })
                                .then(setRegisterComplete(true))                    
                            } catch (error) {
                                console.log(error)
                            }
                        })
                    } catch (error) {
                        console.log(error)
                    }

                }
                setEmailExists(true)
            })    
        } catch (error) {
            console.log(error)
        }
        
        setIsLoading(false)
        
        
    }

    return {RegisterForm}
}
