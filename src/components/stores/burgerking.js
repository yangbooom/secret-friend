import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {
  auth, writeOrder
} from '../../firebase.util';
// import Select from 'react-select'
import toss from '../../Api.js'

class BurgerKingMenu extends Component {
    state = {
        mushroom: 0,
        tongshrimp: 0,
        steak: 0,
        orderQuantity: 0,
        totalCost: 0,
        pickedTime: null
    }

    options = [
      { value: '21:00', label: '21:00' },
      { value: '22:00', label: '22:00' },
      { value: '23:00', label: '23:00' },
      { value: '24:00', label: '24:00' }
    ]
    
    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "mushroom") {
            this.setState({
                [name] : this.state.mushroom + 1,
                totalCost: this.state.totalCost + 8300,
            })
        } else if(name === "tongshrimp") {
            this.setState ({
                [name] : this.state.tongshrimp + 1,
                totalCost: this.state.totalCost + 8900
            })
        }else if(name === "steak") {
            this.setState ({
                [name] : this.state.steak + 1,
                totalCost: this.state.totalCost + 9300
        })
    }

    this.setState({
        orderQuantity: this.state.orderQuantity + 1
    })
}
    
  handleDecrease = (e) => {
    const {mushroom, tongshrimp, steak, orderQuantity} = this.state;

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "mushroom") {
        if(mushroom == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.mushroom - 1,
            totalCost: this.state.totalCost - 8300
        })
    }else if(name === "tongshrimp") {
        if(tongshrimp == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.tongshrimp - 1,
            totalCost: this.state.totalCost - 8900
        })
    }else if(name === "steak") {
        if(steak == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.steak - 1,
            totalCost: this.state.totalCost - 9300
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
        const {mushroom, tongshrimp, steak, totalCost, pickedTime} =this.state;

        const makeOrder = () => {
          writeOrder('Nox9260J7pZaZY2IpVu7OKIKigB2', 'burgerking', pickedTime, totalCost)
          const {a,b}= toss(totalCost)
          console.log(a,b)
        }

        return (
          <div>
            <h3 style={{textAlign:'center'}}>시간을 선택하세요</h3>
            <div style={{display:'flex', justifyContent:'center', marginLeft:'auto', marginRight:'auto'}}> 
             <select value={pickedTime} onChange={this.handleChange}>
                <option value='21:00'>21:00</option>
                <option value='22:00'>22:00</option>
                <option value='23:00'>23:00</option>
                <option value='24:00'>24:00</option>
              </select>       
            </div>
            <div style={{textAlign:"center", marginTop:"50px"}}>
              
                <h3>먹고 싶은 버거킹 메뉴를 선택하세요</h3>
                <ul>
                    <div style={styles.menu}>
                        트러플머쉬룸 와퍼세트 8300원{' '}
                        <span>{mushroom}개</span>{' '}
                        <button onClick={this.handleIncrease} name="mushroom"> + </button>
                        <button onClick={this.handleDecrease} name="mushroom"> - </button>
                    </div>
                    <div style={styles.menu}>
                        통새우와퍼세트 8900원{' '}
                        <span>{tongshrimp}개</span>{' '}
                        <button onClick={this.handleIncrease} name="tongshrimp"> + </button>
                        <button onClick={this.handleDecrease} name="tongshrimp"> - </button>
                    </div>
                    <div style={styles.menu}>
                        트러플머쉬룸 스테이크버거세트 9300원{' '}
                        <span>{steak}개</span>{' '}
                        <button onClick={this.handleIncrease} name="steak"> + </button>
                        <button onClick={this.handleDecrease} name="steak"> - </button>
                    </div>
                </ul>
                <h4>총합: {this.state.totalCost}원</h4>
                <h5>총 주문량: {this.state.orderQuantity}개</h5>
                <Button variant="outlined" 
                          onClick={makeOrder} >
                          주문하기
                </Button>
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

export default BurgerKingMenu;
