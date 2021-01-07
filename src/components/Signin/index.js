import React from 'react'
import {FormInputTextArea, Container, Icon, FormH1, Form, FormContent, FormInput, FormButton, FormWrap, FormLabel, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
          <Container>
           <FormWrap>
            <Icon to="/">Cruse</Icon>   
            <FormContent>
                <Form action="#">
                    <FormH1>Let's Get In Contact</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' required />
                     <FormLabel htmlFor='for'>Message</FormLabel>
                     <FormInputTextArea type='textbox' required />
                     <FormButton type='submit'>Send</FormButton>
                    
                </Form>
            </FormContent>
               
            </FormWrap>    
          </Container>  
        </>
    )
}

export default SignIn
