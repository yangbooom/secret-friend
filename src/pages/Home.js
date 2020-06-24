/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, writeAccount, writeOrder,
} from '../firebase.util';

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
      <h2>
        홈
      </h2>
      <Button onClick={() => { writeAccount(auth.currentUser.uid, '홍길동', 12345677, '국민은행'); }}>계좌설정하기</Button>
      <Button onClick={() => { writeOrder(auth.currentUser.uid, '네네치킨', '양념순살','202006262300', 2); }}>주문하기</Button>
      
{/* userID, brand, menu, time, foodNumber */}
    </div>
  );
};

export default Home;
