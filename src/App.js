import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Menu from "./component/layout/Menu";
import Alert from "./component/layout/Alert";
import About from "./component/page/About";
import User from "./component/user/User";
import Home from "./component/page/Home";
import NotFound from "./component/page/NotFound";
import "./App.css";
const App = () => {
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <>
            <Menu title='Friend Finder' icon='fab fa-github' />

            <div className='container'>
              <Alert />
              <h2 className="font-weight-bold">Find your next friend</h2>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={Home} />
              </Switch>
            </div>
          </>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
