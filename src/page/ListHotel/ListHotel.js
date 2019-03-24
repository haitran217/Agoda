import React from 'react';
import Filter from './components/Filter'
import Hotel from './components/Hotel'

class ListHotel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Filter />
                <Hotel />
            </div>
        );
    }
};

export default ListHotel;
