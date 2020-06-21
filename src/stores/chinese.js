import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {Paper} from '@material-ui/core'


const ChineseMenu = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      classNames="fade">
      <Paper style={styles.menu}>Chinese Menu</Paper>
    </CSSTransitionGroup>
  )
}

const styles = {};

styles.menu = {
  position: "absolute",
  textAlign: "center",
  left: 0,
  right: 0,
  top: 100,
  bottom: 0
};

export default ChineseMenu