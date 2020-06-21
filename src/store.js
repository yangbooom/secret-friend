import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core'

const Store = () => {
  return (  
    <List style={styles.nav}>
        <Link to="/stores/ratinol">
            <ListItem button>
                <ListItemText primary="Ratinol" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/burgerking">
            <ListItem button>
                <ListItemText primary="Burgerking" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/chinese">
            <ListItem button>
                <ListItemText primary="Chinese" />
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/stores/cobaco">
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
  padding: 20,
  top: 20,
  height: "60px",
  display: "flex",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  borderBottom: "1px solid #efefef"
};

styles.navItem = {
  textAlign: "center",
  flex: 5,
  listStyleType: "none",
  padding: "10px"
};

export default Store