import React, { useState } from 'react'

import { ModalBlock } from 'components'

import { Button, Typography, FormControl, FormGroup, TextField } from '@material-ui/core'

import {
  Twitter as TwitterIcon,
  Search as SearchIcon,
  PeopleOutline as PeopleIcon,
  ModeCommentOutlined as MessageIcon,
  Close as CloseIcon,
} from '@material-ui/icons'

import signInStyles from './styles'

const SignIn = () => {
  const classes = signInStyles()

  const [visibleModal, setVisibleModal] = useState<'signUp' | 'logIn'>()

  const handleOpenSignUp = (): void => {
    setVisibleModal('signUp')
  }

  const handleOpenLogIn = (): void => {
    setVisibleModal('logIn')
  }

  const handleCloseModal = (): void => {
    setVisibleModal(undefined)
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

      <ModalBlock
        title={'Log in to Twitter'}
        visible={visibleModal === 'logIn'}
        onClose={handleCloseModal}>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.loginSideField}
              autoFocus
              id="email"
              label="Email"
              type="email"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              id="password"
              label="Password"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
              Log in
            </Button>
          </FormGroup>
        </FormControl>
      </ModalBlock>

      <ModalBlock
        title={'Create your account'}
        visible={visibleModal === 'signUp'}
        onClose={handleCloseModal}>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.signUpSideField}
              autoFocus
              id="name"
              label="Name"
              type="text"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              className={classes.signUpSideField}
              autoFocus
              id="email"
              label="Email"
              type="email"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              className={classes.signUpSideField}
              autoFocus
              id="password"
              label="Password"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
              Next
            </Button>
          </FormGroup>
        </FormControl>
      </ModalBlock>
    </div>
  )
}

export default SignIn
