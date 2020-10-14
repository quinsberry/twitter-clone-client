import React from 'react'

import { Dialog, DialogTitle, DialogContent, IconButton } from '@material-ui/core'

import { Close as CloseIcon } from '@material-ui/icons'

import signInStyles from 'pages/SignIn/styles'

interface IProps {
  title?: string
  children: React.ReactNode
  classes?: ReturnType<typeof signInStyles>
  visible?: boolean
  onClose: () => void
}

export const ModalBlock: React.FC<IProps> = ({
  title,
  classes,
  children,
  visible = false,
  onClose,
}: IProps): React.ReactElement | null => {
  if (!visible) return null

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent style={{ padding: 24 }}>{children}</DialogContent>
    </Dialog>
  )
}
