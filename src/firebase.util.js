import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
// var firebaseui = require('firebaseui');
import * as firebaseui from 'firebaseui';
import firebaseConfig from 'firebase.config';
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'kr';

// login 관련
export const auth = firebase.auth();

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const uiConfig = {
  signInSuccessUrl: 'home',
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'invisible', // 'invisible' or 'compact'
        badge: 'bottomright', // ' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'KR',
    },
  ],

  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  // tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  // privacyPolicyUrl() {
  //   window.location.assign('<your-privacy-policy-url>');
  // },
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
export function uiLoader(uiContainerID) { ui.start(`#${uiContainerID}`, uiConfig); }
export const logout = () => firebase.auth().signOut();

// 데이터베이스 관련
export const firestore = firebase.firestore();
export const database = firebase.database();
export function writeUserData(userID, name) {
  console.log(userID, name);
  firebase.database().ref('users/').push({
    username: name,
    ID: userID,
  });
}

export function writeAccount(userID, name, accountNumber, bankName) {
  firebase.database().ref(`users/${userID}`).set({
    ID: userID,
    name,
    accountNumber,
    bankName,
  });
  console.log(userID);
}

export function writeOrder(userID, brand, time, price) {
  firebase.database().ref(`users/${userID}`).set({
    ID: userID,
    // menu,
    brand,
    time,
    // foodNumber,
    price,
  });
}

// export function writeOrder(userID, brand, time, price) {
//   firebase.database().ref(`orders/${brand}${time}/${userID}`).push({
//     ID: userID,
//     // menu,
//     brand,
//     time,
//     // foodNumber,
//     price,
//   });
// }

export function readPrice(userID) {
  // const row = [];
  // const a = firebase.database().ref('users/'+userID).once('value');
  return firebase.database().ref(`users/${userID}`).once('value')
    .then((snapshot) =>
      // row.push(snapshot.val());
      snapshot.val().price);
  // console.log(Object.values()
  // return (row);
}

export function readOrder() {
  const orders = [];
  return firebase.database().ref('users').once('value')
    .then((snapshot) => {
      // row.push(snapshot.val());
      // console.log(snapshot.val(),111);
      snapshot.forEach((user)=> {
        orders.push([user.val().ID, user.val().price, user.val().brand])
      })
    })
    .then(()=> orders);
}

// export async function readOrder(brand, time) {
//   let orders = [];
//   firebase.database().ref(`orders/${brand}${time}`).once('value')
//     .then((snapshot) => snapshot.val())
//     .then((res) => Object.values(res))
//     .then((res) => {
//       orders = res;}
//       );
//     //   snapshot.forEach((child) => {
//     //     orders= (Object.values(child.val()));
//     //     console.log(Object.values(child.val()))
//     //   });
//     // });
//   console.log(orders,11);
//   return (orders);
// }

export function readPayment(brand, time, userID) {
  const orders = readOrder(brand, time);
  // console.log('orders', orders)
  orders.forEach((order) => {
    console.log('1');
  });
  // const {ID, brand_, time_, price} = orders;
}

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.
