import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RatinolMenu from './stores/ratinol'
import BurgerKingMenu from './stores/burgerking'
import ChineseMenu from './stores/chinese'
import CobacoMenu from './stores/cobaco'

const Content = () => {
  return (
    <Switch>
      <Route path="/home/ratinol" component={RatinolMenu} />
      <Route path="/home/burgerking" component={BurgerKingMenu} />
      <Route path="/home/chinese" component={ChineseMenu} />
      <Route path="/home/cobaco" component={CobacoMenu} />
    </Switch>
  )
}

export default Content