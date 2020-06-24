import React from 'react';
import { ReactComponent as LandingImage } from '../img/landing_image.svg';
import { ReactComponent as Logo } from '../img/logo.svg';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from '../firebase.util';

const LandingPage = () => (
  <div style={{'text-align': 'center', 'marginTop': '50px'}}>
    <LandingImage style={{height: '500px' ,}}/>
    <h3>야식, 아직도 혼자먹니?<br/>나의 야식 메이트 찾기,</h3>
    <Logo style={{width: '300px'}}/>
  </div>
);

export default LandingPage;
