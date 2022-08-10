import React from 'react';
import axios from 'axios';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag } from '../assets/all.styles.jsx';
import RLLogo from '../assets/RLLogo.png';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <>
      <Title>Welcome to Rocket League Tracker!</Title>
      <img style={{height: 40, width: 60}} src={RLLogo}></img>
      <H5s>Enter your Epic ID to view your current ranks and statistics.</H5s>
      <input
      placeholder='Search Epic ID'
      onChange={this.props.searchPlayer}
      style={{margin: 0, padding: 0}}
      />
      <Button onClick={this.props.buttonSearch}>Search</Button>
      <Button onClick={this.props.homeButton}>Home</Button>
      </>
    )
  }
}

export default Nav;