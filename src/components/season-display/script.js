import React, { Fragment } from 'react';
import './style.css';

const seasonsConfig = {
  summer: {
    description: `Let's Hit the Beach`,
    iconName: `sun`, 
  },
  winter: {
    description: `Burr it's chilly`,
    iconName: `snowflake`, 
  },
};

const fetchSeason = (lat, month) => {
  if (month > 2 && month < 9) return (lat > 0) ? 'summer' : 'winter'; 
  return (lat > 0)  ? 'winter' : 'summer';
};

const SeasonDisplay = ({ lat }) => {
  const currentDate = new Date();
  const season = fetchSeason(lat, currentDate.getMonth());
  const { description, iconName } = seasonsConfig[season];

  return <Fragment>
    <div className={ `season-display ${season}` }>
      <i className={ `icon-left massive ${iconName} icon` }></i>
      <h1>{ description }</h1>
      <i className={ `icon-right massive ${iconName} icon` }></i>
    </div>
  </Fragment>;
};

SeasonDisplay.defaultProps = {
  lat: null,
};

export default SeasonDisplay;
