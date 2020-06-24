/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
// import './App.css';
import Button from '@material-ui/core/Button';
import api from '../Api';
import {
  auth, writeAccount, writeOrder, readPrice, readOrder, readPayment,
} from '../firebase.util';
// const api = toss();

function SendMoney() { // name, ordermoney, bankName, bankAccountNo, time, place 필요
  const name = '강원석';
  let ordermoney = null;
  const apiKey = 'a37e455adcda4fc28c4dfa6e03ebde40';
  const bankName = '농협';
  const bankAccountNo = '3020923287081';

  const time = '9:00';

  const place = '기숙사 취사실';

  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        ordermoney = readPrice(auth.currentUser.uid);
        // console.log('log in with', user.email);
      }
      console.log(auth.currentUser);
      // return (validation);
      // setValidation(false);
    });
  };

  const user = {
    name,
    ordermoney,
    apiKey,
    bankName,
    bankAccountNo,
  };

  const [link, setLink] = useState(null);
  const [scheme, setScheme] = useState(null);
  const [send, setSend] = useState(null);
  const [check, setCheck] = useState(null);

  const onsetSend = () => {
    setSend(true);
  };

  // useEffect(() => {
  //   pay(user);
  // });

  // const pay = (user) => {
  //   api.toss(user).then(res => {
  //     var Jsonres = JSON.parse(res);
  //     setLink(Jsonres.success.link);
  //     setScheme(Jsonres.success.scheme);
  //   });
  // };

  return (
    <div className="App">

      {/* <Button onClick={() => { readPrice(auth.currentUser.uid); }}>가격 불러오기</Button> */}
      <form>
        {send
          ? (
            <div style={{}}>
              <h3 style={{ padding: '50px 0px' }}>
                송금이 완료되었습니다.
                <br />
                <br />
                {' '}
                {time}
                까지
                {' '}
                {place}
                로 가면
                {' '}
                <br />
                비밀친구와 함께 즐거운 야식타임을 즐기실 수 있습니다!
              </h3>
              <img src="https://i.ibb.co/bWRCVDD/1-1.png" alt="chicken" width="400px" />
              ;

            </div>
          )
          : (
            <div>
              <h2>결제 요청</h2>
              {' '}
              <div style={{ border: '1px solid black', height: '300px' }}>
                <h3>
                  {' '}
                  {user.name}
                  님께
                  {user.ordermoney}
                  원을
                  <br />
                  송금하시겠습니까?
                  {' '}
                </h3>

                <img src="https://i.ibb.co/k5n60m5/1-2.png" alt="toss" width="100px" />
                <p>
                  토스 앱 설치 후 송금 버튼을 눌러주세요
                </p>
                <p>
                  <Button variant="contained" color="primary" href={link}> 설치 </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="contained" color="primary" href={scheme} onClick={() => onsetSend()}> 송금 </Button>
                </p>
              </div>

              <div style={{ border: '1px solid black', height: '120px' }}>
                <h3>메뉴 선택으로 돌아가기</h3>
                <Button variant="contained" color="primary" href="/home"> 돌아가기 </Button>
              </div>
            </div>
          )}
      </form>
    </div>
  );
}

export default SendMoney;
