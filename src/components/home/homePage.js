import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import HomeList from './homeList';
import * as homeActions from '../../actions/homeActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class HomePage extends React.Component {

    constructor(props,context){
        super(props,context);

    }

    render() {
        //debugger;
        return (
            <div className="jumbotron">
                <h2>Home</h2>
                <HomeList lineitems={this.props.homeinfo}/>
            </div>
        );
    }
}

HomePage.propTypes = {
    homeinfo: PropTypes.array.isRequired
};



function mapStateToProps(state, ownProps) {
    return {
        homeinfo: state.homeInfo
    };
}


export default connect(mapStateToProps)(HomePage);
