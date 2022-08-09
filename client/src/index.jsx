import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Home from './components/homepage.jsx';
import Nav from './components/navbar.jsx';
import Stats from './components/statspage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
      ranks: [],
      rewards: {},
      wins: {},
      mvps: {},
      shots: {},
      saves: {},
      goals: {},
      assists: {},
      titles: [],
    }
  };

  searchPlayer = (e) => {
    this.setState({
      player: e.target.value,
    })
    console.log(this.state.player)
  };

  buttonSearch = async () => {
    await Promise.all([
      axios.get(`/ranks/${this.state.player}`),
      axios.get(`/stat/${this.state.player}/wins`),
      axios.get(`/stat/${this.state.player}/mvps`),
      axios.get(`/stat/${this.state.player}/shots`),
      axios.get(`/stat/${this.state.player}/saves`),
      axios.get(`/stat/${this.state.player}/goals`),
      axios.get(`/stat/${this.state.player}/assists`),
      axios.get(`/titles/${this.state.player}`),
    ])
      .then(res => {
        console.log(res);
        this.setState({
          ranks: res[0].data.ranks,
          rewards: res[0].data.reward,
          wins: res[1].data,
          mvps: res[2].data,
          shots: res[3].data,
          saves: res[4].data,
          goals: res[5].data,
          assists: res[6].data,
          titles: res[7].data.titles,
        });
      });
  };

  render() {

    return (
      <>
        <Nav
          searchPlayer={this.searchPlayer}
          buttonSearch={this.buttonSearch}>
        </Nav>
        <Home></Home>
        <Stats
        player={this.state.player}
        ranks={this.state.ranks}
        rewards={this.state.rewards}
        wins={this.state.wins}
        mvps={this.state.mvps}
        shots={this.state.shots}
        saves={this.state.saves}
        goals={this.state.goals}
        assists={this.state.assists}
        titles={this.state.titles}
        ></Stats>
      </>
    )
  }
}











const root1 = document.createElement("div");
root1.setAttribute("id", "app");
document.body.appendChild(root1);
const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />)

export default App;