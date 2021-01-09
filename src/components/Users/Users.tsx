import React from 'react'
import { useSelector } from 'react-redux'

import { selectUsersData } from 'store/users/selectors'

import { useUsersStyles } from './styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Divider from '@material-ui/core/Divider'

import PersonAddIcon from '@material-ui/icons/PersonAdd'

export const Users = () => {
  const classes = useUsersStyles()
  const users = useSelector(selectUsersData)

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Who to follow</b>
      </Paper>
      <List>
        {users?.map((user) => (
          <ListItem key={'123232'} className={classes.rightSideBlockItem}>
            <ListItemAvatar>
              <Avatar
                className={classes.tweetAvatar}
                alt={`Mine's avatar`}
                src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Warsaw"
              secondary={
                <Typography component="span" variant="body2">
                  @FavDockOfShame
                </Typography>
              }
            />
            <Button color="primary">
              <PersonAddIcon />
            </Button>
          </ListItem>
        ))}
        <Divider component="li" />
      </List>
    </Paper>
  )
}
