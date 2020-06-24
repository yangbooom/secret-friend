/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, writeAccount, writeOrder,
} from '../firebase.util';
import Content from '../content'
import StoreList from '../storeList';

const Home = () => {
  const [validation, setValidation] = useState(null);
  const user = auth.currentUser;
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setValidation(true);
        // console.log('log in with', user.email);
      } else {
        setValidation(false);
      }
    });
  };
  
      return (
        <div>
          <StoreList />
          <Content />
        </div>
      );
  }


export default Home;
