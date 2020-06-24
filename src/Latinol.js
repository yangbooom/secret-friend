import React, { Component } from 'react';

class Latinol extends Component {
    state = {
        ddeok: 0,
        kimbab: 0,
        intestine: 0,
        orderQuantity: 0,
        totalCost: 0,
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
    


    render() {
        const {ddeok, kimbab, intestine} =this.state;
        return (
            <div>
                <h3>먹고 싶은 분식 메뉴를 선택하세요</h3>
                <ul>
                    <li>
                        떡볶이 4500원 {' '}
                        <span>{ddeok}개</span>{' '}
                        <button onClick={this.handleIncrease} name="ddeok"> + </button>
                        <button onClick={this.handleDecrease} name="ddeok"> - </button>
                    </li>
                    <li>
                        김밥 4000원{' '}
                        <span>{kimbab}개</span>{' '}
                        <button onClick={this.handleIncrease} name="kimbab"> + </button>
                        <button onClick={this.handleDecrease} name="kimbab"> - </button>
                    </li>
                    <li>
                        순대 4500원{' '}
                        <span>{intestine}개</span>{' '}
                        <button onClick={this.handleIncrease} name="intestine"> + </button>
                        <button onClick={this.handleDecrease} name="intestine"> - </button>
                    </li>
                </ul>
        <h4>총합: {this.state.totalCost}원</h4>
        <h5>총 주문량: {this.state.orderQuantity}개</h5>
            </div>
        );
    }
}


export default Latinol;