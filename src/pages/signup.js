import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form';
import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';


export default function Signup(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = username ==='' || password === '' || email === '';

    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: username,
                    photoURL: Math.floor(Math.random() * 5 ) + 1,
                })
                .then(() => {
                    setEmail('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.BROWSE);
                })
            ).catch((error) => setError(error.message));

    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input 
                        placeholder = 'Username '
                        value = {username}
                        onChange = {(event) => setUserName(event.target.value) }
                    />
                    <Form.Input 
                        placeholder = 'Email address'
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
                    <Form.Submit disabled={isInvalid} type="submit" >Sign up</Form.Submit>

                    <Form.Text>
                        Already in Netflix? <Form.Link to='/signin'>Sign In Now</Form.Link>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}