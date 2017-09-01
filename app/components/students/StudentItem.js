import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeStudent } from '../../redux/students';
import { removeCampus } from '../../redux/campuses';


export default class StudentItem extends React.Component {

  constructor (props) {
    super(props);
    this.removeStudentCallback = this.removeStudentCallback.bind(this);
  }

  render () {
    console.log('THE SI PROPS: ',this.props)
    const { student } = this.props;
    // console.log('THE STUDENT: ',student)
    // console.log('THE SECOND PROPS: ',this.props)
    if (!student) return null
    return (
      <div className="student-item">
        <NavLink
        className="media-body"
        activeClassName="active"
        to={`/student/${student.id}`}>
          <h4 className="media-heading tucked">
            <span placeholder="Jean Doe">{student.name}</span>
          </h4>
        </NavLink>
        <h5 className="tucked">
          <span>{student.email}</span>
        </h5>
        <button className="btn btn-default" onClick={this.removeStudentCallback}>
          <span className="glyphicon glyphicon-remove">X</span>
        </button>
      </div>
    );
  }


  removeStudentCallback (event) {
    const { removeStudent, removeCampus, student, campus } = this.props;
    event.stopPropagation();
    removeStudent(student.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

// const mapState = ({ student }, ownProps) => ({student})

// const mapDispatch = { removeStudent, removeCampus };

// export default connect(mapState, mapDispatch)(StudentItem);
