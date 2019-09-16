import React, {Component} from 'react'
import "./Header.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "expand-filters": false,
      "single-entry": false,
      "date-available": false
    }
    this.openFilters = this.openFilters.bind(this)
  }

  openFilters () {
    const showFilters = !this.state["expand-filters"]
    const filterPanel = document.querySelector(".filterPanel")

    this.setState({
      "expand-filters": showFilters
    })

    if (showFilters) {
      filterPanel.classList.add("showFilters")
    } else {
      filterPanel.classList.remove("showFilters")
    }
  }

  render() {
    return (
      <div class="header-container">
        <section class="content">
          <button class="icon-btn" onClick={this.openFilters}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div class="app-title">{this.props.title}</div>
          <button class="icon-btn" onClick={this.openFilters}>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </section>
        <section class="filterPanel">
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        </section>
      </div>
    )
  }
}

export default Header
