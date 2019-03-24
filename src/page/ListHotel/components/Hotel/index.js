import React from 'react';
import HotelItem from './Presentation/HotelItem'
import axios from 'axios';
// import '../../../../styles/views/hotel.scss'

class Hotel extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get('https://demo0535107.mockable.io/agoda')
            .then(res => {
                this.setState({
                    listHotel: res.data.ResultList
                })

            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        let hotel
        if (this.state.listHotel) {
            hotel = this.state.listHotel.map((element, index) => {
                return (
                    <HotelItem key={index} dataHotel={element} />
                );
            })
        }

        return (
            <div className="hotel">
                {hotel}
            </div>
        );

    }
}

export default Hotel;