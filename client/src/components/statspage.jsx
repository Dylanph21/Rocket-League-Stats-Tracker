import React from 'react';
import axios from 'axios';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, PTagStat } from '../assets/all.styles.jsx';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <AppContainer>
        <PlayerName>{this.props.player}</PlayerName>
        <PTagStat>Current Reward: {this.props.rewards.level} - Current Progress: {this.props.rewards.progress}/10 Wins</PTagStat>
        <H4s>Playlist / Ranks</H4s>
        <OrdList>
          {this.props.ranks.map(playlist => {
            return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division}</Lists>
          })}
        </OrdList>
        <H4s>Current Statistics</H4s>
        <OrdList>
          <Lists>Wins: {this.props.wins.value}</Lists>
          <Lists>MVPs: {this.props.mvps.value}</Lists>
          <Lists>Goals: {this.props.goals.value}</Lists>
          <Lists>Shots: {this.props.shots.value}</Lists>
          <Lists>Assists: {this.props.assists.value}</Lists>
          <Lists>Saves: {this.props.saves.value}</Lists>
        </OrdList>
      </AppContainer>

    )
  }
}

export default Stats;