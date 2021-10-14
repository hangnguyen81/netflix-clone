import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form'
import { useState } from "react"


export default function SignIn(){
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || email === '';

    const handleSignin = (event) => {
        event.preventDefault()
        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }


    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
                <Form.Base onSubmit={handleSignin}></Form.Base>
                <Form.Input 
                    placeholder = 'Email or phone number '
                    value = {email}
                    onChange = {(event) => setEmail(event.target.value) }
                />
                <Form.Input 
                    type = 'password'
                    autoComplete = 'off'
                    placeholder = 'Password'
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value) }
                />
                <Form.Submit disabled={isInvalid} type="submit" >Sign in</Form.Submit>
                <Form.Text>
                    New to netflix? <Form.Link to='/signup'>Sign Up Now</Form.Link>
                </Form.Text>
                <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}