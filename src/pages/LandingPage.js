/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { ReactComponent as LandingImage } from '../img/landing_image.svg';
import { ReactComponent as Logo } from '../img/logo.svg';

const LandingPage = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '30px',
      position: 'relative',
    }}
  >
    <LandingImage style={{ height: '400px', marginBottom: '50px' }} />
    <div style={{ flex: 1 }}>
      <h3>
        야식, 아직도 혼자먹니?
        <br />
        나의 야식 메이트 찾기,
      </h3>
    </div>

    <Logo style={{ width: '300px', marginBottom: '50px' }} />
    <br />
    <Button variant="contained" color="primary" href="/login">
      비밀친구 만들러 가기
    </Button>
  </div>
);

export default LandingPage;
