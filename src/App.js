import React, { Fragment, Component } from "react";
import "./App.css";
import Menu from "./component/layout/Menu";
import Users from "./component/user/Users";
import axios from "axios";
import Search from "./component/user/Search";
import Alert from "./component/layout/Alert";
class App extends Component {
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }

  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchUser = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({ users: res.data.items, loading: false });
  };

  clearUser = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert:{ msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  render() {
    return (
      <Fragment>
        <Menu title="Friend Finder" icon="fab fa-github" />

        <div className="container">
          <Alert alert={this.state.alert} />
          <h1 className="font-weight-bold">Find your next friend</h1>

          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
