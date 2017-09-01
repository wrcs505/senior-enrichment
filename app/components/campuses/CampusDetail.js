import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import StudentItem from '../students/StudentItem';
import CampusItem from './CampusItem';
import { updateStudent, fetchStudent } from '../../redux/students';

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { campus } = this.props;
    // console.log('THE Camp DETAIL PROPS: ',this.props)
    // if (!user) return <div />  // the user id is invalid or data isn't loaded yet
    // const authorized = currentUser && (currentUser.isAdmin || currentUser.id === user.id);
    return (
      <div className="container">
        <CampusItem campus={campus} />
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Campus Info</h2>
          </div>
          <ul className="list-group">
            {

              <form className="list-group-item story-item" onSubmit={this.onSubmit}>
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
                <input
                  name="campus"
                  type="text"
                  className="form-like"
                  required
                  placeholder="Assign Campus"
                />
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
    event.preventDefault();
    const { updateStudent } = this.props;
    const student = {
      name: event.target.name.value,
      campus_Id: event.target.campus.value,
      email: event.target.email.value
    };
    updateStudent(student);
    event.target.name.value = '';
    event.target.campus.value = '';
    event.target.email.value = '';
  }
}


  /* -----------------    CONTAINER     ------------------ */
const mapState = function(state,ownProps) {
  // console.log('The SD STATE: ', state)
  const campus = state.campuses.find(aCampus => aCampus.id === +ownProps.match.params.id)
  // const studentId = ownProps.
  // console.log('The SD STUDENT STATE: ',student)

  // return state
  return {
    campus,
    state
  }
}


const mapDispatch = { updateStudent, fetchStudent };

export default connect(mapState, mapDispatch)(CampusDetail);
