const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const toss = (amount) => {
  // let link = '';
  // let scheme = '';
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

  const [link, scheme] = fetch('https://toss.im/transfer-web/linkgen-api/link', requestOptions)
    .then((res) => res.json())
    .then((res) => [res.success.scheme, res.success.link]);
    // .then((res) => {
    //   link = res.success.link;
    //   scheme = res.success.scheme;
    // });

  return (link, scheme);
};

// export toss;
