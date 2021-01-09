import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTweets } from 'store/tweets/actionCreators'
import { fetchTags } from 'store/tags/actionCreators'
import { selectIsTweetsLoading, selectTweetsItems } from 'store/tweets/selectors'

import { BackButton } from 'components/common'
import { Tweet, AddTweetForm } from 'components'

import { FullTweet } from './components/FullTweet'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useHomeStyles } from './styles'

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()

  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, [dispatch])

  return (
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
  )
}
