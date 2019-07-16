import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Useritem = (props)=> {

     
          const { login, avatar_url, html_url} = props.user;
          
          return (
              
                    
                              
                              
                                                
                                                       <div className="card text-center" >
                                                            <div className="card-img">
                                                                 <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}} />
                                                            </div>
                                                            <div className="card-body">
                                                                 <div className="card-title">
                                                                      <h3>
                                                                           {login}
                                                                      </h3>
                                                                      
                                                                 </div>
                                                                 
                                                            </div>
                                                            <Link to={`/user/${login}`} className="btn btn-dark">User</Link>
                                                            <a href={html_url} className="btn btn-dark" target="blank">More</a>
                                                       </div>
                                          
                                             
                                      
                                   
                  
          )
     
}
Useritem.propTypes = {
     user:PropTypes.object.isRequired,
}

export default Useritem
