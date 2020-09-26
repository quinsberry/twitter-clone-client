import { makeStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  sideMenuList: {
    listStyle: 'none',
    maxWidth: 230,
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  listItemContent: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0 20px 0 15px',
    margin: '7px 0',
    transition: '.1s ease-out',
    borderRadius: 30,
    height: 46,
    cursor: 'pointer',

    '&:hover': {
      background: 'rgba(29, 161, 242, 0.1)',
      color: theme.palette.primary.main,
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
    marginLeft: 10,
  },
  sideMenuListItemIcon: {
    fontSize: 26,
  },
  logoIcon: {
    fontSize: 33,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweet: {
    paddingTop: 15,
    paddingLeft: 20,
    transition: '.1s',

    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
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
}))
