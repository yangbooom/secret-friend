import React, { Component } from 'react';

class Chinese extends Component {
    state = {
        zazang: 0,
        zambong: 0,
        friedrice: 0,
        orderQuantity: 0,
        totalCost: 0,
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
    


    render() {
        const {zazang, zambong, friedrice} =this.state;
        return (
            <div>
                <h3>먹고 싶은 중국집 메뉴를 선택하세요</h3>
                <ul>
                    <li>
                        짜장면 5500원 {' '}
                        <span>{zazang}개</span>{' '}
                        <button onClick={this.handleIncrease} name="zazang"> + </button>
                        <button onClick={this.handleDecrease} name="zazang"> - </button>
                    </li>
                    <li>
                        짬뽕 6500원{' '}
                        <span>{zambong}개</span>{' '}
                        <button onClick={this.handleIncrease} name="zambong"> + </button>
                        <button onClick={this.handleDecrease} name="zambong"> - </button>
                    </li>
                    <li>
                        볶음밥 7000원{' '}
                        <span>{friedrice}개</span>{' '}
                        <button onClick={this.handleIncrease} name="friedrice"> + </button>
                        <button onClick={this.handleDecrease} name="friedrice"> - </button>
                    </li>
                </ul>
        <h4>총합: {this.state.totalCost}원</h4>
        <h5>총 주문량: {this.state.orderQuantity}개</h5>
            </div>
        );
    }
}


export default Chinese;