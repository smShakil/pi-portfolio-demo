import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import piProfile from './pages/pi-profile/piProfile'

function Routes () {
  return (
    <Switch>
      <Route path="/" component={piProfile} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export default Routes
