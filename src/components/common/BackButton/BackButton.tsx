import React from 'react'
import { useHistory } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

interface BackButtonProps {
  marginRight?: number
}
export const BackButton: React.FC<BackButtonProps> = ({ marginRight }): React.ReactElement => {
  const history = useHistory()

  const handleClickButton = () => {
    history.goBack()
  }

  return (
    <IconButton
      style={marginRight ? { marginRight: marginRight } : {}}
      color="primary"
      onClick={handleClickButton}>
      <ArrowBackIcon />
    </IconButton>
  )
}
