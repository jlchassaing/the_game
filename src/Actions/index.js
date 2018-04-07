import fetch from 'cross-fetch';

const loadGamePath = 'http://game.test/rest/load';
const unswerVideoGamePath = '';
const loadVideoPath = '';

const defaultPostHeaders = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: '',
};

export const LOAD_GAME = 'LOAD_GAME';
export const LOADING = 'LOADING';
export const SET_GAME = 'SET_GAME';
export const LOAD_VIDEO = 'LOAD_VIDEO';
export const UNSWER_VIDEO = 'UNSWER_VIDEO';

export const loadGame = dispatch => fetch(loadGamePath).then(response => response.json())
  .then(responseJson => dispatch({ type: SET_GAME, games: responseJson.games }))
  .catch(error => error);

export const loadVideo = id => fetch(loadVideoPath, { method: 'GET', body: { id } })
  .then(response => response.json())
  .catch(error => error);

export const testUnswer = ({ videoId, unswer }) => fetch(unswerVideoGamePath, {
  ...defaultPostHeaders,
  body: JSON.stringify({
    videoId,
    unswer,
  }),
}).then(response => response.json())
  .catch(error => error);
