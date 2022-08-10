import React from 'react';
import axios from 'axios';
import { AppContainer, Button, Title, OrdList, Lists, H4s, H5s, PlayerName, PTag, PTagCarousel, Img } from '../assets/all.styles.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  newsMap = () => {
    console.log(this.props)
    this.props.news.map(theNew => {
      return <div><img src={theNew.image}/></div>
    })
  }

  render() {
    return (
      <>
        <H4s>Rocket League Current Events</H4s>
        <Carousel autoPlay interval="5000" transitionTime="600" infiniteLoop>
          {this.props.news.map(theNew => {
            return <><PTagCarousel>{theNew.title}</PTagCarousel><img src={theNew.image}/></>
          })}
        </Carousel>
      </>
    )
  }
}

export default Home;