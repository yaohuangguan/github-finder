import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'

import {useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
const Users = () => {

     const githubContext = useContext(GithubContext)
     if(githubContext.loading){
          return  (

          <div className="all-center">
               <Spinner/>
          </div>
               
               
               )
          

     }
     else{
          return (
               <>
               <div className="row">
                   
                         {githubContext.users.map(user => (
                              <Useritem key={user.id} user={user} />))}
                   
               </div>
               </>
          )
  
     }
    
    
         
    
}
// const userStyle = {display:'grid',displayTemplateColumns:'repeat(3,1fr)',gridGap:'1rem'}


export default Users
