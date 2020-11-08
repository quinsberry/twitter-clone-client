import React from 'react'

import { openNotificationType } from '@hooks/useNotifications'
import { ModalBlock } from 'components'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import { useSignInPageStyles } from 'pages/SignIn/styles'

interface SignUpModalProps {
  open: boolean

  onClose: () => void
  openNotification: openNotificationType
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ open, onClose, openNotification }): React.ReactElement => {
  const classes = useSignInPageStyles()
  return (
    <ModalBlock title={'Create your account'} visible={open} onClose={onClose}>
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
          <Button onClick={onClose} variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  )
}
