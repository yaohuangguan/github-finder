import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./component/layout/Menu";
import Users from "./component/user/Users";
import axios from "axios";
import Search from "./component/user/Search";
import Alert from "./component/layout/Alert";
import About from "./component/page/About";
import User from "./component/user/User";
class App extends Component {
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  //search user function
  searchUser = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({ users: res.data.items, loading: false });
    if (res.data.items) {
      this.setAlert("Successed!", "success");
    }
    let responses = res.data.items;
    if (responses.length === 0) {
      this.setAlert("There is no result matched!", "danger");
    }
  };

  // get single user profile
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({ user: res.data, loading: false });
  };

  // clear all searched users
  clearUser = () => this.setState({ users: [], loading: false });

  //alert while no input
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  render() {
    const { loading, users, user, alert } = this.state;
    return (
      <Router>
        <Fragment>
          <Menu title="Friend Finder" icon="fab fa-github" />

          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <h1 className="font-weight-bold">Find your next friend</h1>

                    <Search
                      searchUser={this.searchUser}
                      clearUser={this.clearUser}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
