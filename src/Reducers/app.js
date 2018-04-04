
import { LOAD_GAME } from '../Actions';

const app = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GAME:
      return { ...state, game_list: action.game_list };
    default:
      return state;
  }
};

export default app;
