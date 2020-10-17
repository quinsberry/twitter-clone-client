import React from 'react'
import cn from 'classnames'

import { IconButton, Typography, Button, Hidden } from '@material-ui/core'
import {
  Twitter as TwitterIcon,
  Search as SearchIcon,
  PersonOutline as PersonIcon,
  MailOutline as MessageIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  BookmarkBorder as BookmarkIcon,
  ListAltOutlined as ListIcon,
  CreateOutlined as CreateIcon,
} from '@material-ui/icons'

import { useSideMenuStyles } from './styles'
import { ModalBlock } from '../'
import { AddTweetForm } from 'components/AddTweetForm/AddTweetForm'
import { Link } from 'react-router-dom'

interface SideMenuProps {}

export const SideMenu: React.FC<SideMenuProps> = (): React.ReactElement => {
  const classes = useSideMenuStyles()
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false)

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton color="primary">
          <Link to="/home">
            <TwitterIcon className={cn(classes.sideMenuListItemIcon, classes.logoIcon)} />
          </Link>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Search</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Notifications</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Messages</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Bookmarks</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>List</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <PersonIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Profile</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          <Hidden smDown>Tweet</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock visible={visibleAddTweet} onClose={onCloseAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  )
}
