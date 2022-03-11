import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import people from './people'
import planets from './planets';
import species from './species';
import vehicles from './vehicles';
import starships from './starships';

export default combineReducers({
    people,
    planets,
    species,
    vehicles,
    starships,
    loadingBar: loadingBarReducer
});
