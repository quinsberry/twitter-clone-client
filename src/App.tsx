import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AuthApi } from 'services/api/authApi'
import { UserActions } from 'store/user/actionCreators'

import { SignIn, Home } from 'pages'
import { useNotification } from '@hooks/useNotifications'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'

function App() {
  const dispatch = useDispatch()
  const useNotificationObj = useNotification()
  const { notificationState, notificationText, closeNotification, notificationType } = useNotificationObj

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await AuthApi.getMe()
        dispatch(UserActions.setUserData(data))
      } catch (err) {
        console.log(`>> ${err}`)
      }
    }

    checkAuth()
  }, [])

  // This effect close a preloader of page when app initialized
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
        <Route path="/signin" render={() => <SignIn useNotificationObj={useNotificationObj} />} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
      /** Global notifications */
      <Snackbar
        open={notificationState}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={closeNotification}
        TransitionComponent={Slide}>
        <Alert onClose={closeNotification} severity={notificationType}>
          {notificationText}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
