import React, { Component } from 'react';
import {Button, Select} from '@material-ui/core';
import {
  auth, writeOrder
} from '../../firebase.util';
import api from '../../Api.js'

class RatinolMenu extends Component {
  
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
        message: '한국비밀친구만남요청',
      }),
      redirect: 'follow',
    }).then((res) => res.json());
  }



    state = {
        ddeok: 0,
        kimbab: 0,
        intestine: 0,
        orderQuantity: 0,
        totalCost: 0,
        pickedTime: null
    }

    
    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "ddeok") {
            this.setState({
                [name] : this.state.ddeok + 1,
                totalCost: this.state.totalCost + 4500,
            })
        } else if(name === "kimbab") {
            this.setState ({
                [name] : this.state.kimbab + 1,
                totalCost: this.state.totalCost + 4000
            })
        }else if(name === "intestine") {
            this.setState ({
                [name] : this.state.intestine + 1,
                totalCost: this.state.totalCost + 4500
        })
    }

      this.setState({
          orderQuantity: this.state.orderQuantity + 1
      })
    }
    
handleDecrease = (e) => {
    const {ddeok, kimbab, intestine, orderQuantity} = this.state;

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "ddeok") {
        if(ddeok == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.ddeok - 1,
            totalCost: this.state.totalCost - 4500
        })
    }else if(name === "kimbab") {
        if(kimbab == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.kimbab - 1,
            totalCost: this.state.totalCost - 4000
        })
    }else if(name === "intestine") {
        if(intestine == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.intestine - 1,
            totalCost: this.state.totalCost - 4500
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

        const {ddeok, kimbab, intestine, totalCost, pickedTime} =this.state;

        const makeOrder = () => {
          writeOrder('Nox9260J7pZaZY2IpVu7OKIKigB2', 'ratinol', pickedTime, totalCost)
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
                <h3>먹고 싶은 분식 메뉴를 선택하세요</h3>
                <ul>
                    <div style={styles.menu}>
                        떡볶이 4500원 {' '}
                        <span>{ddeok}개</span>{' '}
                        
                          <button onClick={this.handleIncrease} name="ddeok"> + </button>
                          <button onClick={this.handleDecrease} name="ddeok"> - </button>
                        

                    </div>
                    <div style={styles.menu}>
                        김밥 4000원{' '}
                        <span>{kimbab}개</span>{' '}
                          <button onClick={this.handleIncrease} name="kimbab"> + </button>
                          <button onClick={this.handleDecrease} name="kimbab"> - </button>

                    </div>
                    <div style={styles.menu}>
                        순대 4500원{' '}
                        <span>{intestine}개</span>{' '}

                          <button onClick={this.handleIncrease} name="intestine"> + </button>
                          <button onClick={this.handleDecrease} name="intestine"> - </button>

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

export default RatinolMenu;
