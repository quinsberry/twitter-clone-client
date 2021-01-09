import React from 'react'

import { SearchTextField } from 'components/common'
import { Tags, Users } from 'components'

import { InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import { useRightMenuStyles } from './styles'

interface RightMenuProps {}
export const RightMenu: React.FC<RightMenuProps> = (): React.ReactElement => {
  const classes = useRightMenuStyles()
  return (
    <div className={classes.rightSide}>
      <SearchTextField
        variant="outlined"
        placeholder="Search in Tweeter"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Tags />
      <Users />
    </div>
  )
}
