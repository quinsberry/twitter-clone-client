import React from 'react'

import { SignIn, Home } from 'pages'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default App
