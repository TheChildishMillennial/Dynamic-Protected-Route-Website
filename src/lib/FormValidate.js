import * as yup from "yup"

const passwordRuleUpperCase = /^(?=.*?[A-Z]).{8,}$/
const passwordRuleLowerCase = /^(?=.*?[a-z]).{8,}$/
const passwordRuleDigit = /^(?=.*?[0-9]).{8,}$/
const passwordRuleSpecialCharacter = /^(?=.*?[#?!@$%^&*-.]).{8,}$/


export function useValidationSchema(){

    const registerSchema = yup.object().shape({
        name: yup
        .string()
        .min(2)
        .max(80)
        .required("A valid name is required")
        ,
        company: yup
        .string()
        .min(2)
        .max(80)
        ,
        email: yup
        .string()
        .email()
        .required("A valid email is required")
        ,
        password: yup
        .string()
        .min(8)
        .matches(passwordRuleLowerCase, {message: "Minimum 1 Lowercase Required"})
        .matches(passwordRuleUpperCase, {message: "Minimum 1 Uppercase Required"})
        .matches(passwordRuleDigit, {message: "Minimum 1 Number Required"})
        .matches(passwordRuleSpecialCharacter, {message: "Minimum 1 Special Character Required"})
        .required("Password is required")
        ,
        verify_password: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Password confirmation required")
        ,
    })

    const loginSchema = yup.object().shape({
        email: yup
        .string()
        .email("Please enter a valid email")
        .required("A valid email is required")
        ,
        password: yup
        .string()
        .min(8)
        .matches(passwordRuleLowerCase, {message: "Minimum 1 Lowercase Required"})
        .matches(passwordRuleUpperCase, {message: "Minimum 1 Uppercase Required"})
        .matches(passwordRuleDigit, {message: "Minimum 1 Number Required"})
        .matches(passwordRuleSpecialCharacter, {message: "Minimum 1 Special Character Required"})
        .required("Password is required")
        ,
    })

    const contactSchema = yup.object().shape({
        name: yup
        .string()
        .min(2)
        .max(80)
        .required("Your name is required")
        ,
        company: yup
        .string()
        ,
        email: yup
        .string()
        .email("Please enter a valid email")
        .required("A valid email is required")
        ,
        phone: yup
        .string()
        .min(10)
        ,
        message: yup
        .string()
        .min(5)
        .max(500)
    })

    return {registerSchema, loginSchema, contactSchema}
}