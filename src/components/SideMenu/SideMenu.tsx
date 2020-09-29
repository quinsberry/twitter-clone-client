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

import { useHomeStyles } from 'pages/Home/styles'

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }): React.ReactElement => {
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
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          <Hidden smDown>Tweet</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </li>
    </ul>
  )
}
