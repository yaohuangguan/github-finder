import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import Menu from "./component/layout/Menu";
import Users from "./component/user/Users";
import axios from "axios";
import Search from "./component/user/Search";
import Alert from "./component/layout/Alert";
import About from "./component/page/About";
import User from "./component/user/User";
import "./App.css";
const App = () => {
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setalert] = useState(null);

  //search user function
  

  // get single user profile
  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    setRepos(res.data);
    setLoading(false);
  };


  

  //alert while no input
  const setAlert = (msg, type) => {
    setalert({ msg, type });
    setTimeout(() => setalert(null), 4000);
  };

  return (
    <GithubState>
      <Router>
        <Fragment>
          <Menu title='Friend Finder' icon='fab fa-github' />

          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <h1 className='font-weight-bold'>Find your next friend</h1>

                    <Search

                      setAlert={setAlert}
                    />
                    <Users  />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    loading={loading}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
