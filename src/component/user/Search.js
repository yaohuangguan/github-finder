import React, { Component } from 'react'

export class Search extends Component {



     state={
          text:''
     }
     onChange = (e) =>{
               this.setState({[e.target.name]:e.target.value})

     }

     onSubmit = (e) => {
          e.preventDefault();
          this.props.searchUser(this.state.text);
          this.setState({text:''})
     }
     render() {
          return (
               <div>
                    <form action="" onSubmit={this.onSubmit} className="form">
                         <input type="text" name="text" value={this.state.text}  onChange={this.onChange} placeholder="search"/>
                         <input type="submit" value="Search" className="btn btn-dark btn-block" id="spin"/>
                    </form>
               </div>
          )
     }
}

export default Search
