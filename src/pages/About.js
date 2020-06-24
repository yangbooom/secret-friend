import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, writeAccount, writeOrder,readPrice, readOrder,readPayment
} from '../firebase.util';

const About = () => (
  <div>
    <h2>About</h2>
    <Button onClick={() => { writeAccount(auth.currentUser.uid, '홍길동', 12345677, '국민은행'); }}>계좌설정하기</Button>
    <Button onClick={() => { writeOrder(auth.currentUser.uid, 'ratinol','202006262300', 12500); }}>주문하기</Button>
    <Button onClick={() => { readPrice(auth.currentUser.uid); }}>가격 불러오기</Button>
    <Button onClick={() => { readOrder('ratinol','202006262300'); }}>주문 불러오기</Button>
    <Button onClick={() => { readPayment('ratinol','202006262300', auth.currentUser.uid); }}>결제정보 얻기</Button>
  </div>
);

export default About;
