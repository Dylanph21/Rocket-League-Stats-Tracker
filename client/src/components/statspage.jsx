import React from 'react';
import axios from 'axios';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, PTagStat, RanksTable, TableHeader, TableData, TableData2, LTTable } from '../assets/all.styles.jsx';
import epicgameslogo from '../assets/epicgameslogo.png';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // loss = null;
  // gain = null;
  // ranksCheck = () => {
  //   if (this.props.ranks.length === 2) {
  //     let newRanksObj = {};
  //     let dbObj = {
  //       Duel: 0,
  //       Doubles: 0,
  //       Standard: 0,
  //       Hoops: 0,
  //       Rumble: 0,
  //       Dropshot: 0,
  //       'Snow Day': 0
  //     };
  //     console.log(this.props.ranks);
  //     this.props.ranks[0].ranks.map((playlist) => {
  //       newRanksObj[playlist.playlist] = playlist.mrr;
  //       // return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division} ({playlist.mmr})</Lists>
  //     });
  //     dbObj.Duel = this.props.ranks[1].duel;
  //     dbObj.Doubles = this.props.ranks[1].doubles;
  //     dbObj.Standard = this.props.ranks[1].standard;
  //     dbObj.Hoops = this.props.ranks[1].hoops;
  //     dbObj.Rumble = this.props.ranks[1].rumble;
  //     dbObj.Dropshot = this.props.ranks[1].dropshot;
  //     dbObj['Snow Day'] = this.props.ranks[1].snowday;
  //     for (var key in newRanksObj) {
  //       if (dbObj[key] > newRanksObj[key]) {
  //         loss = dbObj[key] - newRanksObj[key];
  //       } else if (dbObj[key] < newRanksObj[key]) {
  //         gain = newRanksObj[key] - dbObj[key];
  //       }
  //     }
  //   }
  // };


  render() {
    if (this.props.ranks.length !== 2) {
      return (
        <AppContainer>
          {/* <img style={{height: 50, width: 50}} src={epicgameslogo}></img> */}
          <PlayerName>{this.props.player}</PlayerName>
          <PTagStat>Current Reward: {this.props.rewards.level} - Current Progress: {this.props.rewards.progress}/10 Wins</PTagStat>
          {/* <OrdList> */}
            {/* {this.ranksCheck()} */}
            {/* {this.props.ranks.map(playlist => {
              return <Lists>{playlist.playlist}: {playlist.rank} Div. {playlist.division} ({playlist.mmr})</Lists>
            })} */}
          {/* </OrdList> */}
          <RanksTable>
            <tr>
              <TableHeader sytle={{border: 10, borderColor: 'black'}}>Playlist</TableHeader>
              <TableHeader>Rank</TableHeader>
              <TableHeader>Rating</TableHeader>
            </tr>
            <tr>
              <TableData2>{this.props.ranks[0].playlist}</TableData2>
              <TableData2>{this.props.ranks[0].rank} Div. {this.props.ranks[0].division}</TableData2>
              <TableData2>{this.props.ranks[0].mmr}</TableData2>
            </tr>
            <tr>
              <TableData>{this.props.ranks[1].playlist}</TableData>
              <TableData>{this.props.ranks[1].rank} Div. {this.props.ranks[1].division}</TableData>
              <TableData>{this.props.ranks[1].mmr}</TableData>
            </tr>
            <tr>
              <TableData2>{this.props.ranks[2].playlist}</TableData2>
              <TableData2>{this.props.ranks[2].rank} Div. {this.props.ranks[2].division}</TableData2>
              <TableData2>{this.props.ranks[2].mmr}</TableData2>
            </tr>
            <tr>
              <TableData>{this.props.ranks[3].playlist}</TableData>
              <TableData>{this.props.ranks[3].rank} Div. {this.props.ranks[3].division}</TableData>
              <TableData>{this.props.ranks[3].mmr}</TableData>
            </tr>
            <tr>
              <TableData2>{this.props.ranks[4].playlist}</TableData2>
              <TableData2>{this.props.ranks[4].rank} Div. {this.props.ranks[4].division}</TableData2>
              <TableData2>{this.props.ranks[4].mmr}</TableData2>
            </tr>
            <tr>
              <TableData>{this.props.ranks[5].playlist}</TableData>
              <TableData>{this.props.ranks[5].rank} Div. {this.props.ranks[5].division}</TableData>
              <TableData>{this.props.ranks[5].mmr}</TableData>
            </tr>
          </RanksTable>
          <LTTable>
            <tr>
              <TableHeader>Lifetime Stats</TableHeader>
            </tr>
            <tr>
              <TableData2>Wins: {this.props.wins.value}</TableData2>
            </tr>
            <tr>
              <TableData2>MVPs: {this.props.mvps.value}</TableData2>
            </tr>
            <tr>
              <TableData2>Goals: {this.props.goals.value}</TableData2>
            </tr>
            <tr>
              <TableData2>Shots: {this.props.shots.value}</TableData2>
            </tr>
            <tr>
              <TableData2>Assists: {this.props.assists.value}</TableData2>
            </tr>
            <tr>
              <TableData2>Saves: {this.props.saves.value}</TableData2>
            </tr>
            {/* <Lists>Wins: {this.props.wins.value}</Lists>
            <Lists>MVPs: {this.props.mvps.value}</Lists>
            <Lists>Goals: {this.props.goals.value}</Lists>
            <Lists>Shots: {this.props.shots.value}</Lists>
            <Lists>Assists: {this.props.assists.value}</Lists>
            <Lists>Saves: {this.props.saves.value}</Lists> */}
          </LTTable>
        </AppContainer>

      )
    } else {
      <AppContainer>
          <PlayerName>{this.props.player}</PlayerName>
          <PTagStat>Current Reward: {this.props.rewards.level} - Current Progress: {this.props.rewards.progress}/10 Wins</PTagStat>
          <H4s>Playlist / Ranks</H4s>
          <OrdList>
            {/* {this.ranksCheck()} */}
            {this.props.ranks[0].ranks.map(playlist => {
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
    }
  }
}

export default Stats;