import axios from 'axios';

export const getDoomis = () => (
  axios.get('/api/doomis')
);

export const postDoomi = (doomi) => {
  debugger;
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/api/doomis',
    data: { doomi }
  });
};
