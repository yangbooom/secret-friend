/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Content from '../components/Content';
import StoreList from '../components/StoreList'

const Home = () => {

  return (
    <div>
      <div>
      <StoreList />
      </div>
      <div style={{marginTop:"150px"}}>
      <Content />
      </div>
    </div>
  );
};

export default Home;
