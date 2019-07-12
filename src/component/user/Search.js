import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.text === ''){
     this.props.setAlert('Please enter text', 'danger')
    }else {
     this.props.searchUser(this.state.text);
     this.setState({ text: '' });
    }
   
  };
  render() {

     const { showClear, clearUser} = this.props;
    return (
      <div>
        <form action="" onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="search"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
            id="spin"
          />
          {showClear && (
            <button
              className="btn btn-light btn-block"
              onClick={clearUser}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
