import axios from 'axios';

const URL = 'http://localhost:4000/api';

export const registerRequest = user => axios.post(URL+'/register', user);
