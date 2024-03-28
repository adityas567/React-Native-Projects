import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosInstance } from '../helper/AxiosHelper'


const fetchData = (url) => {
  return AxiosInstance(url)
}

export const useFetchQuery = (url) => {
  return useQuery(`Fetching: ${url}`, fetchData, {
    cacheTime: 3000,
    staleTime:3000
  })
}