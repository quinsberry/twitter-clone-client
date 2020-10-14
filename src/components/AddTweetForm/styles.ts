import { makeStyles, Theme } from '@material-ui/core'

export const useAddTweetFormStyles = makeStyles((theme: Theme) => ({
  addFormFooter: {
    position: 'relative',
    left: -13,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
    cursor: 'pointer',
  },
  addFormAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 10,
  },
  addForm: {
    display: 'flex',
  },
  addFormBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
    marginBottom: 20,
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}))
