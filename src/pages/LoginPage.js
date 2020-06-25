/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, Components } from 'react';
import '../styles/loginPage.css';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from '../firebase.util';
import { ReactComponent as LoginImage } from '../img/login_image.svg';

function LoginPage() {
  const [validation, setValidation] = useState(null);
  const user = auth.currentUser;
  console.log(auth.currentUser);
  uiLoader('firebaseui-auth-container');
  // const name = 'hello';
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setValidation(true);
        document.location.href='/home'
        // console.log('log in with', user.email);
      } else {
        setValidation(false);
      }
      console.log(auth.currentUser);
      // return (validation);
      // setValidation(false);
    });
  };

  useEffect(() => {
    loginCheck();
  }, [validation]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '30px',
      position: 'relative',
    }}>
      <h1>
        나랑..
        <del>야식</del>
        비밀친구 할래?
      </h1>
      <LoginImage style={{ width: '250px', padding: 30 }} />
      <div id="firebaseui-auth-container" />
      {/* <button onClick={signInWithGoogle}>Login</button> */}
      {loginCheck}
      {auth.currentUser !== null ? (
        <div>
          {/* <button id="submit" onClick={writeUserData(user.email, name)}>submit</button>
          <button onClick={()=> console.log(user,name)}>submit</button>
          <button onClick={logout}>logout</button> */}
        </div>
      ) : (
        <div>
          {/* <h1> 로그인 하셔야 합니다. </h1> */}
          {/* <button onClick={() => {
          signInWithGoogle();
          loginCheck();
        }}
        >
          Login
        </button> */}
          {/* <LoginModule/> */}
          {/* <button onClick={loginCheck}>LoginCheck</button> */}

        </div>
      )}
    </div>
  );
}

export default LoginPage;
