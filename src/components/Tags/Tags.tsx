import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectIsTagsLoaded, selectTagsItems } from 'store/tags/selectors'

import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { useHomeStyles } from 'pages/Home/styles'

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagsProps> = ({ classes }): React.ReactElement | null => {
  const tags = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) return null

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Trends for you</b>
      </Paper>
      <List>
        {tags.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${item.name}`}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography component="span" variant="body2">
                      Tweets: {item.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}
