import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadGame } from './Actions';
import Video from './Video';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount = () => {
    const games = this.props.loadGame();
    console.log(games);
    this.setState({ games });
  };

  render() {
    return (
      <div>
        {this.state.games.map(video =>
          <Video id={video.id} path={video.path} />)}
      </div>);
  }
}

Game.propTypes = {
  loadGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  videoList: state.videos,
});

export default connect(mapStateToProps, { loadGame })(Game);
