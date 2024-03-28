import axios from 'axios'
const baseUrl = 'http://localhost:4000'
const client = axios.create(baseUrl)

export const AxiosInstance = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`

  const onSuccess = response => response
  const onError = error => {
    // optionaly catch errors and add additional logging here
    return error
  }

  return client(options).then(onSuccess).catch(onError)
}