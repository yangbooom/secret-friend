import React, { Component } from 'react';
import {Button, Select} from '@material-ui/core';
import {
  auth, writeOrder
} from '../../firebase.util';
// import api from '../../Api.js'

class ChineseMenu extends Component {
  loginCheck() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // setValidation(true);
        // document.location.href='/home'
        // console.log('log in with', user.email);
      } else {
        // setValidation(false);
        document.location.href='/login'
      }
      console.log(auth.currentUser);
      // return (validation);
      // setValidation(false);
    });
  };
    
  link ='';
  scheme='';
  BASE_URL = 'https://toss.im/transfer-web/linkgen-api/link';


  makeHeader() {
    return ({
      'Content-Type': 'application/json',
    });
  }

  getLink(amount) {
    return fetch(this.BASE_URL, {
      method: 'POST',
      headers: this.makeHeader(),
      body: JSON.stringify({
        apiKey: 'e449748e546f4dfab7b3ce74d510accc',
        bankName: '카카오뱅크',
        bankAccountNo: '3333070047832',
        amount: `${amount}`,
        message: '중국비밀친구만남요청',
      }),
      redirect: 'follow',
    }).then((res) => res.json());
  }

    state = {
        zazang: 0,
        zambong: 0,
        friedrice: 0,
        orderQuantity: 0,
        totalCost: 0,
        pickedTime: '21:00',
    }

    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "zazang") {
            this.setState({
                [name] : this.state.zazang + 1,
                totalCost: this.state.totalCost + 5500,
            })
        } else if(name === "zambong") {
            this.setState ({
                [name] : this.state.zambong + 1,
                totalCost: this.state.totalCost + 6500
            })
        }else if(name === "friedrice") {
            this.setState ({
                [name] : this.state.friedrice + 1,
                totalCost: this.state.totalCost + 7000
        })
    }

    this.setState({
        orderQuantity: this.state.orderQuantity + 1
    })
}
    
handleDecrease = (e) => {
    const {zazang, zambong, friedrice, orderQuantity} = this.state;
    const time="202006262400"

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "zazang") {
        if(zazang == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.zazang - 1,
            totalCost: this.state.totalCost - 5500
        })
    }else if(name === "zambong") {
        if(zambong == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.zambong - 1,
            totalCost: this.state.totalCost - 6500
        })
    }else if(name === "friedrice") {
        if(friedrice == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.friedrice - 1,
            totalCost: this.state.totalCost - 7000
        })
    }
    this.setState({
        orderQuantity: this.state.orderQuantity - 1
    })
    
}
    
  handleChange = (e) => {
    this.setState(
      { 
        pickedTime: e.target.value
      }
    );  
  }

    render() {
        this.loginCheck()
        const {zazang, zambong, friedrice, totalCost, pickedTime} =this.state;

        const makeOrder = () => {
          writeOrder(auth.currentUser.uid, 'chinese', pickedTime, totalCost)
          this.getLink(totalCost)
            .then(res=> {
              this.link = res.success.link;
              this.scheme = res.success.scheme;
              window.open(this.link);
              setTimeout(() => {
                document.location.href='/sendmoney'
              }, 1000);
              // console.log(this.link, this.scheme)
            })
        }

        return (
          <div>
            <h3 style={{textAlign:'center'}}>시간을 선택하세요</h3>
            <div style={{display:'flex', justifyContent:'center'}}> 
            <Select native value={pickedTime} onChange={this.handleChange}>
                <option value='21:00'>21:00</option>
                <option value='22:00'>22:00</option>
                <option value='23:00'>23:00</option>
                <option value='24:00'>24:00</option>
              </Select>       
            </div>
            <div style={{textAlign:"center", marginTop:"30px"}}>
                <h3>먹고 싶은 중국집 메뉴를 선택하세요</h3>
                <ul>
                    <div style={styles.menu}>
                        짜장면 5500원 {' '}
                        <span>{zazang}개</span>{' '}
                        <button onClick={this.handleIncrease} name="zazang"> + </button>
                        <button onClick={this.handleDecrease} name="zazang"> - </button>
                    </div>
                    <div style={styles.menu}>
                        짬뽕 6500원{' '}
                        <span>{zambong}개</span>{' '}
                        <button onClick={this.handleIncrease} name="zambong"> + </button>
                        <button onClick={this.handleDecrease} name="zambong"> - </button>
                    </div>
                    <div style={styles.menu}>
                        볶음밥 7000원{' '}
                        <span>{friedrice}개</span>{' '}
                        <button onClick={this.handleIncrease} name="friedrice"> + </button>
                        <button onClick={this.handleDecrease} name="friedrice"> - </button>
                    </div>
                </ul>
                <h4>총합: {this.state.totalCost}원</h4>
                <h5>총 주문량: {this.state.orderQuantity}개</h5>
                <div>
                 <Button variant="outlined" 
                          onClick={makeOrder} >
                          결제하기
                  </Button>
     
                </div>
            </div>
          </div>
        );
    }
}

const styles = {};

styles.menu = {
  textAlign: 'center',
  marginTop: '10px'
};

export default ChineseMenu;
