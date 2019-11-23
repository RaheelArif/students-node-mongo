import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentAction from './store/actions/studentAction';
import './App.css';
import uuid from 'react-uuid'

class App extends Component {
  state = {
    name: "",
    age: "", 
    id: uuid()
  }

  handleClick = () => {
this.setState({
  id: uuid()
})
    this.props.addStudent(this.state)
  }

  handleChange = (e) => {
    this.setState({
       
      [e.target.name]: e.target.value
    })
  }
  handleDelete = (e)=> {

this.props.delStudents(e.target.name)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input onChange={this.handleChange} name="name" type="text" />
        <input onChange={this.handleChange} name="age" type="number" />
        <button onClick={this.handleClick} >add student</button>
        {
          this.props.students.map(std => {
            return (
              <div>
                <span>{std.name} </span>
                <span>{std.age} </span>
                <button name={std.id} onClick={this.handleDelete} style={{ color: "red" }}> delete</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.StudentReducer.students
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => dispatch(StudentAction.addStudent(student)),
    delStudents: (id) => dispatch(StudentAction.delStudents(id))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
