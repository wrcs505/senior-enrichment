import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent, fetchStudent } from '../../redux/students'
import { fetchCampuses } from '../../redux/campuses';
import StudentItem from './StudentItem';
/*
Refactor to show students:

import { addUser } from '../../redux/users';
import UserItem from './UserItem';
*/

class StudentList extends Component {
  constructor(props) {
    super(props);

  // this.state = {
  //   name: '',
  //   email: ''
  // };

    // this.filterStudent = this.filterStudent.bind(this);
    // this.renderUserSearch = this.renderUserSearch.bind(this);
    // this.renderNewUserWidget = this.renderNewUserWidget.bind(this);
    // this.submit = this.submit.bind(this);
  }

  render() {
    console.log('THE SL PROPS: ',this.props)
    // console.log('THE SL STATE: ', this.state)
    return (
      <div className="container">
        {/*
        <div className="user-query">
          { this.renderUserSearch() }
          { this.props.isAdmin ? this.renderNewUserWidget() : null }
        </div>
        <br />
        <br />
        */}
        <div className="user-list">

          {/*
          this.props.students
            .filter(this.filterUser)
            .map(user => <UserItem student={student} key={student.id} />)
          */}
          {
            this.props.students
            // .filter(this.filterStudent)
            .map(student => <StudentItem
              student={student}
              key={student.id}
              campus={
                this.props.campuses.filter(function(campusObj) {
                  return (campusObj.id === student.campusId)
                  // if (campusObj.id === student.campusId) {
                  //   return campusObj.name
                  // }
                  // else {
                  //   return "No Campus Assigned"
                  // }
                })
              }
              />)
            // .map(function(student) {
            //   console.log('Mapped student: ', student)
            // })
          }


        </div>
      </div>
    );
  }
  // What is this filter doing?
  // filterStudent(student) {
  //   const nameMatch  = new RegExp(this.state.name, 'i');
  //   const emailMatch = new RegExp(this.state.email, 'i');
  //   const phoneMatch = new RegExp(this.state.phone, 'i');

  //   return nameMatch.test(student.name)
  //       && emailMatch.test(student.email)
  //       && phoneMatch.test(student.phone);
  // }

  // submit(event) {
  //   event.preventDefault();
  //   const student = {
  //     name: event.target.name.value,
  //     email: event.target.email.value
  //   };
  //   this.props.addStudent(student);
  //   // clear the inputs
  //   event.target.name.value = '';
  //   event.target.email.value = '';
  // }


}

const mapState = function(state) {
  // {
  //   isAdmin: currentUser && currentUser.isAdmin,
  //   users
  // }
  // {
  //   campuses: state.campuses
  // }
  // console.log('In MAPPER: ',students)
  console.log('In MAPPER: ', state)
  return state
  }


const mapDispatch = { addStudent, fetchStudent, fetchCampuses };

export default connect(mapState, mapDispatch)(StudentList);
