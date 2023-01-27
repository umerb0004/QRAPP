import { default as axios, AxiosRequestConfig } from 'axios'

export const GET = (URL: string, config?: AxiosRequestConfig) =>
  axios.get(URL, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    ...config,
  })

export const POST = (URL: string, data) => axios.post(URL, data)
