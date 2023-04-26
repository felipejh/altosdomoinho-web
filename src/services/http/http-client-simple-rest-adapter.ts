// Packages
import { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios'
import { fetchUtils } from 'react-admin'

// Services
import httpClient from './httpClient'

const httpClientSimpleRestAdapter =
  (clientMethod: typeof httpClient) =>
  (
    url?: string,
    options?: fetchUtils.Options,
  ): ReturnType<typeof httpClient> => {
    const preparedConfig: Partial<AxiosRequestConfig> = {
      data: options?.body,
      headers: options?.headers as AxiosRequestHeaders,
      method: options?.method as Method,
    }

    return clientMethod(url, preparedConfig)
  }

export default httpClientSimpleRestAdapter
