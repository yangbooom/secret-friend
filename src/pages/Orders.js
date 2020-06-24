import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {
  auth, readOrder,
} from '../firebase.util';

const Orders = () => {
  // const [orderList, setOrderList] = useState([])
  let orders = []
  const loadOrdersList = () => readOrder()
    .then((res) => orders=(Object.values(res)));
  loadOrdersList();

  const mapOrderList = (orderList) => {
    return(
      <div>
      {orderList.map((order)=><p>order[0]</p>)}
      </div>
    )
  }

  return (
    <div>
      {/* <li>
      {orders.map((order)=>(
        <ul>
        {order[0]}
        </ul>
      ))}
      </li> */}
      <Button onClick={() => { orders.map((order) => console.log(order[0]))}}>결제정보 얻기</Button>
      
    </div>
  );
};
export default Orders;
