const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const toss = async (amount) => {
  let link = '';
  let scheme = '';
  const raw = {
    apiKey: 'e449748e546f4dfab7b3ce74d510accc',
    bankName: '카카오뱅크',
    bankAccountNo: '3333070047832',
    amount,
    message: '비밀친구를 만나시겠습니까?',
  };

  const JSONraw = JSON.stringify(raw);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSONraw,
    redirect: 'follow',
  };

  await fetch('https://toss.im/transfer-web/linkgen-api/link', requestOptions)
    .then((res) => res.json())
    .then((res) => {
      scheme = res.success.scheme;
      link = res.success.res;
      return (scheme, link);
    });
};

// .then((res) => {
//   link = res.success.link;
//   scheme = res.success.scheme;
// });

// export toss();
