import React, { Component } from 'react';

class Dosirak extends Component {
    state = {
        pork: 0,
        beef: 0,
        kimchi: 0,
        orderQuantity: 0,
        totalCost: 0,
    }

    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "pork") {
            this.setState({
                [name] : this.state.pork + 1,
                totalCost: this.state.totalCost + 7000,
            })
        } else if(name === "beef") {
            this.setState ({
                [name] : this.state.beef + 1,
                totalCost: this.state.totalCost + 8000
            })
        }else if(name === "kimchi") {
            this.setState ({
                [name] : this.state.kimchi + 1,
                totalCost: this.state.totalCost + 6000
        })
    }

    this.setState({
        orderQuantity: this.state.orderQuantity + 1
    })
}
    
handleDecrease = (e) => {
    const {pork, beef, kimchi, orderQuantity} = this.state;

    if(orderQuantity == 0){
        alert("cannot decrease your quantity!");
        return ;
    }

    const {name} = e.target;
    if(name === "pork") {
        if(pork == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.pork - 1,
            totalCost: this.state.totalCost - 7000
        })
    }else if(name === "beef") {
        if(beef == 0){
            alert("cannot decrease your quantity!");
        return ;
        }
        this.setState({
            [name]: this.state.beef - 1,
            totalCost: this.state.totalCost - 8000
        })
    }else if(name === "kimchi") {
        if(kimchi == 0){
            alert("cannot decrease your quantity!");
            return ;
        }
        this.setState({
            [name]: this.state.kimchi - 1,
            totalCost: this.state.totalCost - 6000
        })
    }
    this.setState({
        orderQuantity: this.state.orderQuantity - 1
    })
    
}
    


    render() {
        const {pork, beef, kimchi} =this.state;
        return (
            <div>
                <h3>먹고 싶은 도시락 메뉴를 선택하세요</h3>
                <ul>
                    <li>
                        제육볶음 7000원{' '}
                        <span>{pork}개</span>{' '}
                        <button onClick={this.handleIncrease} name="pork"> + </button>
                        <button onClick={this.handleDecrease} name="pork"> - </button>
                    </li>
                    <li>
                        소고기덮밥 8000원{' '}
                        <span>{beef}개</span>{' '}
                        <button onClick={this.handleIncrease} name="beef"> + </button>
                        <button onClick={this.handleDecrease} name="beef"> - </button>
                    </li>
                    <li>
                        김치볶음밥 6000원{' '}
                        <span>{kimchi}개</span>{' '}
                        <button onClick={this.handleIncrease} name="kimchi"> + </button>
                        <button onClick={this.handleDecrease} name="kimchi"> - </button>
                    </li>
                </ul>
        <h4>총합: {this.state.totalCost}원</h4>
        <h5>총 주문량: {this.state.orderQuantity}개</h5>
            </div>
        );
    }
}


export default Dosirak;