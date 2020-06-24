
import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {
  auth, writeOrder
} from '../../firebase.util';

class CobacoMenu extends Component {
    state = {
        ross: 0,
        fish: 0,
        shrimp: 0,
        orderQuantity: 0,
        totalCost: 0,
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
    


    render() {
        const {ross, fish, shrimp,totalCost} =this.state;
        const time="202006262400"

        const makeOrder = () => {
          writeOrder('Nox9260J7pZaZY2IpVu7OKIKigB2', 'cobaco', time, totalCost)
        }

        return (
            <div style={{textAlign:"center", marginTop:"50px"}}>
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
                          onClick={makeOrder}>
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

export default CobacoMenu;
