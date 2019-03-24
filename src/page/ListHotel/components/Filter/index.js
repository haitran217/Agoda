import React from 'react';
import FilterItem from './Presentation/FilterItem'
import '../../../../styles/views/filter.scss'

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filterList: [{
        value: 'Phổ biến',
        title: 'Chọn lọc phổ biến ở Hà Nội',
        listItem: [
          {
            status: false,
            content: 'Khu Phố Cổ'
          }, {
            status: false,
            content: 'Khu Quận Hoàn Kiếm'
          }, {
            status: false,
            content: 'phù hợp cho gia đình/trẻ em'
          }, {
            status: false,
            content: 'Nhà Khách / Nhà nghỉ B&B'
          }, {
            status: false,
            content: 'bãi đậu xe'
          }, {
            status: false,
            content: 'quy định hút thuốc (có phòng không hút thuốc)'
          }, {
            status: false,
            content: 'Quầy lễ tân 24h'
          }
        ]
      },
      {
        value: 'Xếp hạng sao',
        title: 'Xếp hạng sao',
        listItem: [
          {
            status: false,
            content: 5
          }, {
            status: false,
            content: 4
          }, {
            status: false,
            content: 3
          }, {
            status: false,
            content: 2
          }, {
            status: false,
            content: 1
          }, {
            status: false,
            content: 0
          }
        ]
      }],

      listFilter: []
    }

    this.checkedItem = this.checkedItem.bind(this);
  }

  checkedItem(content, status) {
    let temp = this.state.listFilter;
    if (status === true) {
      temp.push(content);
    } else {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i] === content) {
          temp.splice(i, i + 1)
        }
      }
    }
    this.setState({
      listFilter: temp
    })
  }

  render() {
    const listFilter = this.state.filterList.map((element, index) => {
      return <FilterItem
        changeStatus={this.checkedItem}
        status={element.status}
        show={element.showTooltip}
        key={index}
        content={element.listItem}
        position='bottom'
        children={element.value} />
    })

    return (
      <div className="filter">
        <div className="filter__content">
          <p className="filter__header">Chọn lọc</p>
          {listFilter}
        </div>
      </div>
    );
  }
}

export default Filter;