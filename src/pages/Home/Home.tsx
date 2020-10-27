import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTweets } from "store/tweets/actionCreators";
import { fetchTags } from "store/tags/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "store/tweets/selectors";

import { BackButton, SearchTextField } from "components/common";
import { Tweet, SideMenu, AddTweetForm, Tags } from "components";

import { FullTweet } from "./components/FullTweet";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";

import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { useHomeStyles } from "./styles";
export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();

  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);
  console.log(tweets);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Route path="/home/:any">
                <BackButton marginRight={20} />
              </Route>
              <Route path={["/home", "/home/search"]} exact>
                <Typography variant="h6">Home</Typography>
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Tweet</Typography>
              </Route>
            </Paper>
            <Route path={["/home", "/home/search"]} exact>
              <Paper>
                <AddTweetForm padding={20} />
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentered}>
                  <CircularProgress />
                </div>
              ) : (
                tweets?.map((tweet) => (
                  <Tweet key={tweet._id} classes={classes} {...tweet} />
                ))
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Search in Tweeter"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Who to follow</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.tweetAvatar}
                      alt={`Mine's avatar`}
                      src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Warsaw"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
