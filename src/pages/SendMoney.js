import React, { useState, useEffect } from "react";
// import './App.css';
import Api from "../Api";
import Button from '@material-ui/core/Button';
import {
  auth,  writeAccount, writeOrder,readPrice, readOrder,readPayment
} from '../firebase.util';
const api = new Api();



function SendMoney() { // name, ordermoney, bankName, bankAccountNo, time, place 필요
  let name = "강원석";
  let ordermoney = null;
  let apiKey = "a37e455adcda4fc28c4dfa6e03ebde40";
  let bankName = "농협";
  let bankAccountNo = "3020923287081";

  let time = "9:00";
  let place = "긱취";
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        ordermoney=readPrice(auth.currentUser.uid);
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
    bankAccountNo
  };

  const [link, setLink] = useState(null);
  const [scheme, setScheme] = useState(null);
  const [send, setSend] = useState(null);
  const [check, setCheck] = useState(null);

  const onsetSend = () => {
    setSend(true);
  };

  useEffect(() => {
    pay(user);
  });

  const pay = (user) => {
    api.toss(user).then(res => {
      var Jsonres = JSON.parse(res);
      setLink(Jsonres.success.link);
      setScheme(Jsonres.success.scheme);
    });
  };

  return (
    <div className="App">
      <Button onClick={() => { readPrice(auth.currentUser.uid); }}>가격 불러오기</Button>
      <form>
        {send ?
        (
          <div>
            <h3>송금이 완료되었습니다.<br></br> {time}까지 {place}로 가면 <br></br>비밀친구와 함께 즐거운 야식타임을 즐기실 수 있습니다!</h3>
          </div>
        )
        :
        (
          <div>
            <h2>결제 요청</h2>
            {" "}
            <div style={{ border: "1px solid black", height: "140px"}}>
            <h3>
              {" "}
              {user.name} 님에게 {user.ordermoney}원을 송금하시겠습니까?{" "}
            </h3>
            
            토스 설치 후 버튼을 눌러 송금해주세요
            <p>
              <Button variant="contained" color = "primary" href={link}> 설치 </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained" color = "primary" href={scheme} onClick = {() => onsetSend()}> 송금 </Button>
            </p>
            </div>

            <div style={{ border: "1px solid black", height: "100px" }}>
              <h3>메뉴 선택으로 돌아가기</h3>
              <Button variant="contained" color = "primary" href="/home"> 돌아가기 </Button>
            </div>
          </div>
         )}
      </form>
    </div>
  );
}

export default SendMoney;