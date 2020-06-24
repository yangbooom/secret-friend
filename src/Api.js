var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = {
  apiKey: "dcf102a946024eafb1c3d61cbdba3c47",
  bankName: "기업",
  bankAccountNo: "21604828802016",
  amount: 15000,
  message: "aaaaaa???"
};

export default class Api {
  toss(user) {
    raw.bankName = user.bankName;
    raw.bankAccountNo = user.bankAccountNo;
    raw.amount = user.ordermoney;
    raw.bankName = user.bankName;

    var JSONraw = JSON.stringify(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONraw,
      redirect: "follow"
    };

    return fetch(
      "https://toss.im/transfer-web/linkgen-api/link",
      requestOptions
    ).then(response => response.text());
  }
}