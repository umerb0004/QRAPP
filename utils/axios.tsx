const { default: axios } = require('axios')

export const Get = (URL) => axios.get(URL, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})