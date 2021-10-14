import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles'
import { FirebaseContext } from './context/firebase';


import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyBzofwEQ2PyfYVhc01O48iv_RyjH-LMpWc",
  authDomain: "netflix-hn.firebaseapp.com",
  databaseURL: "https://netflix-hn.firebaseio.com",
  projectId: "netflix-hn",
  storageBucket: "netflix-hn.appspot.com",
  messagingSenderId: "717939950831",
  appId: "1:717939950831:web:69017dc9ee65285500871a"
};


const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>  
  </>,
  document.getElementById('root')
)