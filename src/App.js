import React, {Fragment,Component} from 'react';
import './App.css';
import Menu from './component/layout/Menu'
import Users from './component/user/Users'
import axios from 'axios'
import Search from './component/user/Search'
class App extends Component{

  
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }

state = {
  users:[],
  loading:false,
}

searchUser = async (text) => {
  this.setState({loading:true})
  const load = document.querySelector('#spin')
  load.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...';
  load.classList.add('disabled')
  const res = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)

  this.setState({users:res.data.items, loading:false})
  load.classList.remove('disabled')
}


  render(){
   
    return (

    <Fragment>
    <Menu title="Friend Finder" icon="fab fa-github" />
   

       <div className="container">

         <br/><br/><br/><br/>
        <h1 className="font-weight-bold">Find your next friend</h1>

         <Search searchUser={this.searchUser}/>
           <Users loading={this.state.loading} users={this.state.users} />
         </div>
      
    </Fragment>
    
  );}
 
}

export default App;
