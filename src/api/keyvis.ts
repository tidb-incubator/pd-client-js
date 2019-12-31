import { AxiosInstance } from 'axios'

export interface HeatmapRange {
  startTime?: number
  endTime?: number
  startKey?: string
  endKey?: string
}

export interface KeyAxisEntry {
  key: string
  labels: string[]
}

export interface HeatmapData {
  timeAxis: number[]
  keyAxis: KeyAxisEntry[]
  data: {
    integration: number[][]
    read_bytes: number[][]
    written_bytes: number[][]
    read_keys: number[][]
    written_keys: number[][]
  }
}

const PD_KEY_VIS_API_BASE_URL = '/pd/apis/keyvisual/v1'

export async function fetchHeatmap(http: AxiosInstance, selection?: HeatmapRange, type = 'write_bytes') {
  const url = `${PD_KEY_VIS_API_BASE_URL}/heatmaps`
  const params = {
    ...selection,
    type
  }
  const data: HeatmapData = await http.get(url, { params })
  return data
}
