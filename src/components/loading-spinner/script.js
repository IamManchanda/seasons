import React, { Fragment } from 'react';

const LoadingSpinner = ({ message }) => <Fragment>
  <div class="ui active dimmer">
    <div class="ui big text loader">{ message }</div>
  </div>
</Fragment>;

LoadingSpinner.defaultProps = {
  message: 'Loading...',
};

export default LoadingSpinner;
