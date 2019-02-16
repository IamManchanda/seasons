import React, { Fragment, Component } from 'react';
import SeasonDisplay from '../../components/season-display/script';
import LoadingSpinner from '../../components/loading-spinner/script';

const Home = class extends Component {
  state = { 
    lat: null,
    errorMessage: '',
  };

  fetchMapData() {
    window.navigator.geolocation.getCurrentPosition((data) => {
      const lat = data.coords.latitude;
      this.setState({ lat });
    }, (error) => {
      const errorMessage = error.message;
      this.setState({ errorMessage });
    });
  }

  componentDidMount() {
    this.fetchMapData();
  }

  render() {
    const { lat, errorMessage } = this.state;
    return <Fragment>
      {
        (errorMessage && !lat) 
          ? <p>Error: { errorMessage }</p>
        : (!errorMessage && lat) 
          ? <SeasonDisplay lat={ lat } />
        : <LoadingSpinner message="Please Allow us to accept your Location..." />
      }
    </Fragment>;
  }
}

export default Home;
