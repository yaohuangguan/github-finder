import React, { Component } from "react";

class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
     const{
          name,
          avatar_url,
          location,
          bio,
          blog,
          login,
          html_url,
          followers,
          following,
          hireable,
          public_repos,
          public_gists

     } = this.props.user;
    const { loading } = this.props;

    return <div>
    this is {name}</div>;
  }
}
export default User;
