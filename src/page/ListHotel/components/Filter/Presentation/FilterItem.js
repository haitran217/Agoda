import '../../../../../styles/views/filter-item.scss'
import React from 'react';

export default class FilterItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false,
    }
    this.showAll = this.showAll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  showAll() {
    this.setState({
      showTooltip: !this.state.showTooltip
    })
  }

  handleInputChange(event) {
    this.props.changeStatus(event.target.name, event.target.checked)
  }

  render() {
    const itemFilter = this.props.content.map((element, index) => {
      return (
        <div key={index} >
          <input
            name={element.content}
            type="checkbox"
            checked={this.props.status}
            onChange={this.handleInputChange}/>
          <label>{element.content}</label>      
        </div>
      )
    })
    return (
      <div className='filter-item'>
        {this.state.showTooltip && <div className = {`filter-item__content ${this.props.position}`}>
          <form>
            {itemFilter}
          </form>
        </div>}
        <button className="filter-item__button" onClick={this.showAll}>{this.props.children}</button>
      </div>
    );
  }
}

FilterItem.defaultProps = {
  position: 'bottom'
};