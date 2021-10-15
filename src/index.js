import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles'
import { FirebaseContext } from './context/firebase';
import App from './App'



const firebaseConfig = {

};


const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>  
  </>,
  document.getElementById('root')
)