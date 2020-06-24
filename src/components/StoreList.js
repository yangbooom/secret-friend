import React from 'react';
import { Link } from 'react-router-dom';
import {
  List, ListItem, ListItemText, Typography,
} from '@material-ui/core';

const StoreList = () => (
  <List style={styles.nav}>
    <div style={styles.store}>
    <Link to="/home/ratinol">
      <img src="http://ratinol.co.kr/images/intro_cont_img01.jpg?ver=1.8" height="30" alt="ratinol" />
      <ListItem button>
        <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Ratinol</Typography>} />
      </ListItem>
    </Link>
    
    <Link to="/home/burgerking">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/600px-Burger_King_logo.svg.png" height="30" alt="burgerking" />
      <ListItem button>
        <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Burger King</Typography>} />
      </ListItem>
    </Link>
    </div>
    <div style={styles.store}>
    <Link to="/home/chinese">
      <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180403_288%2F1522751067539KtHpK_PNG%2FTimENC9Zp9xN1uSM1_Tr-2TR.png" height="30" alt="chinese" />
      <ListItem button>
        <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Chinese</Typography>} />
      </ListItem>
    </Link>

    <Link to="/home/cobaco">
      <img src="http://siksamenu.co.kr/images/cpimage/803838361_442426.jpg" height="30" alt="cobaco" />
      <ListItem button>
        <ListItemText primary={<Typography variant="h6" style={{ color: '000000' }}>Cobaco</Typography>} />
      </ListItem>
    </Link>
    </div>
  </List>

);

const styles = {};

styles.nav = {
  textAlign: 'center',
  height: '150px',
  display: 'flex',
  width: '450px',
  position: 'absolute',
  top: '40%',
  left: '12%',
  right: '12%'
};

styles.store = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default StoreList;
