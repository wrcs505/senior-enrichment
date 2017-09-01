import axios from 'axios';

const INIT  = 'INIT_CAMPUSES';
const CREATE  = 'CREATE_CAMPUS';
const UPDATE  = 'CREATE_CAMPUS';
const REMOVE  = 'REMOVE_CAMPUS';


export const init = campusesObj => ({ type: INIT, campusesObj})

export const create = campus => ({ type: CREATE, campus})

export const update = campus => ({
	type: UPDATE, campus})

export const remove = id => ({
	type: REMOVE, id})


export default function reducer (campuses = [], action) {
  switch (action.type) {

    case INIT:
      return action.campusesObj;

    case CREATE:
      return [action.campus, ...campuses];

    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);

    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return campuses;
  }
}

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching campus unsuccessful', err));
};

// add campus:
export const addCampus = (id) => dispatch => {
  axios.post(`/api/campus/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching campus unsuccessful', err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};

export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campus/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};
