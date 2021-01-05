import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectIsAuth } from 'store/user/selectors'
import { AuthApi } from 'services/api/authApi'
import { UserActions } from 'store/user/actionCreators'

import { SignIn, Home } from 'pages'
import { useNotification } from 'hooks/useNotifications'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const useNotificationObj = useNotification()
  const { notificationState, notificationText, closeNotification, notificationType } = useNotificationObj

  const isAuth = useSelector(selectIsAuth)

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

  useEffect(() => {
    if (isAuth) {
      return history.push('/home')
    }
  }, [isAuth])

  // This effect close page preloader when app had initialized
  useEffect(() => {
    const ele = document.getElementById('preloader')
    if (ele) {
      ele?.classList.add('available')
      setTimeout(() => {
        if (ele) ele.outerHTML = ''
      }, 2000)
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" exact render={() => <SignIn useNotificationObj={useNotificationObj} />} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>

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
