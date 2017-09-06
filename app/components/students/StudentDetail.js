import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import StudentItem from './StudentItem';
import CampusItem from '../campuses/CampusItem';
import { updateStudent, fetchStudent } from '../../redux/students';
import { fetchCampuses } from '../../redux/campuses';

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      campus: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount () {
  //   this.props.fetchStudents()
  //   this.props.fetchCampuses()
  // }

  // componentWillReceiveProps (newProps) {

  //   if (newProps.match.params.id !== this.props.match.params.id) {
  //     this.props.fetchStudentData();
  //   }

  //   this.setState({
  //     name: newProps.name,
  //     email: newProps.email,
  //     campus: newProps.campus
  //   });
  // }

  handleSelectChange(event) {
    this.setState({
      campus: event.target.campus
    })
  }

  handleInputChange(event) {
    // console.log(event)
    const target = event.target;
    const value = target.value;

    const name = target.name;
    // const email = target.email;

    this.setState({
      [name]: value
    });
  }

  // fix onSubmit and select/option form
  handleSubmit(event) {
    event.preventDefault();


    const { updateStudent } = this.props;
    const student = {
      name: event.target.name.value,
      campusId: event.target.campus.value,
      email: event.target.email.value
    };
    // console.log("UPDATE NEW_STUDENT CHECK: ", newStudent)
    console.log("UPDATE STUDENT PROP CHECK: ", Number(this.props.match.params.id))
    console.log("UPDATE STUDENT EVENT CHECK: ", event)
    updateStudent(Number(this.props.match.params.id), student);
    // updateStudent(this.props.student.id, student)
    this.setState({
      student
    })
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
  }

  render() {
    // console.log("111NEW STUDENT TEST: ",this.props.students)
    // console.log("111NEW CAMPUSES TEST: ",this.props.campuses)
    // console.log('111THE Student DETAIL STATE: ',this.state)
    // console.log('111THE Student DETAIL PROPS: ',this.props)
    var firstId = Number(this.props.match.params.id)
    var student = this.props.students.filter(function(studentObj) {
      // console.log("STUDENTOBJ ID: ",studentObj.id,"CALCED ID: ",firstId)
      // console.log("CALCED ID: ",id)
      return (studentObj.id === firstId)
    })
    var newStudent = student[0]
    console.log("111NEW STUDENT: ",student[0])

    // var secondId = student.campusId;
    var campuses = this.props.campuses
    // .filter(function(campusObj) {
    //   console.log("CAMPUS OBJ ID: ",campusObj.id,"CALCED ID: ",secondId)
    //   return (campusObj.id === secondId)
    // })




    console.log("111NEW CAMPUSES: ",campuses)
    // console.log('THE Student DETAIL MATCH PARAM: ',typeof this.props.match.params.id)

    // console.log('THE Student DETAIL STATE: ', this.state)
    // if (!user) return <div />  // the user id is invalid or data isn't loaded yet
    // const authorized = currentUser && (currentUser.isAdmin || currentUser.id === user.id);
    if (!student) return <div />
    if (!campuses) return <div />
    return (
      <div className="container">
        <StudentItem student={newStudent} campus={campuses}/>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Student Info</h2>
          </div>
          <ul className="list-group">
            {
              <form
              //className="list-group-item story-item"
              onSubmit={this.handleSubmit}
              // name="updater"
              >
                <input
                  name="name"
                  type="text"
                  // className="form-like"
                  required
                  placeholder="Edit Student Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <input
                  name="email"
                  type="text"
                  // className="form-like"
                  required
                  placeholder="Edit Student Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <select name="campus" value={this.state.campus} onChange={this.handleSelectChange}>
                <option value="">Select Campus</option>
                  {

                    campuses.map(campus => (
                      // console.log('a campus: ', campus);
                      <option
                      name="campus"
                      key={campus.id}
                      // value={this.state.campus}
                      value = {campus.id}
                      placeholder="Select Campus">
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
  console.log("MAPPED OWNPROPS: ",ownProps)
  console.log("MAPPED STATE: ",state)
  // const student = state.students.find(aStudent => aStudent.id === +ownProps.match.params.id)
  // const campuses = state.campuses;
  // const student = state.fetchStudent(+ownProps.match.params.id);
  // const campuses = state.fetchCampuses();
  // console.log("MAPPED STUDENT: ", student)
  // console.log("MAPPED CAMPUSES: ", campuses);
  // return {
  //   student,
  //   campuses,
  //   state
  // }
  return state;
}


// const mapDispatch = function(dispatch, ownProps) {

//   console.log('The SD STUDENT STATE + ID: ', ownProps)
//   return {
//     updateStudent: function(id, student) {
//       dispatch(updateStudent(id, student));
//     },
//     fetchStudentData: function() {
//       const id = ownProps.match.params.id;
//       console.log("MAPPER ID CHECK: ", id);
//       dispatch(fetchStudent(id))
//     },
//     fetchCampusesData: function() {
//       dispatch(fetchStudent())
//     },
//     fetchStudentsData: function() {
//       dispatch(fetchStudent())
//     }
//   }

// }

const mapDispatch = { updateStudent, fetchStudent, fetchCampuses };

export default connect(mapState, mapDispatch)(StudentDetail);
