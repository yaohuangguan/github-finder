import React, { Component } from "react";
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
       loading: PropTypes.bool.isRequired,
       user:PropTypes.object.isRequired,
       getUser:PropTypes.func.isRequired,
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

    if(loading) return <Spinner/>
   
    
    return <>
    <Link to="/" className='btn btn-light'>Back to home</Link><br/>
    Hireable:{' '}
    {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

    Name:{''}
    {name ? name : <p>No Name Provided!</p> }

    </>;
  }
}
export default User;
