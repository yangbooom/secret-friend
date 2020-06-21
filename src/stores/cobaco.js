import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {Paper} from '@material-ui/core'


const CobacoMenu = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      classNames="fade">
      <Paper style={styles.menu}>Cobaco Menu</Paper>
    </CSSTransitionGroup>
  )
}

const styles = {};

styles.menu = {
  position: "absolute",
  textAlign: "center",
  left: 0,
  right: 0,
  top: "120px",
  bottom: 0
};

export default CobacoMenu