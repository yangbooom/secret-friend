
import React, { Component } from 'react';
import {Button, Select} from '@material-ui/core';
import {
  auth, writeOrder
} from '../../firebase.util';
import api from '../../Api.js'

class CobacoMenu extends Component {
    
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
        message: '일본비밀친구만남요청',
      }),
      redirect: 'follow',
    }).then((res) => res.json());
  }
    state = {
        ross: 0,
        fish: 0,
        shrimp: 0,
        orderQuantity: 0,
        totalCost: 0,
        pickedTime: null
    }

    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "ross") {
            this.setState({
                [name] : this.state.ross + 1,
                totalCost: this.state.totalCost + 8000,
            })
        } else if(name === "fish") {
            this.setState ({
                [name] : this.state.fish + 1,
                totalCost: this.state.totalCost + 8500
            })
        }else if(name === "shrimp") {
            this.setState ({
                [name] : this.state.shrimp + 1,
                totalCost: this.state.totalCost + 8500
        })
    }

    this.setState({
        orderQuantity: this.state.orderQuantity + 1
    })
}
    
handleDecrease = (e) => {
    const {ross, fish, shrimp, orderQuantity} = this.state;

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "ross") {
        if(ross == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.ross - 1,
            totalCost: this.state.totalCost - 8000
        })
    }else if(name === "fish") {
        if(fish == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.fish - 1,
            totalCost: this.state.totalCost - 8500
        })
    }else if(name === "shrimp") {
        if(shrimp == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.shrimp - 1,
            totalCost: this.state.totalCost - 8500
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
        const {ross, fish, shrimp,totalCost, pickedTime} =this.state;

        const makeOrder = () => {
          writeOrder(auth.currentUser.uid, 'cobaco', pickedTime, totalCost)
          this.getLink(totalCost)
            .then(res=> {
              this.link = res.success.link;
              this.scheme = res.success.scheme;
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
                <h3>먹고 싶은 돈까스 메뉴를 선택하세요</h3>
                <ul>
                    <div style={styles.menu}>
                        로스가스 8000원{' '}
                        <span>{ross}개</span>{' '}
                        <button onClick={this.handleIncrease} name="ross"> + </button>
                        <button onClick={this.handleDecrease} name="ross"> - </button>
                    </div>
                    <div style={styles.menu}>
                        생선가스 8500원{' '}
                        <span>{fish}개</span>{' '}
                        <button onClick={this.handleIncrease} name="fish"> + </button>
                        <button onClick={this.handleDecrease} name="fish"> - </button>
                    </div>
                    <div style={styles.menu}>
                        새우돈가스 6000원{' '}
                        <span>{shrimp}개</span>{' '}
                        <button onClick={this.handleIncrease} name="shrimp"> + </button>
                        <button onClick={this.handleDecrease} name="shrimp"> - </button>
                    </div>
                </ul>
                <h4>총합: {this.state.totalCost}원</h4>
                <h5>총 주문량: {this.state.orderQuantity}개</h5>
                <div>
                  <Button variant="outlined" 
                          onClick={makeOrder} href={this.scheme} >
                          주문하기
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

export default CobacoMenu;
