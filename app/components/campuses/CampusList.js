import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent } from '../../redux/students';
import CampusItem from './CampusItem';
/*
Refactor to show campuses:

import { addUser } from '../../redux/users';
import UserItem from './UserItem';
*/

// Make this funtional?
// Is an initial state needed?

class CampusList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    name: '',
    photo: ''
  };

    this.filterCampus = this.filterCampus.bind(this);
    // this.renderUserSearch = this.renderUserSearch.bind(this);
    // this.renderNewUserWidget = this.renderNewUserWidget.bind(this);
    // this.submit = this.submit.bind(this);
  }

  render() {
    // console.log('THE SL PROPS: ',this.props.campuses)
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
        <div className="campus-list">

          {/*
          this.props.campuses
            .filter(this.filterUser)
            .map(user => <UserItem campus={campus} key={campus.id} />)
          */}
          {
            this.props.campuses
            .filter(this.filterCampus)
            .map(campus => <CampusItem campus={campus} key={campus.id} photo={campus.photo}/>)
          }


        </div>
      </div>
    );
  }

  filterCampus(campus) {
    const nameMatch  = new RegExp(this.state.name, 'i');
    const emailMatch = new RegExp(this.state.email, 'i');
    const phoneMatch = new RegExp(this.state.phone, 'i');

    return nameMatch.test(campus.name)
        && emailMatch.test(campus.email)
        && phoneMatch.test(campus.phone);
  }

  // submit(event) {
  //   event.preventDefault();
  //   const campus = {
  //     name: event.target.name.value,
  //     email: event.target.email.value
  //   };
  //   this.props.addStudent(campus);
  //   // clear the inputs
  //   event.target.name.value = '';
  //   event.target.email.value = '';
  // }


}

const mapState = ({ campuses, currentStudent }) => (
  // {
  //   isAdmin: currentUser && currentUser.isAdmin,
  //   users
  // }

  {
    campuses,
    currentStudent
  });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(CampusList);
