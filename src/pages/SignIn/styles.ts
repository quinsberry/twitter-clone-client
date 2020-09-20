import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    height: 'calc(100vh - 50px)',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    padding: '10px 15px',
    boxSizing: 'border-box',

    '& span': {
      fontSize: 13,
      fontWeight: 400,
      lineHeight: '17px',
      color: '#657786',
    },
  },
  blueSide: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    backgroundColor: '#71c9f8',
    overflow: 'hidden',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,

    '& li': {
      marginBottom: 40,
    },

    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 19,
    },
  },
  blueSideListInfoIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '70%',
    top: '50%',
    width: '190%',
    height: '190%',
    transform: 'translate(-50%,-50%)',
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  button: {
    fontWeight: 700,
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideSubtitle: {
    marginBottom: 15,
  },
  loginSideField: {
    marginBottom: 18,
  },
  signUpSideField: {
    marginBottom: theme.spacing(4),
  },
}))
