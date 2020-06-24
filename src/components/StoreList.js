import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem, ListItemText, Divider, Typography, Button} from '@material-ui/core';

const StoreList = () => (
  <div>
  <Link to="/home"><Button style={styles.home}>Home</Button></Link>
  <List style={styles.nav}>
    <Link to="/home/ratinol">
      <img src="http://ratinol.co.kr/images/intro_cont_img01.jpg?ver=1.8" height="30" alt="ratinol" />
      <ListItem button>
        <ListItemText primary={<Typography  style={{ textAlign:'center', fontSize: '14px', color: '000000' }}>Ratinol</Typography>} />
      </ListItem>
    </Link>
    <Divider/>
    <Link to="/home/burgerking">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/600px-Burger_King_logo.svg.png" height="30" alt="burgerking" />
      <ListItem button>
        <ListItemText primary={<Typography style={{ textAlign:'center', fontSize: '14px', color: '000000' }}>Burger King</Typography>} />
      </ListItem>
    </Link>
    <Divider/>
    <Link to="/home/chinese">
      <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180403_288%2F1522751067539KtHpK_PNG%2FTimENC9Zp9xN1uSM1_Tr-2TR.png" height="30" alt="chinese" />
      <ListItem button>
        <ListItemText primary={<Typography style={{ textAlign:'center', fontSize: '14px', color: '000000' }}>Chinese</Typography>} />
      </ListItem>
    </Link>
    <Divider/>
    <Link to="/home/cobaco">
    <img src="http://siksamenu.co.kr/images/cpimage/803838361_442426.jpg" height="30" alt="cobaco" />
      <ListItem button >
        <ListItemText primary={<Typography variant="h7" style={{ textAlign:'center', fontSize: '14px', color: '000000' }}>Cobaco</Typography>} />
      </ListItem>
    </Link>

  </List>
  </div>

);

const styles = {};

styles.home = {
  display: 'flex',
  top: '60px',
  bottom: '20px',
  marginLeft:'auto',
  marginRight:'auto'
  
};

styles.nav = {
  textAlign: 'center',
  height: '60px',
  display: 'flex',
  top: '100px',
  bottom: '20px',
  justifyContent: 'center',
};

export default StoreList;
