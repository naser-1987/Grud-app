import React,{ Component ,Fragment } from 'react';
class Toshow extends Component{
  state = {
    isFalse :false
  }
  toggel = ()=>{
    let {isFalse} =this.state;    
    this.setState({isFalse :!isFalse})
  }
  course = () =>{
    return(
      <li> 
        <span>{this.props.detail} </span>
        <button onClick= {()=>(this.toggel())} > Edit Course </button>
        <button onClick= {()=>this.props.deleteCourse(this.props.ind)}> Delete Course </button>
      </li>
    )
  }
  editCourse = (index) => {

    return(
      <form onSubmit={()=>this.update(this.props.ind,this.input.value)}>
        <input type = "text" id ="nameCourse" defaultValue = {this.props.detail} ref ={(v)=>this.input=v}  />
        <button type="submit" >Update Course</button>
      </form>
    )
  }
  update =(index,value)=>{
    this.toggel();
    this.props.updateCourse(index,value);
  }
  render(){
    return (
      <Fragment >
       {this.state.isFalse?this.editCourse(this.props.ind):this.course()} 
      </Fragment>
    )
  }
}
export default Toshow;