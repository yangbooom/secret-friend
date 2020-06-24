import React, { Component } from 'react';

// react class component // Main class component
class Main extends Component {
    state = {
            zazang: 0,
            chicken: 0,
            ddeok: 0,
            dosirak: 0
    }

    handleIncrease = (e) => {
        const {name} = e.target;
        if(name === "zazang"){
            this.setState({
                [name]: this.state.zazang + 1
            })
        } else if(name === "chicken"){
            this.setState({
                [name]: this.state.chicken + 1
            })
        }else if(name === "ddeok"){
            this.setState({
                [name]: this.state.ddeok + 1
            })
        }else if(name === "dosirak"){
            this.setState({
                [name]: this.state.dosirak + 1
            })
        }
    }
    handleDecrease = (e) => {
        const {name} = e.target;
        if(name === "zazang"){
            this.setState({
                [name]: this.state.zazang - 1
            })
        } else if(name === "chicken"){
            this.setState({
                [name]: this.state.chicken - 1
            })
        }else if(name === "ddeok"){
            this.setState({
                [name]: this.state.ddeok - 1
            })
        }else if(name === "dosirak"){
            this.setState({
                [name]: this.state.dosirak - 1
            })
        }
    }
    render() {
        const {zazang, chicken, ddeok, dosirak} = this.state;
        return (
            <div>
                <h1>Choose what you want to eat</h1>
                <ul>
                    <li>
                        짜장면{' '}
                        <span>{zazang}</span>{' '}
                        <button onClick={this.handleIncrease} name="zazang"> + </button>
                        <button onClick={this.handleDecrease} name="zazang"> - </button>
                    </li>
                    <li>
                        치킨{' '}
                        <span>{chicken}</span>{' '}
                        <button onClick={this.handleIncrease} name="chicken"> + </button>
                        <button onClick={this.handleDecrease} name="chicken"> - </button>
                    </li>
                    <li>
                        떡볶이{' '}
                        <span>{ddeok}</span>{' '}
                        <button onClick={this.handleIncrease} name="ddeok"> + </button>
                        <button onClick={this.handleDecrease} name="ddeok"> - </button>
                    </li>
                    <li>
                        도시락{' '}
                        <span>{dosirak}</span>{' '}
                        <button onClick={this.handleIncrease} name="dosirak"> + </button>
                        <button onClick={this.handleDecrease} name="dosirak"> - </button>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Main;