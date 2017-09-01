import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import StudentItem from './StudentItem';
import CampusItem from '../campuses/CampusItem';
import { updateStudent, fetchStudents } from '../../redux/students';

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { student, campuses } = this.props;
    // console.log
    console.log('THE Student DETAIL PROPS: ',this.props)
    // if (!user) return <div />  // the user id is invalid or data isn't loaded yet
    // const authorized = currentUser && (currentUser.isAdmin || currentUser.id === user.id);
    return (
      <div className="container">
        <StudentItem student={student} />
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Student Info</h2>
          </div>
          <ul className="list-group">
            {
              <form className="list-group-item story-item" onSubmit={this.onSubmit} name="updater">
                <input
                  name="name"
                  type="text"
                  className="form-like"
                  required
                  placeholder="Assign Student Name"
                />
                <input
                  name="email"
                  type="text"
                  className="form-like"
                  required
                  placeholder="Assign Student Email"
                />
                <select form="updater" name="campUp">
                  {
                    campuses.map(campus => (
                      <option key={campus.id} value={campus.id}>
                        {campus.name}
                      </option>
                    ))
                  }
                </select>
                <button type="submit" className="btn btn-warning btn-xs">
                  <span className="glyphicon glyphicon-plus">Submit Info</span>
                </button>
              </form>
            }
            {
              // students
              // .filter(story => story.author_id === user.id)
              // .map(story => <StoryItem story={story} key={story.id} />)
            }
          </ul>
        </div>
      </div>
    );
  }

  onSubmit(event) {
    console.log('event target: ', event.target);
    event.preventDefault();
    const { updateStudent } = this.props;
    const student = {
      name: event.target.name.value,
      campus_Id: event.target.campUp.selected,
      email: event.target.email.value
    };
    updateStudent(this.props.student.id, student);
    event.target.name.value = '';
    // event.target.camp.value = '';
    event.target.email.value = '';
  }
}


  /* -----------------    CONTAINER     ------------------ */
// const mapState = ({ students }, ownProps) => // ({students})
//   {
//   const paramId = Number(ownProps.match.params.id);
//   return {
//     student: _.find(students, student => student.id === paramId),
//     students
//   }
// };

const mapState = function(state,ownProps) {

  const student = state.students.find(aStudent => aStudent.id === +ownProps.match.params.id)
  const campuses = state.campuses;

  return {
    student,
    campuses,
    state
  }
}


const mapDispatch = function(dispatch, ownProps) {

  console.log('The SD STUDENT STATE + ID: ', ownProps.student)
  return {
    updateStudent: function(id, student) {
      dispatch(updateStudent(id, student));
    }
  }

}

export default connect(mapState, mapDispatch)(StudentDetail);
