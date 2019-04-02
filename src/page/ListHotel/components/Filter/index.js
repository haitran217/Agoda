import React from 'react';
import FilterItem from './Presentation/FilterItem'
import '../../../../styles/views/filter.scss'
import { log } from 'handlebars';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      listFilter: []
    }

    this.checkedItem = this.checkedItem.bind(this);
    // this.listFilter = this.listFilter.bind(this);
  }

  checkedItem(data, status) {
    let temp = this.state.listFilter;
    if (status === true) {
      temp.push(data);
    } else {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].content === data.content) {
          temp.splice(i, i + 1)
        }
      }
    }
    console.log(temp);
    
    this.setState({
      listFilter: temp
    })
  }
  render() {
    let listFilter = this.props.data.map((element, index) => {
      return <FilterItem
        key = {index}
        content = {element.ItemList}
        position = 'bottom'
        children = {element.value}
        filterId = {element.FilterId}
        changeStatus = {this.checkedItem} />
    })

    return (
      <div className="filter">
        <div className="filter__content">
          <span className="filter__header">Chọn                             lọc</span>
          {listFilter}
        </div>
      </div>
    );
  }
}

export default Filter;