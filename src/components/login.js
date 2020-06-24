import React, { useState, useContext, Component } from "react";
import * as firebase from "firebase/app";
// import firebaseConfig from "../firebase.config";
import "firebase/auth";
import "firebase/firestore";
import { signInWithGoogle } from "../firebase.util"
// var firebase = require('firebase');

// var provider = new firebase.auth.GoogleAuthProvider();
class Login extends Component {
  // loginPress = () => {
  //   firebase.auth().signInwithPopup(provider).then(function(result){
  //     var token = result.credential.accessToken;
  //     var user = result.user;
  //   }).catch(function(error){
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     var email = error.email;
  //     var credential = error.credential;
  //   });
  // }
  
  render() {
    return(
    <button onClick={signInWithGoogle}>login</button>

    )
  }
  
}

export default Login;