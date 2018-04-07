
import { LOAD_GAME } from '../Actions';

const app = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GAME:
      return { ...state, games: action.games };
    default:
      return state;
  }
};

export default app;
