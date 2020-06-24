/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Content from '../components/Content';
import StoreList from '../components/StoreList'
import {
  auth, writeOrder
} from '../firebase.util';

const Home = () => {
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // setValidation(true);
        // document.location.href='/home'
        // console.log('log in with', user.email);
      } else {
        // setValidation(false);
        document.location.href='/login'
      }
      console.log(auth.currentUser);
      // return (validation);
      // setValidation(false);
    });
  };

  return (
    <div>
      <div>
      <StoreList />
      </div>
      <div style={{marginTop:"150px"}}>
      <Content />
      </div>
    </div>
  );
};

export default Home;
