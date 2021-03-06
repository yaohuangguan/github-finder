import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

let githubCliId;
let githubCliSecret;

if(process.env.NODE_ENV !== 'production'){
  githubCliId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubCliSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else{
  githubCliId = process.env.GITHUB_CLIENT_ID;
  githubCliSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User
  const searchUser = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
       githubCliId
      }&client_secret=${githubCliSecret}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
        // if (res.data.items) {
        //   alertContext.setAlert("success", "success");
        // }
        // let responses = res.data.items;
        // if (responses.length === 0) {
        //   setAlert("There is no result matched!", "danger");
        // }
  };

  //Get user
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      githubCliId
      }&client_secret=${githubCliSecret}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // get single user profile
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
       githubCliId
      }&client_secret=${githubCliSecret}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  //get user repos

  //clear user
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //set loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    });
  //

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
