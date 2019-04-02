import '../../../../../styles/views/filter-item.scss'
import React from 'react';

export default class FilterItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false,
      checked: false
    }
    this.wrapperRef = React.createRef();
    this.showAll = this.showAll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  showAll() {
    this.setState({
      showTooltip: !this.state.showTooltip
    })
  }

  handleInputChange(event) {
    this.setState({
      checked : !this.state.checked
    })
    let data = {
      id: this.props.filterId,
      content: event.target.name
    }
    this.props.changeStatus(data, event.target.checked)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick = (event) => {
    const { target } = event
    if (!this.wrapperRef.current.contains(target)) {
      this.setState({
        showTooltip: false
      })
    }
  }

  render() {
    const itemFilter = this.props.content.map((element, index) => {
      return (
        <div key={index} >
          <input
            name = {element.Name}
            type = "checkbox"
            checked = {this.state.checked}
            onChange = {this.handleInputChange}
            idfilter = {this.props.filterId}  />
          {element.Name && <label className = "nonestart">{element.Name}</label>}
          {this.props.filterId === 'starratingFilterList' && <label className = "start">{element.Id}</label>}
        </div>
      )
    })
    return (
      <div className='filter-item' ref={this.wrapperRef}>
        {this.state.showTooltip && <div className={`filter-item__content ${this.props.position}`}>
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