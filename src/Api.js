export default class Api {
  constructor() {
    this.BASE_URL = 'https://toss.im/transfer-web/linkgen-api/link';
    this.raw = {

    };
  }

  makeHeader() {
    return ({
      'Content-Type': 'application/json',
    });
  }

  getLink(amount) {
    return fetch(this.BASE_URL, {
      method: 'POST',
      headers: this.makeHeader(),
      body: {
        apiKey: 'e449748e546f4dfab7b3ce74d510accc',
        bankName: '카카오뱅크',
        bankAccountNo: '3333070047832',
        amount: `${amount}`,
        message: '비밀친구를 만나시겠습니까?',
      },
      redirect: 'follow',
    }).then((res) => res.json());
  }
}
