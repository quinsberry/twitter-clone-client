import { makeStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
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
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 10,
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
  rightSide: {
    position: 'sticky',
    top: 0,
    paddingTop: 20,
  },
  rightSideBlock: {
    backgroundColor: '#f5f8fa',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
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
