import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, writeAccount, writeOrder,readAccount, readOrder,readPayment
} from '../firebase.util';

const About = () => (
  <div>
    <h2>About</h2>
    <Button onClick={() => { writeAccount(auth.currentUser.uid, '홍길동', 12345677, '국민은행'); }}>계좌설정하기</Button>
    <Button onClick={() => { writeOrder(auth.currentUser.uid, 'chicken', '영범','202006262300', 2); }}>주문하기</Button>
    <Button onClick={() => { readAccount(auth.currentUser.uid); }}>계좌 불러오기</Button>
    <Button onClick={() => { readOrder('ratinol','202006262300'); }}>주문 불러오기</Button>
    <Button onClick={() => { readPayment('ratinol','202006262300'); }}>결제정보 얻기</Button>
  </div>
);

export default About;
