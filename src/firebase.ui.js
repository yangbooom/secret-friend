// import * as firebaseui from 'firebaseui';
// import {
//   auth, phoneProvider
// } from './firebase.util';
// const uiConfig = {
//   signInSuccessUrl: 'www.google.com',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     // firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     phoneProvider(),
//     // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   // tosUrl and privacyPolicyUrl accept either url string or a callback
//   // function.
//   // Terms of service url/callback.
//   tosUrl: 'www.google.com',
//   // Privacy policy url/callback.
//   privacyPolicyUrl() {
//     window.location.assign('www.google.lcom');
//   },
// };

// const ui = new firebaseui.auth.AuthUI(auth());
// // The start method will wait until the DOM is loaded.
// const LoginHandler = ui.start('#firebaseui-auth-container', uiConfig);
// export default LoginHandler;