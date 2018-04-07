import React from 'react';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import 'video-react/dist/video-react.css';

const Video = ({ id, path }) => (
  <div>
    <Player id={id} src={path} playsInLine />
    <input type="text" />
  </div>);

Video.propTypes = {
  path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


export default Video;
