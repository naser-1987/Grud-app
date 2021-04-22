import React,{ Component } from 'react';
class Toadd extends Component{
  state={
    name : ""
  }
  handleChange =(e)=>{
    
  this.setState({name :e.target.value});  

  }
  handleSubmit = (e)=> {
    e.preventDefault();
    if(this.state.name!==""){
      this.props.handleSubmit(this.state);
      
    }
  }
  render(){

    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type ="text" id="inpCourse" onChange={this.handleChange}/>
          <button type="submit">Add Course</button>
        </form>
      </div>

    )
  }

}
export default Toadd;