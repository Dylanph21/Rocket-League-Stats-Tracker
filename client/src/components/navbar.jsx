import React from 'react';
import axios from 'axios';
import { AppContainer, NavContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, InField } from '../assets/all.styles.jsx';
import RLLogo from '../assets/RLLogo.png';
import Button1 from 'react-bootstrap/Button';
import negativeRL from '../assets/negativeRL.png';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <>
      <NavContainer>
      {/* <img style={{left: -80, height: 80, width: 95}} src={BandWRL}></img> */}
      <Title>Rocket League Tracker</Title>
      <img style={{ height: 95, width: 95}} src={negativeRL}></img>
      <H5s>Enter your Epic ID to view your current ranks and statistics</H5s>
      <InField
      id='InField'
      placeholder='Epic ID'
      onChange={this.props.searchPlayer}
      // style={{background: 'blue', margin: 0, padding: 0}}
      />
      <Button onClick={this.props.buttonSearch}>Search</Button>
      <Button onClick={this.props.homeButton}>Home</Button>
      </NavContainer>
      </>
    )
  }
}

export default Nav;