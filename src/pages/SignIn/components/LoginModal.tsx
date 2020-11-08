import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ModalBlock } from 'components'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'

import { useSignInPageStyles } from 'pages/SignIn/styles'
import { openNotificationType } from '@hooks/useNotifications'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from 'store/user/actionCreators'
import { selectUserStatus } from 'store/user/selectors'
import { LoadingStatus } from 'store/types'

interface LoginModalProps {
  open: boolean

  onClose: () => void
  openNotification: openNotificationType
}

export interface LoginFormProps {
  username: string
  password: string
}

const LoginFormSchema = yup.object().shape({
  username: yup.string().max(40, 'Username or email must be at most 40 characters').required('This field is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must be at most 40 characters')
    .required(),
})

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, openNotification }): React.ReactElement => {
  const classes = useSignInPageStyles()
  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectUserStatus)

  const { register, handleSubmit, errors } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  })
  const onSubmit = async (data: LoginFormProps) => {
    dispatch(UserActions.fetchSignIn(data))
  }

  useEffect(() => {
    if (loadingStatus === LoadingStatus.LOADED) {
      openNotification('Authorization success!', 'success')
      onClose()
    }

    if (loadingStatus === LoadingStatus.ERROR) {
      openNotification('Login or password is incorrect', 'error')
    }
  }, [loadingStatus])

  return (
    <ModalBlock title={'Log in to Twitter'} visible={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              name="username"
              error={!!errors.username}
              helperText={!!errors.username && errors.username?.message}
              className={classes.loginSideField}
              autoFocus
              id="username"
              label="Username or email"
              type="username"
              inputRef={register}
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              name="password"
              error={!!errors.password}
              helperText={!!errors.password && errors.password?.message}
              className={classes.loginSideField}
              id="password"
              label="Password"
              type="password"
              inputRef={register}
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log in
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  )
}
