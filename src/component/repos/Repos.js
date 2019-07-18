import React from 'react'
import Repoitem from './Repoitem'
import PropTypes from 'prop-types'

const Repos = ({repos}) => {
     return repos.map(repo =><Repoitem repo={repo} key={repo.id} /> )
}

Repos.prototype={
     repos:PropTypes.array.isRequired,
}
export default Repos
