import React,{Component} from 'react';
import Toshow from "./Components/Toshow/Toshow";
import Toadd from "./Components/Toadd/Toadd";
class App extends Component {
  state = {
    courses :[
      {name : "html"},
      {name : "css"},
      {name : "js"}
    ]
  }
  handleSubmit = (course) =>{
    const courses =this.state.courses;
    courses.push(course);
    this.setState({courses});
  }
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({courses})
  }
  updateCourse =(index,value)=>{
    let courses = this.state.courses;
    courses[index].name =value;
    this.setState({courses});
  }
  render() {
    const courses = this.state.courses;
    const coursesList =courses.map((course,index)=>{
      return(
        <Toshow detail={course.name} key={index} ind={index} deleteCourse={this.deleteCourse} editCourse ={this.editCourse} updateCourse={this.updateCourse} />
      )
    });
    return (
      <section className="App">
        <h2>Add Courses</h2>
        <Toadd handleSubmit= {this.handleSubmit} />
        <ul> {coursesList}</ul>
      </section>
    );
  }
}export default App;
