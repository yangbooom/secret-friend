import React, { useState } from "react";
// import './App.css';
import Api from "../Api";
const api = new Api();

function SendMoney() {
  let name = "강원석";
  let ordermoney = 1000;
  let apiKey = "a37e455adcda4fc28c4dfa6e03ebde40";
  let bankName = "농협은행";
  let bankAccountNo = "3020923287081";

  const [user, setUser] = useState(null);
  const [link, setLink] = useState(null);
  const [send, setSend] = useState(null);

  const onsetUser = () => {
    setUser({
      name,
      ordermoney,
      apiKey,
      bankName,
      bankAccountNo
    });
  };

  const onsetSend = () => {
    setSend(true);
  };

  const pay = user => {
    api.toss(user).then(res => {
      var Jsonres = JSON.parse(res);
      setLink(Jsonres.success.scheme);

      console.log(user);
      console.log(Jsonres);
      console.log(link);

      onsetSend();
    });
  };

  return (
    <div className="App">
      <h2>결제 요청</h2>
      <div style={{ border: "1px solid black" }}>
        <form>
          {user ? (
            <div>
              {" "}
              <h3>
                {" "}
                {user.name} 님에게 {user.ordermoney}원을 송금하시겠습니까?{" "}
              </h3>
              <input type="submit" value="확인" onClick={pay(user)} />
            </div>
          ) : (
            <div>
              <input type="submit" value="user" onClick={onsetUser} />
            </div>
          )}
        </form>

        <form>
          {link ? (
            <div>
              토스 설치 후 <a href={link}>여기</a>에서 송금해주세요
            </div>
          ) : (
            <div>
              <h3> link = null </h3>
            </div>
          )}
        </form>
      </div>

      <div style={{ border: "1px solid black" }}>
        <h3>메뉴 선택으로 돌아가기</h3>
        <form>
          <input type="submit" value="돌아가기" onClick={null} />
        </form>
      </div>

      <form>
        {send ? (
          <div>
            <input type="submit" value="확인" onClick={null} />
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default SendMoney;