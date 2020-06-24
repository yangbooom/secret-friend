import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, readOrder
} from '../firebase.util';


const Orders = () => {
  const a = readOrder();
  
  return(
     <Button onClick={() => {console.log(readOrder().then(res => res)) }}>결제정보 얻기</Button>
  )

};
export default Orders;
