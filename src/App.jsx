import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const App = props => (
  <div>
    <h1>{props.title}</h1>
    <Game />
  </div>);

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'Application title',
};

export default App;
