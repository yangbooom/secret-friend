import React, { useState, useEffect } from "react";
// import './App.css';
import Api from "../Api";
import Button from '@material-ui/core/Button';
const api = new Api();

function SendMoney() { // name, ordermoney, bankName, bankAccountNo, time, place 필요
  let name = "강원석";
  let ordermoney = 1000;
  let apiKey = "a37e455adcda4fc28c4dfa6e03ebde40";
  let bankName = "농협";
  let bankAccountNo = "3020923287081";

  let time = "9:00";
<<<<<<< Updated upstream
  let place = "긱취";
=======
  let place = "기숙사 취사실";
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
      {/* <Button onClick={() => { readPrice(auth.currentUser.uid); }}>가격 불러오기</Button> */}
>>>>>>> Stashed changes
      <form>
        {send ?
        (
          <div style = {{}}>
            <h3 style = {{padding: "50px 0px"}}>송금이 완료되었습니다.<br></br><br></br> {time}까지 {place}로 가면 <br></br>비밀친구와 함께 즐거운 야식타임을 즐기실 수 있습니다!</h3>
            <img src= "https://i.ibb.co/bWRCVDD/1-1.png" alt ="chicken" width ="400px"></img>;
          
          </div>
        )
        :
        (
          <div>
            <h2>결제 요청</h2>
            {" "}
            <div style={{ border: "1px solid black", height: "300px"}}>
            <h3>
              {" "}
              {user.name}님께 {user.ordermoney}원을 <br></br>송금하시겠습니까?{" "}
            </h3>

            <img src = "https://i.ibb.co/k5n60m5/1-2.png" alt = "toss" width="100px"></img>
            <p>
            토스 앱 설치 후 송금 버튼을 눌러주세요
            </p>
            <p>
              <Button variant="contained" color = "primary" href={link}> 설치 </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained" color = "primary" href={scheme} onClick = {() => onsetSend()}> 송금 </Button>
            </p>
            </div>

            <div style={{ border: "1px solid black", height: "120px" }}>
              <h3>메뉴 선택으로 돌아가기</h3>
              <Button variant="contained" color = "primary" onClick = {null}> 돌아가기 </Button>
            </div>
          </div>
         )}
      </form>
    </div>
  );
}

export default SendMoney;