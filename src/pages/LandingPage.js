import React from 'react';
import { ReactComponent as LandingImage } from '../img/landing_image.svg';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from '../firebase.util';

const LandingPage = () => (
  <div style={{'text-align': 'center', 'marginTop': '50px'}}>
    <LandingImage style={{height: '500px' ,}}/>
    <h3></h3>
  </div>
);

export default LandingPage;
