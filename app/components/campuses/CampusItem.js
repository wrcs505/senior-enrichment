import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeStudent } from '../../redux/students';
import { removeCampus } from '../../redux/campuses';


class CampusItem extends React.Component {

  constructor (props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  render () {
    // console.log('THE PROPS: ',this.props)
    const { campus } = this.props;
    // console.log('THE STUDENT: ',campus)
    // console.log('THE SECOND PROPS: ',this.props)
    if (!campus) return null
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
          {/*<img src={`/../../images/${campus.name}.png`} />*/}
          <img src={ campus.photo } />
        </div>
        <button className="btn btn-default" onClick={this.removeCampusCallback}>
          <span className="glyphicon glyphicon-remove">X</span>
        </button>
      </div>
    );
  }


  removeCampusCallback (event) {
    const { campus } = this.props;
    // console.log(campus.id);
    event.stopPropagation();
    removeCampus(campus.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = function(state,ownProps) {
  return state
}

const mapDispatch = function(dispatch, ownProps) {
  return {
    removeCampus: function(id) {
      dispatch(removeCampus(id))
    }
  }
};

export default connect(mapState, mapDispatch)(CampusItem);
