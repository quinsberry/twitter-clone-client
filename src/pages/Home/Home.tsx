import React from 'react'

import { SearchInput } from 'components/common'
import { Tweet, SideMenu, AddTweetForm } from 'components'

import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core'

import { useHomeStyles } from './styles'
import { Search as SearchIcon, PersonAdd as PersonAddIcon } from '@material-ui/icons'

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles()
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6">Home</Typography>
            </Paper>
            <Paper>
              <AddTweetForm classes={classes} />
              <div className={classes.addFormBottomLine} />
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  classes={classes}
                  user={{
                    username: '@quinsberry',
                    fullname: 'quinsberry',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  }}
                  text={
                    'Вслед за Москвой рекомендации по самоизоляции выдвинуло Подмосковье. Пока они касаются только жителей старше 65 лет и имеющих хронические заболевания. Кроме того, предприятиям порекомендовали вернуть на «дистанционку» как можно больше сотрудников'
                  }
                />,
              ),
            ]}
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchInput
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
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Trends for you</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Warsaw"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Warsaw"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Warsaw"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Who to follow</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
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
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
