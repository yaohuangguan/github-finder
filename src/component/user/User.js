import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);

    //eslint-disable-next-line
  }, []);

  const {
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
    company,
    public_repos,
    public_gists
  } = user;

  if (loading)
    return (
      <div className='all-center'>
        <Spinner />
      </div>
    );

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back to home
      </Link>
      <br />
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: "150px" }}
            alt=''
          />

          <h1>
            {" "}
            {""}
            {name ? name : <p>No Name Provided!</p>}
          </h1>

          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}

          <a href={html_url} className='btn btn-dark my-1' target='blank'>
            Visit Github page
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username:</strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company:</strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website:</strong>
                  <a href={blog} target='blank'>
                    {" "}
                    {blog}
                  </a>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        <div className='badge badge-primary'>Following:{following}</div>
        <div className='badge badge-success'>Followers:{followers}</div>
        <div className='badge badge-light'>public repos:{public_repos}</div>
        <div className='badge badge-dark'>public gist:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
