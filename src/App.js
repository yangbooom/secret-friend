/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from './firebase.util';
// import LoginModule from './LoginModule';
// import styles from './styles';
// firebase.initializeApp(firebaseConfig)

function App() {
  const [validation, setValidation] = useState(null);
  const user = auth.currentUser;
  console.log(auth.currentUser);
  uiLoader('firebaseui-auth-container');
  const name = 'hello';
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setValidation(true);
        // console.log('log in with', user.email);
        // return
        // return <div><button onClick={writeUserData(user.email, name)}>change</button></div>;
      } else {
        setValidation(false);
      }
      console.log(auth.currentUser);
      // return (validation);
      // setValidation(false);

    // // return (
    //   <div>
    //     <h1> 로그인 하셔야 합니다. </h1>
    //     <button onClick={signInWithGoogle}>Login</button>
    //   </div>
    // );
    });
  };

  // window.recaptchaVerifier = new auth.RecaptchaVerifier('phone-login', {
  //   size: 'invisible',
  //   callback(response) {
  //   // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onSignInSubmit();
  //   },
  // });

  useEffect(() => {
  }, [validation]);

  return (
    <div className="App">
      {/* <button onClick={signInWithGoogle}>Login</button> */}
      {/* {loginCheck} */}
      {auth.currentUser !== null ? (
        <div>
          <button id="submit" onClick={writeUserData(user.email, name)}>submit</button>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h1> 로그인 하셔야 합니다. </h1>
          <button onClick={() => {
            signInWithGoogle();
            loginCheck();
          }}
          >
            Login
          </button>
          {/* <LoginModule/> */}
          <button onClick={loginCheck}>LoginCheck</button>
          <div id="firebaseui-auth-container" />
        </div>
      )}
    </div>
  );
}

export default App;
