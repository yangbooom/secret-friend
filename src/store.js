import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import {List, ListItem, ListItemText, Divider, Typography} from '@material-ui/core'

const Store = () => {
  return (  
    <List style={styles.nav}>
        <Link to="/stores/ratinol">
            <img src="http://ratinol.co.kr/images/intro_cont_img01.jpg?ver=1.8" height="30" alt="ratinol"></img>
            <ListItem button>
                <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Ratinol</Typography>} />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/burgerking">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/600px-Burger_King_logo.svg.png" height="30" alt="burgerking"></img>
            <ListItem button>
                <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Burger King</Typography>} />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/chinese">
            <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180403_288%2F1522751067539KtHpK_PNG%2FTimENC9Zp9xN1uSM1_Tr-2TR.png" height="30" alt="chinese"></img>
            <ListItem button>
                <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Chinese</Typography>} />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/cobaco">
            <img src="http://siksamenu.co.kr/images/cpimage/803838361_442426.jpg" height="30" alt="cobaco"></img>
            <ListItem button>
                <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Cobaco</Typography>} />
            </ListItem>
        </Link>
    </List>

  )
}

const styles = {};

styles.nav = {
  textAlign: "center",
  top: 10,
  height: "150px",
  display: "flex",
  width: "450px",
  marginLeft: "auto",
  marginRight: "auto",
  borderBottom: "1px solid #efefef"
};

export default Store