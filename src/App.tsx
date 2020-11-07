import React, { useEffect } from 'react'

import { SignIn, Home } from 'pages'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  useEffect(() => {
    const ele = document.getElementById('preloader')
    if (ele) {
      // fade out
      ele?.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        if (ele) ele.outerHTML = ''
      }, 2000)
    }
  }, [])
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
