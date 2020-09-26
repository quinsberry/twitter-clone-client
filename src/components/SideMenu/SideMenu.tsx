import React from 'react'
import cn from 'classnames'

import { IconButton, Typography, Button } from '@material-ui/core'
import {
  Twitter as TwitterIcon,
  Search as SearchIcon,
  PersonOutline as PersonIcon,
  MailOutline as MessageIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  BookmarkBorder as BookmarkIcon,
  ListAltOutlined as ListIcon,
} from '@material-ui/icons'

import { useHomeStyles } from 'pages/Home/styles'

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

const SideMenu: React.FC<SideMenuProps> = ({ classes }): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton color="primary">
          <TwitterIcon className={cn(classes.sideMenuListItemIcon, classes.logoIcon)} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <SearchIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>Search</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>Notifications</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <MessageIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>Messages</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>Bookmarks</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <ListIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>List</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className={classes.listItemContent}>
          <PersonIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel}>Profile</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          Tweet
        </Button>
      </li>
    </ul>
  )
}

export default SideMenu
