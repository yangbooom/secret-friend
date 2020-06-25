import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  auth, readOrder,
} from '../firebase.util';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Orders = () => {
  // const [orderList, setOrderList] = useState([])
  const [orders, setOrders] = useState([]);
  // let orders = [];
  const loadOrdersList = () => readOrder();

  loadOrdersList()
    .then((res) => setOrders((Object.values(res))));

  const mapOrderList = (orderArray) => (
    // <p>fjfjfj</p>
    orderArray.map((element) => <p>{element[0]}</p>)
  );

  const orderValue = () => (orders);

  useEffect(() => {
    loadOrdersList();
  }, [orders]);
  // const
  // useEffect(() => {

  // }, [orders]);

  return (
    <div>
      {/* <SimpleCard/> */}
      {/* {orders !== null ? SimpleCard(order): <div></div>} */}
      {/* <li>
      {orders.map((order)=>(
        <ul>
        {order[0]}
        </ul>
      ))}
      </li> */}
      {/* <Button onClick={() => { console.log(orders); }}>결제정보 얻기</Button> */}
      {/* {orders?
      <div>
        {orders.map()
      </div>:
} */}
      {/* <List className={classes.chatListSection}> */}
      <li style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '30px',
        position: 'relative',
      }}
      >

        {orders
          //
          ? (
            <div>
              {orders.map((order) => (
                <div>
                  <Card>
                    <ul>
                      주문자: {order[0]}
                    </ul>
                    <ul>
                      가격: {order[1]}
                    </ul>
                    <ul>
                      메뉴: {order[2]}
                    </ul>
                  </Card>

                  < Divider/>
                </div>
                // </li>
              ))}

              .
              {/* </ListItem> */}
              {/* if(orders */}
            </div>
          )

        // </ul>
          : <ul>주문이 없습니다.</ul>}
      </li>
      {/* </List> */}

    </div>
  );
};
export default Orders;
