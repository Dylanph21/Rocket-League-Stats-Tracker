import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Home from './components/homepage.jsx';
import Nav from './components/navbar.jsx';
import Stats from './components/statspage.jsx';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, Global } from './assets/all.styles.jsx';

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
      news: [],
      showHomePage: true,
    }
  };

  componentDidMount = () => {
    this.getTheNews();
  }

  getTheNews = async () => {
    await Promise.all([
      axios.get('/news')
    ])
    .then(res => {
      this.setState({
        news: res[0].data.articles,
      })
    })
  }

  searchPlayer = (e) => {
    this.setState({
      player: e.target.value,
    })
  };

  homeButton = () => {
    this.setState({
      showHomePage: true,
      ranks: [],
    })
  }

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
        document.getElementById('InField').value = '';
        // console.log(res);
        if (res[0].data.length === 2) {
          this.setState({
            ranks: res[0].data,
            rewards: res[0].data[0].reward,
            wins: res[1].data,
            mvps: res[2].data,
            shots: res[3].data,
            saves: res[4].data,
            goals: res[5].data,
            assists: res[6].data,
            titles: res[7].data.titles,
            showHomePage: false,
          });
        } else {
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
            showHomePage: false,
          });
        }

      });
  };

  render() {

    return (
      // <AppContainer>
      <>
      <Global/>
        <Nav
          searchPlayer={this.searchPlayer}
          buttonSearch={this.buttonSearch}
          homeButton={this.homeButton}
          >
        </Nav>
        {this.state.showHomePage ? <Home
          news={this.state.news}
        ></Home> : null}
        {this.state.ranks.length > 0 ?
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
        ></Stats> : null}
      </>
      // {/* </AppContainer> */}
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