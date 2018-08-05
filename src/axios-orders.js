import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-63bdc.firebaseio.com/'
});

export default instance;