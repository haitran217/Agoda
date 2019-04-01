import React from 'react';
import Filter from './components/Filter'
import Hotel from './components/Hotel'
import axios from 'axios';

class ListHotel extends React.Component {
  constructor() {
    super();
    this.state = {
      allData: {},
      listFilter:[]
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get('http://demo3916652.mockable.io/produc')
    .then(res => {
      this.setState({
        allData: res.data
      })
      this.getListFilter();
    })
    .catch(err => {
      console.log(err);
    })
  }

  getListFilter() {
    let list = []
    Object.keys(this.state.allData.FilterList).map(key => {
      if (key === 'Popular'){
        list.push({...this.state.allData.FilterList[key]})
      }
    })

    this.setState({
      listFilter: list
    })
  }

  render() {
    return (
      <div>
        <Filter data = {this.state.listFilter}/>
        <Hotel />
      </div>
    );
  }
};

export default ListHotel;
