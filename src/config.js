require('dotenv').config();

export default {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080/api',
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'totally-secure-secret'
};