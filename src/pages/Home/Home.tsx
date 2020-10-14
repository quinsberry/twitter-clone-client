import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTweets } from 'store/ducks/tweets/actionCreators'
import { selectIsTweetsLoading, selectTweetsItems } from 'store/ducks/tweets/selectors'

import { SearchTextField } from 'components/common'
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
  CircularProgress,
} from '@material-ui/core'

import { useHomeStyles } from './styles'
import { Search as SearchIcon, PersonAdd as PersonAddIcon } from '@material-ui/icons'

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()

  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6">Home</Typography>
            </Paper>
            <Paper>
              <AddTweetForm padding={20} />
              <div className={classes.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <div className={classes.tweetsCentered}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => (
                <Tweet key={tweet._id} classes={classes} user={tweet.user} text={tweet.text} />
              ))
            )}
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
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
