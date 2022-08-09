import React from 'react';
import axios from 'axios';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <>
        <h3>{this.props.player}</h3>
        <h4>Playlist / Ranks</h4>
        <p>Current Reward: {this.props.rewards.level} - Current Progress: {this.props.rewards.progress}/10 Wins</p>
        <ol>
          {this.props.ranks.map(playlist => {
            return <li>{playlist.playlist}: {playlist.rank} Division {playlist.division}</li>
          })}
        </ol>
        <h4>Current Statistics</h4>
        <ol>
          <li>Wins: {this.props.wins.value}</li>
          <li>MVPs: {this.props.mvps.value}</li>
          <li>Goals: {this.props.goals.value}</li>
          <li>Shots: {this.props.shots.value}</li>
          <li>Assists: {this.props.assists.value}</li>
          <li>Saves: {this.props.saves.value}</li>
        </ol>
      </>

    )
  }
}

export default Stats;