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
    console.log('THE SI Campus: ',this.props.campus,this.props.campus)
    const { student } = this.props;
    // console.log('THE ORIGINAL STUDENT: ',student)
    var campus = ""
    if (this.props.campus.length > 0) {
      campus = this.props.campus[0].name
    } else {
      campus = 'No Campus Assigned'
    }

    // console.log('THE STUDENT: ',student)
    // console.log('THE STATE: ',this.state)
    if (!student) return null
      // if (!campus) return null

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
        <h5 className="tucked">
          <span>{campus}</span>
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
