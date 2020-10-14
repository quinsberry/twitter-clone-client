import { makeStyles, Theme } from '@material-ui/core'

export const useSideMenuStyles = makeStyles((theme: Theme) => ({
  sideMenuList: {
    position: 'sticky',
    top: 0,
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
    transition: '.05s ease-out',
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
}))
