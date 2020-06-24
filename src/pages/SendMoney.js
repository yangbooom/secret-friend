import React, { useState, useEffect } from 'react';
// import './App.css';

function SendMoney() {
  const place = '기숙사 취사실';

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, 4000);
  });

  return (
    <div className="App">
      <form>
        {check ? (
          <div>
            <h3 style={{ padding: '50px 0px' }}>
              {place}
              로 가면 비밀친구와 함께
              <br />
              즐거운 야식타임을 즐기실 수 있습니다!
            </h3>
            <img
              src="https://i.ibb.co/bWRCVDD/1-1.png"
              alt="chicken"
              width="350px"
            />
          </div>
        ) : (
          <div>
            <h3 style={{ padding: '50px 0px' }}>송금이 완료되었습니다.</h3>
            <img
              src="https://i.ibb.co/k5n60m5/1-2.png"
              alt="toss"
              width="350px"
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default SendMoney;
