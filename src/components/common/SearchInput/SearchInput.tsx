import { withStyles, InputBase, createStyles } from '@material-ui/core'

export const SearchInput = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      height: 45,
      padding: 0,
    },
  }),
)(InputBase)
