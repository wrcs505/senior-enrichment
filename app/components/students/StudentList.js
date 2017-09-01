import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent } from '../../redux/students';
import StudentItem from './StudentItem';
/*
Refactor to show students:

import { addUser } from '../../redux/users';
import UserItem from './UserItem';
*/

class StudentList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    name: '',
    email: ''
  };

    // this.filterUser = this.filterUser.bind(this);
    // this.renderUserSearch = this.renderUserSearch.bind(this);
    // this.renderNewUserWidget = this.renderNewUserWidget.bind(this);
    // this.submit = this.submit.bind(this);
  }

  render() {
    console.log('THE SL PROPS: ',this.props.students)
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
            // .map(student => <StudentItem student={student} key={student.id} />)
            .map(function(student) {
              console.log('Mapped student: ', student)
            })
          }


        </div>
      </div>
    );
  }

  // filterUser(story) {
  //   const nameMatch  = new RegExp(this.state.name, 'i');
  //   const emailMatch = new RegExp(this.state.email, 'i');
  //   const phoneMatch = new RegExp(this.state.phone, 'i');

  //   return nameMatch.test(story.name)
  //       && emailMatch.test(story.email)
  //       && phoneMatch.test(story.phone);
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

const mapState = ({ students }) => (
  // {
  //   isAdmin: currentUser && currentUser.isAdmin,
  //   users
  // }
  // console.log('In MAPPER: ',students)
  { students: students }
);

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(StudentList);
