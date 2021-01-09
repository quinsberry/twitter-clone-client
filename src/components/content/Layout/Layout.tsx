import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTweets } from 'store/tweets/actionCreators'
import { fetchTags } from 'store/tags/actionCreators'
import { SideMenu, RightMenu } from 'components'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { useLayoutStyles } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  const classes = useLayoutStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, [dispatch])

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          {children}
        </Grid>
        <Grid sm={3} md={3} item>
          <RightMenu />
        </Grid>
      </Grid>
    </Container>
  )
}
