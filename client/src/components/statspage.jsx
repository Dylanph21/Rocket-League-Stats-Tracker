import React from 'react';
import axios from 'axios';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, PTagStat } from '../assets/all.styles.jsx';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  ranksCheck = () => {
    if (this.props.ranks.length === 2) {
      let newRanksObj = {};
      let dbObj = {
        Duel: 0,
        Doubles: 0,
        Standard: 0,
        Hoops: 0,
        Rumble: 0,
        Dropshot: 0,
        'Snow Day': 0
      };
      this.props.ranks[0].map(playlist => {
        newRanksObj[playlist.playlist] = playlist.mrr;
        // return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division} ({playlist.mmr})</Lists>
      });
      dbObj.Duel = this.props.ranks[1].duel;
      dbObj.Doubles = this.props.ranks[1].doubles;
      dbObj.Standard = this.props.ranks[1].standard;
      dbObj.Hoops = this.props.ranks[1].hoops;
      dbObj.Rumble = this.props.ranks[1].rumble;
      dbObj.Dropshot = this.props.ranks[1].dropshot;
      dbObj['Snow Day'] = this.props.ranks[1].snowday;
      for (var key in newRanksObj) {

      }
    } else {
      this.props.ranks.map(playlist => {
        return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division} ({playlist.mmr})</Lists>
      })
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
            return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division} ({playlist.mmr})</Lists>
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