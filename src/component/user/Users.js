import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({users, loading}) => {

     if(loading){
          return  <Spinner/>
          

     }
     else{
          return (
               <>
               <div className="row">
                   
                         {users.map(user => (
                              <Useritem key={user.id} user={user} />))}
                   
               </div>
               </>
          )
  
     }
    
    
         
    
}
// const userStyle = {display:'grid',displayTemplateColumns:'repeat(3,1fr)',gridGap:'1rem'}
Users.propTypes = {
     user:PropTypes.array.isRequired,
     loading:PropTypes.bool.isRequired,
}

export default Users
