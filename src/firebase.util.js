import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
// var firebaseui = require('firebaseui');
import * as firebaseui from 'firebaseui';
import firebaseConfig from './firebase.config';
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'kr';

// login 관련
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const logout = () => firebase.auth().signOut();
const uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl() {
    window.location.assign('<your-privacy-policy-url>');
  },
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
export function uiLoader(uiContainerID) { ui.start(`#${uiContainerID}`, uiConfig); }





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

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.
