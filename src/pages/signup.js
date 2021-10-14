import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form'
import { useState } from "react"


export default function SignIn(){
    const [error, setError] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = username ==='' | password === '' | email === '';

    const handleSignup = (event) => {
        event.preventDefault()

    }


    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
                <Form.Base onSubmit={handleSignup}></Form.Base>
                <Form.Input 
                    placeholder = 'Username '
                    value = {username}
                    onChange = {(event) => setUserName(event.target.value) }
                />
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
                    Already in Netflix? <Form.Link to='/signin'>Sign In Now</Form.Link>
                </Form.Text>
                <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}