import React from 'react';
import ReactDom from 'react-dom';
import Provider from 'react-redux';
import Redux from 'redux';
import App from './App';
import rootReducer from './Reducers';
import { loadGame } from './Actions';

const store = Redux.createStore(rootReducer, loadGame);

const props = {
  title: 'My Minimal React Webpack Babel Setup',
  videoPath: 'http://video.gendarmerie.interieur.gouv.fr/' +
                  '18_024_AC_HOMMAGE_AUX_MORTS.mp4',
};

ReactDom.render(
  <Provider store={store}>
    <App props={props} />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
