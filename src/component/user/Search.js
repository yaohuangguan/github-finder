import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

function Search({ setAlert }) {
  const [text, settext] = useState("");
  const githubContext = useContext(GithubContext);

  const onChange = e => {
    settext(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter text", "danger");
    } else {
      githubContext.searchUser(text);
      settext("");
    }
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          plac
          eholder='search'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
          id='spin'
        />
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
         </form>
        
     
    </div>
  );
}
Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
