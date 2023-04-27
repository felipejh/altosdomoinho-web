import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponseHeaders,
} from 'axios'

export interface HttpClientResponse<T> {
  status: number
  headers: Headers
  body: string
  json: T
}

const axiosConfig: AxiosRequestConfig = {
  paramsSerializer: {
    serialize: (params) => {
      const paramsEntries = Object.entries(params).map(([key, value]) =>
        typeof value === 'object'
          ? [key, encodeURIComponent(JSON.stringify(value))]
          : [key, value],
      )
      const query = Object.fromEntries(paramsEntries)

      return decodeURIComponent(new URLSearchParams(query).toString())
    },
  },
}

export const api = axios.create(axiosConfig)

const responseErrorInterceptor = (error: AxiosError): Promise<never> => {
  return Promise.reject(error)
}

api.interceptors.response.use((response) => response, responseErrorInterceptor)

const httpClient = <T = any>(
  url = '',
  axiosRequestConfig?: AxiosRequestConfig,
): Promise<HttpClientResponse<T>> => {
  const baseUrl = axiosRequestConfig?.baseURL || import.meta.env.VITE_API_URL

  const token = localStorage.getItem('token')

  return api
    .request<T>({
      ...axiosRequestConfig,
      url,
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...axiosRequestConfig?.headers,
      },
    })
    .then((el) => ({
      status: el.status,
      headers: new Headers(el.headers as AxiosResponseHeaders),
      body: JSON.stringify(el.data),
      json: el.data,
    }))
}

export default httpClient
