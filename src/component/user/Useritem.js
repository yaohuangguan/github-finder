import React from 'react'
import PropTypes from 'prop-types'

const Useritem = (props)=> {

     
          const { login, avatar_url, html_url,repos_url} = props.user;
          
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
                                                            <a href={repos_url} className="btn btn-dark">Repo</a>
                                                            <a href={html_url} className="btn btn-dark">More</a>
                                                       </div>
                                          
                                             
                                      
                                   
                  
          )
     
}
Useritem.propTypes = {
     user:PropTypes.object.isRequired,
}

export default Useritem
