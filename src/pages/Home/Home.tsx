import React from 'react'

import { SearchInput } from 'components/common'
import { Tweet, SideMenu } from 'components'

import { Container, Grid, Paper, Typography } from '@material-ui/core'

import { useHomeStyles } from './styles'

export const Home = () => {
  const classes = useHomeStyles()
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6">Home</Typography>
            </Paper>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6">Tweet input here</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  classes={classes}
                  user={{
                    username: '@quinsberry',
                    fullname: 'quinsberry',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  }}
                  text={
                    'Вслед за Москвой рекомендации по самоизоляции выдвинуло Подмосковье. Пока они касаются только жителей старше 65 лет и имеющих хронические заболевания. Кроме того, предприятиям порекомендовали вернуть на «дистанционку» как можно больше сотрудников'
                  }
                />,
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchInput placeholder="Search in Tweeter" fullWidth />
        </Grid>
      </Grid>
    </Container>
  )
}
