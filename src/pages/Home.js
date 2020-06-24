import React from 'react';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from '../firebase.util';
import { ReactComponent as LoginImage } from '../img/login_image.svg';

const Home = () => (
  <div>
    <h2>
      홈
    </h2>
  </div>
);

export default Home;
