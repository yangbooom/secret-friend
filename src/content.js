import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RatinolMenu from './stores/ratinol'
import BurgerKingMenu from './stores/burgerking'
import ChineseMenu from './stores/chinese'
import CobacoMenu from './stores/cobaco'

const Content = () => {
  return (
    <Switch>
      <Route path="/stores/ratinol" component={RatinolMenu} />
      <Route path="/stores/burgerking" component={BurgerKingMenu} />
      <Route path="/stores/chinese" component={ChineseMenu} />
      <Route path="/stores/cobaco" component={CobacoMenu} />
    </Switch>
  )
}

export default Content
