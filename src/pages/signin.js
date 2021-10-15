import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form'
import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';


export default function SignIn(){
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || email === '';

    const handleSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() =>{
                setEmail('');
                setPassword('')
                setError('')
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => setError(error.message))
    }


    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
                <Form.Base onSubmit={handleSignin} method="POST">
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
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}