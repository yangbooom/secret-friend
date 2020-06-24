import React, { Component } from 'react';

class Chicken extends Component {
    state = {
        fried: 0,
        yangnyum: 0,
        halfhalf: 0,
        orderQuantity: 0,
        totalCost: 0,
    }

    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "fried") {
            this.setState({
                [name] : this.state.fried + 1,
                totalCost: this.state.totalCost + 11000,
            })
        } else if(name === "yangnyum") {
            this.setState ({
                [name] : this.state.yangnyum + 1,
                totalCost: this.state.totalCost + 13000
            })
        }else if(name === "halfhalf") {
            this.setState ({
                [name] : this.state.halfhalf + 1,
                totalCost: this.state.totalCost + 12000
        })
    }

    this.setState({
        orderQuantity: this.state.orderQuantity + 1
    })
}
    
handleDecrease = (e) => {
    const {fried, yangnyum, halfhalf, orderQuantity} = this.state;

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "fried") {
        if(fried == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.fried - 1,
            totalCost: this.state.totalCost - 11000
        })
    }else if(name === "yangnyum") {
        if(yangnyum == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.yangnyum - 1,
            totalCost: this.state.totalCost - 13000
        })
    }else if(name === "halfhalf") {
        if(halfhalf == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.halfhalf - 1,
            totalCost: this.state.totalCost - 12000
        })
    }
    this.setState({
        orderQuantity: this.state.orderQuantity - 1
    })
    
}
    


    render() {
        const {fried, yangnyum, halfhalf} =this.state;
        return (
            <div>
                <h3>먹고 싶은 치킨 메뉴를 선택하세요</h3>
                <ul>
                    <li>
                        후라이드 11000원{' '}
                        <span>{fried}개</span>{' '}
                        <button onClick={this.handleIncrease} name="fried"> + </button>
                        <button onClick={this.handleDecrease} name="fried"> - </button>
                    </li>
                    <li>
                        양념 13000원{' '}
                        <span>{yangnyum}개</span>{' '}
                        <button onClick={this.handleIncrease} name="yangnyum"> + </button>
                        <button onClick={this.handleDecrease} name="yangnyum"> - </button>
                    </li>
                    <li>
                        반반 12000원{' '}
                        <span>{halfhalf}개</span>{' '}
                        <button onClick={this.handleIncrease} name="halfhalf"> + </button>
                        <button onClick={this.handleDecrease} name="halfhalf"> - </button>
                    </li>
                </ul>
        <h4>총합: {this.state.totalCost}원</h4>
        <h5>총 주문량: {this.state.orderQuantity}개</h5>
            </div>
        );
    }
}


export default Chicken;