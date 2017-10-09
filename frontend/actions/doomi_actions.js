export const RECEIVE_DOOMIS = "RECEIVE_DOOMIS";
export const RECEIVE_DOOMI = "RECEIVE_DOOMI";
import { getDoomis, postDoomi } from '../util/doomi_api_util';

export const receiveDoomis = (doomis) => ({
  type: RECEIVE_DOOMIS,
  doomis
});

export const receiveDoomi = (doomi) => {
  debugger;
  return {
    type: RECEIVE_DOOMI,
    doomi
  };
};


export const fetchAllDoomis = () => dispatch => (
  getDoomis().then((doomis) => dispatch(receiveDoomis(doomis)))
);

export const createDoomi = (doomi) => dispatch => {
  return postDoomi(doomi).then((newDoomi) => {
    debugger;
    return dispatch(receiveDoomi(newDoomi));
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
    // ADD THIS THROW error
    throw error;
  });
};
