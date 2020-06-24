import React, { Component } from 'react'; 

class Home extends Component { 

    render() { 
        return ( 
            <div style={{textAlign:'center'}}> 
                <h2>오늘 뭐먹지?</h2>
                <h3>메뉴를 골라주세요</h3>
                <img src="https://i.ibb.co/YB6Qsp1/whichone.png" width="300px" alt="home"></img>
            </div> 
        ); 
    } 
} 

export default Home;