import React, {PropTypes} from 'react';
import HomeListRow from './homeListRow';

const HomeList = ({lineitems}) => {
    //debugger;
    return (
        <table className="table">
            <thead>

            </thead>
            <tbody>
            {lineitems.map(lineitem =>
                <HomeListRow key={lineitem.id} lineitem={lineitem}/>
            )}
            </tbody>
        </table>
    );
};

HomeList.propTypes = {
    lineitems: PropTypes.array.isRequired
};

export default HomeList;
