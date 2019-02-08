import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HomeListRow = ({lineitem}) => {
    //debugger;
    return (
        <tr>
            <td>{lineitem.title1}</td>
            <td>{lineitem.title2}</td>
        </tr>
    );
};

HomeListRow.propTypes = {
    lineitem: PropTypes.object.isRequired
};

export default HomeListRow;
