/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from '@material-ui/core';
import { ReactComponent as LandingImage } from '../img/landing_image.svg';
import { ReactComponent as Logo } from '../img/logo.svg';
import {
  signInWithGoogle, auth, logout, writeUserData, uiLoader,
} from '../firebase.util';

const LandingPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "30px",
      position: "relative",
    }}
  >
    <LandingImage style={{ height: "400px" }} />
    <div style={{ flex: 1 }}>
      <h3>
        야식, 아직도 혼자먹니?
        <br />
        나의 야식 메이트 찾기,
      </h3>
    </div>

    <Logo style={{ width: "300px" }} />
    <br />
    <Button variant="contained" color="primary" >
      비밀친구 만들러 가기
    </Button>
  </div>
);

export default LandingPage;
