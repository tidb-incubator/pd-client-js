export const Greeter = (name: string) => `Hello ${name}`

import axios, { AxiosInstance } from 'axios'
import { fetchHeatmap, HeatmapRange } from './api/keyvis'

export interface ClientOption {
  endpoint: string
}

class PDClient {
  private http: AxiosInstance

  constructor(option: ClientOption) {
    this.http = axios.create({
      baseURL: option.endpoint
    })
    this.http.interceptors.response.use(
      function(response) {
        const { data } = response
        return data
      },
      function(error) {
        return Promise.reject(error)
      }
    )
  }

  // APIs about KeyVis
  async getHeatmap(selection?: HeatmapRange) {
    return fetchHeatmap(this.http, selection)
  }
}

export default PDClient
