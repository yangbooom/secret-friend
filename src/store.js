import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core'

const Store = () => {
  return (  
    <List style={styles.nav}>
        <Link to="/stores/ratinol">
            <img src="http://ratinol.co.kr/images/intro_cont_img01.jpg?ver=1.8" height="20" alt="ratinol"></img>
            <ListItem button>
                <ListItemText primary="Ratinol" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/burgerking">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/600px-Burger_King_logo.svg.png" height="20" alt="burgerking"></img>
            <ListItem button>
                <ListItemText primary="Burgerking" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/chinese">
            <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180403_288%2F1522751067539KtHpK_PNG%2FTimENC9Zp9xN1uSM1_Tr-2TR.png" height="20" alt="chinese"></img>
            <ListItem button>
                <ListItemText primary="Chinese" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/cobaco">
            <img src="http://siksamenu.co.kr/images/cpimage/803838361_442426.jpg" height="20" alt="cobaco"></img>
            <ListItem button>
                <ListItemText primary="Cobaco" />
            </ListItem>
        </Link>
    </List>

  )
}

const styles = {};

styles.nav = {
  textAlign: "center",
  padding: 10,
  top: 10,
  height: "100px",
  display: "flex",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  borderBottom: "1px solid #efefef"
};

export default Store