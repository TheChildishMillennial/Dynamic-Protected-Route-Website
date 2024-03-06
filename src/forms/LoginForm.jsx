import { Button, Checkbox, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightAddon, InputRightElement, Text, VStack } from "@chakra-ui/react"
import { MotionBox } from "../comps/motionComps/MotionComps"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useValidationSchema } from "../lib/FormValidate";
import { Link, useNavigate } from "react-router-dom";
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/Firebase";
import { ADMIN_DASHBOARD, USER_DASHBOARD } from "../lib/Routes";
import { Context } from "../lib/AuthContext";

export function useLoginForm(){
    const [showPassword, setShowPassword] = useState(false)
    const {loginSchema} = useValidationSchema()
    const navigate = useNavigate()
    

    const handlePasswordVisible = () => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }

    const LoginForm = () => {
        const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, isSubmitting} = useFormik({
            initialValues: {
                email: "",
                password: "",
                rememberMe: false
            },
    
            validationSchema: loginSchema,
    
            onSubmit: (values) => {
                signInUser(values.email, values.password, values.rememberMe)
                resetForm()
            }
        })
        return(
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
                            isInvalid={touched.email && errors.email}
                        >
                            <FormLabel
                                htmlFor="email"
                            >
                                Email
                            </FormLabel>
                            <Input
                                id="email"
                                name="email"
                                variant={'outlined'}
                                autoComplete='off'
                                bg={'white'}
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Text
                                textColor={'white'}
                            >
                                {touched.email && errors.email}
                            </Text>
                        </FormControl>
                        <FormControl
                            isInvalid={touched.password && errors.password}
                        >
                            <FormLabel
                                htmlFor="password"
                            >
                                Password
                            </FormLabel>
                            <InputGroup>
                                
                                <Input
                                    id="password"
                                    name='password'
                                    variant={'outlined'}
                                    bg={'white'}
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <InputRightElement>
                                    <IconButton
                                        icon={showPassword ? <FaEye/> : <FaEyeSlash/>}
                                        onClick={() => handlePasswordVisible()}
                                        bg={'cm.400'}
                                        _hover={{
                                            color: 'white'
                                        }}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <Text
                                textColor={'white'}
                            >
                                {touched.password && errors.password}
                            </Text>
                        </FormControl>
                        <MotionBox
                            display={'flex'}
                        >
                            <Checkbox
                                colorScheme="grey"
                            />
                            <Text
                                ml={'10px'}
                            >
                                Remember Me?
                            </Text>
                        </MotionBox>
                        
                        <Button
                            bg={'cm.600'}
                            width={'full'}
                            type="submit"
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
                        <Text
                            as={Link}
                            cursor={'pointer'}
                            textDecor={'underline'}
                            _hover={{
                                color: 'white'
                            }}
                        >
                            Forgot Password?
                        </Text>
                    </VStack>
                </form>
            </MotionBox>
        )
    }

    const signInUser = async (email, password, rememberMe) => {
        
        const setBrowserPersistence = () => {
            if(rememberMe){
                return browserLocalPersistence
            } else {
                return browserSessionPersistence
            }
        }

        try {
            await setPersistence(auth, setBrowserPersistence())
            .then(
                
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    userCredential.user.getIdTokenResult()
                    .then((result) => {
                        if (result.claims.role == "admin"){
                            navigate(ADMIN_DASHBOARD)
                        } else {
                            navigate(USER_DASHBOARD)
                        }
                    })
                    
                })
                
                
            )
        } catch (error) {
            console.log(error)
        }
        
    }

    return {LoginForm}
}
