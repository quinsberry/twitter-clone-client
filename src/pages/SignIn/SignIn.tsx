import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UserActions } from 'store/user/actionCreators'
import { selectUserStatus } from 'store/user/selectors'
import { useNotificationOutput } from 'hooks/useNotifications'

import { LoginModal, SignUpModal } from './components'

import { Button, Typography } from '@material-ui/core'
import {
  Twitter as TwitterIcon,
  Search as SearchIcon,
  PeopleOutline as PeopleIcon,
  ModeCommentOutlined as MessageIcon,
} from '@material-ui/icons'

import { useSignInPageStyles } from './styles'
import { LoadingStatus } from 'store/types'

interface SignInPageProps {
  useNotificationObj: useNotificationOutput
}
export const SignIn: React.FC<SignInPageProps> = ({ useNotificationObj }): React.ReactElement => {
  const classes = useSignInPageStyles()
  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectUserStatus)
  const { openNotification } = useNotificationObj

  const [visibleModal, setVisibleModal] = useState<'signUp' | 'signIn'>()

  const handleOpenSignUp = (): void => {
    setVisibleModal('signUp')
  }

  const handleOpenLogIn = (): void => {
    setVisibleModal('signIn')
  }

  const handleCloseModal = (): void => {
    setVisibleModal(undefined)

    if (loadingStatus !== LoadingStatus.NEVER) {
      dispatch(UserActions.setUserLoadingStatusDefault())
    }
  }

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <section className={classes.blueSide}>
          <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
          <ul className={classes.blueSideListInfo}>
            <li>
              <Typography variant="h6">
                <SearchIcon className={classes.blueSideListInfoIcon} />
                Follow your interests.
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                <PeopleIcon className={classes.blueSideListInfoIcon} />
                Hear what people are talking about.
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                <MessageIcon className={classes.blueSideListInfoIcon} />
                Join the conversation.
              </Typography>
            </li>
          </ul>
        </section>
        <section className={classes.loginSide}>
          <div className={classes.loginSideWrapper}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
            <Typography className={classes.loginSideTitle} variant="h4">
              See what’s happening in the world right now
            </Typography>
            <Typography className={classes.loginSideSubtitle}>
              <b>Join Twitter today.</b>
            </Typography>
            <Button
              onClick={handleOpenSignUp}
              style={{ marginBottom: 15 }}
              variant="contained"
              color="primary"
              fullWidth>
              Sign up
            </Button>
            <Button onClick={handleOpenLogIn} variant="outlined" color="primary" fullWidth>
              Log in
            </Button>
          </div>
        </section>
      </main>
      <footer className={classes.footer}>
        <span>© Twitter, Inc., 2020.</span>
      </footer>

      {visibleModal === 'signIn' && (
        <LoginModal open={visibleModal === 'signIn'} openNotification={openNotification} onClose={handleCloseModal} />
      )}
      {visibleModal === 'signUp' && (
        <SignUpModal open={visibleModal === 'signUp'} openNotification={openNotification} onClose={handleCloseModal} />
      )}
    </div>
  )
}
