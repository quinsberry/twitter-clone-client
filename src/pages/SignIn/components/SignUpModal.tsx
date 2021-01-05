import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { openNotificationType } from 'hooks/useNotifications'
import { ModalBlock } from 'components'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import { useSignInPageStyles } from 'pages/SignIn/styles'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingStatus } from 'store/types'
import { selectUserStatus } from 'store/user/selectors'
import { UserActions } from 'store/user/actionCreators'

interface SignUpModalProps {
  open: boolean

  onClose: () => void
  openNotification: openNotificationType
}

export interface SignUpFormProps {
  fullname: string
  username: string
  email: string
  password: string
  password2: string
}

const SignUpFormSchema = yup.object().shape({
  fullname: yup.string().max(40, 'Your fullname is too long').required('This field is required'),
  email: yup.string().email('Invalid email').required('This field is required'),
  username: yup.string().max(40, 'Your username is too long').required('This field is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must be at most 40 characters')
    .required(),
  password2: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
})

export const SignUpModal: React.FC<SignUpModalProps> = ({ open, onClose, openNotification }): React.ReactElement => {
  const classes = useSignInPageStyles()
  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectUserStatus)

  const { register, handleSubmit, errors } = useForm<SignUpFormProps>({
    resolver: yupResolver(SignUpFormSchema),
  })
  const onSubmit = async (data: SignUpFormProps) => {
    dispatch(UserActions.fetchSignUp(data))
  }

  useEffect(() => {
    if (loadingStatus === LoadingStatus.LOADED) {
      openNotification('Registration success! Check your email.', 'success')
      onClose()
    }

    if (loadingStatus === LoadingStatus.ERROR) {
      openNotification('An error occurred. Try again later', 'error')
    }
  }, [loadingStatus])

  return (
    <ModalBlock title={'Create your account'} visible={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              name="fullname"
              error={!!errors.fullname}
              helperText={!!errors.fullname && errors.fullname?.message}
              inputRef={register}
              className={classes.signUpSideField}
              autoFocus
              id="name"
              label="Fullname"
              type="text"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              name="email"
              error={!!errors.email}
              helperText={!!errors.email && errors.email?.message}
              inputRef={register}
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
              name="username"
              error={!!errors.username}
              helperText={!!errors.username && errors.username?.message}
              inputRef={register}
              className={classes.loginSideField}
              autoFocus
              id="username"
              label="Username"
              type="username"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              name="password"
              error={!!errors.password}
              helperText={!!errors.password && errors.password?.message}
              inputRef={register}
              className={classes.signUpSideField}
              autoFocus
              id="password"
              label="Password"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <TextField
              name="password2"
              error={!!errors.password2}
              helperText={!!errors.password2 && errors.password2?.message}
              inputRef={register}
              className={classes.signUpSideField}
              autoFocus
              id="password2"
              label="Confirm password"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              fullWidth
            />
            <Button
              disabled={loadingStatus === LoadingStatus.LOADING}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth>
              Submit
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  )
}
