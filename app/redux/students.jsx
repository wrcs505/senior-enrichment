import axios from 'axios';

// Must add fetch thunked action creators to display all campuses/students for views


// Action types
const INIT  = 'INIT_STUDENTS';
const CREATE  = 'CREATE_STUDENT';
const UPDATE  = 'UPDATE_STUDENT';
const REMOVE  = 'REMOVE_STUDENT';

// Action creators
export const init = studentsObj => ({ type: INIT, studentsObj})

export const create = student => ({ type: CREATE, student})

export const update = student => ({
	type: UPDATE, student})

export const remove = id => ({
	type: REMOVE, id})


  // Reducer

export default function reducer (students = [], action) {
  switch (action.type) {
    case INIT:
      return action.studentsObj;

    case CREATE:
      return [action.student, ...students];

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    case UPDATE:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    default:
      return students;
  }
}

export const fetchStudents = () => dispatch => {
  axios.get('/api/student')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching students unsuccessful', err));
};

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/student/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching student unsuccessful', err));
};

// add student:
export const addStudent = (id) => dispatch => {
  axios.post(`/api/student/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching student unsuccessful', err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/student/${id}`, student)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/student/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};
