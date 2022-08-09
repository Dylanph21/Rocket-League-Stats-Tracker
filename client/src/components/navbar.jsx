import React from 'react';
import axios from 'axios';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <>
      <h2>Rocket League Tracker</h2>
      <input
      placeholder='Search Epic ID'
      onChange={this.props.searchPlayer}
      />
      <button onClick={this.props.buttonSearch}>Search</button>
      </>
    )
  }
}

export default Nav;