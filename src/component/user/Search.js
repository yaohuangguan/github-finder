import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const [text, settext] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChange = e => {
    settext(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter text", "danger");
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

export default Search;
