import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/authentication`,
  withCredentials: true
});

export const signUp = body => api.post('/sign-up', body).then(res => res.data);

export const signIn = body => api.post('/sign-in', body).then(res => res.data);

export const signOut = () => api.post('/sign-out').then(response => response.data);

export const checkUser = () => api.get('/me').then(response => response.data);