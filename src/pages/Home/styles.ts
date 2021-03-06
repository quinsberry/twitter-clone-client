import { makeStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useHomeStyles = makeStyles((theme: Theme) => ({
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweet: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingLeft: 20,
    transition: '.1s',

    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
  },
  fullTweet: {
    flexDirection: 'column',
  },
  tweetText: {
    wordBreak: 'break-word',
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 13,
  },
  fullTweetAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  tweetFooter: {
    position: 'relative',
    left: -13,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
    cursor: 'pointer',
  },
  tweetUserName: {
    color: grey[500],
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#e6ecf0',
  },
  tweetsCentered: {
    marginTop: 50,
    textAlign: 'center',
  },
}))
