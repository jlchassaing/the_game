import React from 'react';

import connect from 'react-redux';
import PropTypes from 'prop-types';
import Video from './Video';

const Game = ({ videoList }) => (
  <div>
    {videoList.map(video =>
      <Video id={video.id} path={video.path} />)}
  </div>
);

Game.propTypes = {
  videoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToPropos = state => ({
  videoList: state.videos,
});

export default connect(mapStateToPropos, null)(Game);
