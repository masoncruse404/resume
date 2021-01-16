import React from 'react'
import emailjs from 'emailjs-com';

import {FormInputTextArea, Container, Icon, FormH1, Form, FormContent, FormInput, FormButton, FormWrap, FormLabel, Text, AlertSuccess } from './SigninElements'

const SignIn = () => {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vnj2hao', 'template_xc24yxh', e.target, 'user_mEtwqF3ppRkZLivFtssrh')
          .then((result) => {
              window.location.href="/";
          }, (error) => {
              console.log(error.text);
          });
      }
    
    return (
        <>
          <Container>
           <AlertSuccess></AlertSuccess>
           <FormWrap>
            <Icon to="/">Cruse</Icon>   
            <FormContent>
                <Form onSubmit={sendEmail}>
                    <FormH1>Let's Get In Contact</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' name='email' required />
                     <FormLabel htmlFor='for'>Message</FormLabel>
                     <FormInputTextArea type='textbox' name='message' required />
                     <FormButton type='submit'>Send</FormButton>
                    
                </Form>
            </FormContent>
               
            </FormWrap>    
          </Container>  
        </>
    )
}

export default SignIn
