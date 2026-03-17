import React from 'react';

const List = ({route}) => {
    // console.log(route)
    return (
        <div>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default List;