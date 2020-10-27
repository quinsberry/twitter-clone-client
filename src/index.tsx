import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { store } from './store/store'

import theme from './styles/theme'
import './index.css'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

// TODO
// 1. Add the 'Home' to menu
// 2. Create reducer for 'Who to follow'
// 3. Create method to give user's information (mock auth)
// 4. Try to create search input to search actual data from db
// 5. Make linkify for tweet and </br> to move to next row
// 6. Fix opening menu at tweet component (now it's open and move to FullTweet page)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
