import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeStudent } from '../../redux/students';
import { removeCampus } from '../../redux/campuses';


class CampusItem extends React.Component {

  constructor (props) {
    super(props);
    // this.removeStudentCallback = this.removeStudentCallback.bind(this);
  }

  render () {
    // console.log('THE PROPS: ',this.props)
    const { campus } = this.props;
    // console.log('THE STUDENT: ',campus)
    // console.log('THE SECOND PROPS: ',this.props)
    return (
      <div className="campus-item">
        <NavLink
        className="media-body"
        activeClassName="active"
        to={`/campus/${campus.id}`}>
          <h4 className="media-heading tucked">
            <span placeholder="Jean Doe">{campus.name}</span>
          </h4>
        </NavLink>
        {/*<h5 className="tucked">
          <span>{campus.photo}</span>
        </h5>*/}
        <div>
          <img src={`/../../images/${campus.name}.png`} />
        </div>
        <button className="btn btn-default" onClick={this.removeStudentCallback}>
          <span className="glyphicon glyphicon-remove">X</span>
        </button>
      </div>
    );
  }


  removeStudentCallback (event) {
    const { removeStudent, removeCampus, student, campus } = this.props;
    event.stopPropagation();
    removeStudent(campus.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }, ownProps) => ({campuses})

const mapDispatch = { removeStudent, removeCampus };

export default connect(mapState, mapDispatch)(CampusItem);
