import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

// import base components
import Root from './components/Root';
import history from './history';
// import Home from './components/Home';
// import specific campus + student components
import CampusList from './components/campuses/CampusList';
import StudentList from './components/students/StudentList';
import StudentItem from './components/students/StudentItem';
import StudentDetail from './components/students/StudentDetail';
// import thunked action creators from redux
import { fetchStudents } from './redux/students';
import { fetchCampuses } from './redux/campuses';


class Routes extends Component {

  // Build thunks(?) for data handling/rednering
  componentDidMount () {
    this.props.fetchInitialData();
  }


  // Configure routes for students and campuses components
  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            {/*<Route exact path="/" component={CampusList} />*/}
            <Route exact path="/student" component={
              StudentList} />
            <Route path="/student/:id" component={StudentDetail} />
            <Route exact path="/campus" component={CampusList} />
            {/*<Route path="/campus/:id" component={CampusDetail} />
            <Route component={Home} /> */}
          </Switch>
        </Root>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

// Configure for students and campuses
const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Routes);
