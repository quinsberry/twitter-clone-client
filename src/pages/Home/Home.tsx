import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTweets } from 'store/tweets/actionCreators'
import { fetchTags } from 'store/tags/actionCreators'
import { selectIsTweetsLoading, selectTweetsItems } from 'store/tweets/selectors'

import { BackButton, SearchTextField } from 'components/common'
import { Tweet, SideMenu, AddTweetForm, Tags, Users } from 'components'

import { FullTweet } from './components/FullTweet'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'

import SearchIcon from '@material-ui/icons/Search'

import { useHomeStyles } from './styles'

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()

  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, [])

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Route path="/home/:any">
                <BackButton marginRight={20} />
              </Route>
              <Route path={['/home', '/home/search']} exact>
                <Typography variant="h6">Home</Typography>
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Tweet</Typography>
              </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <AddTweetForm padding={20} />
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentered}>
                  <CircularProgress />
                </div>
              ) : (
                tweets?.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact />
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
            <Tags />
            <Users />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
