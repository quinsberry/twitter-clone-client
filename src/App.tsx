import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectIsAuth, selectUserIsLoading } from 'store/user/selectors'
import { UserActions } from 'store/user/actionCreators'

import { SignIn, Home } from 'pages'
import { useNotification } from 'hooks/useNotifications'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'
import { Layout } from 'components/content'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const useNotificationObj = useNotification()
  const { notificationState, notificationText, closeNotification, notificationType } = useNotificationObj

  const isAuth = useSelector(selectIsAuth)
  const isLoading = useSelector(selectUserIsLoading)

  useEffect(() => {
    dispatch(UserActions.userInitialization())
  }, [dispatch])

  useEffect(() => {
    if (!isLoading && !isAuth) {
      return history.push('/signin')
    } else {
      if (!history.location.pathname.split('/').includes('home')) {
        return history.push('/home')
      }
    }
  }, [isAuth, isLoading, history])

  useEffect(() => {
    const el = document.getElementById('preloader')
    if (el) {
      el?.classList.add('available')
      setTimeout(() => {
        if (el) el.outerHTML = ''
      }, 2000)
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" exact render={() => <SignIn useNotificationObj={useNotificationObj} />} />

        <Route
          path="/home"
          render={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
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
