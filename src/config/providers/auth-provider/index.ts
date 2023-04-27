import { AxiosError } from 'axios'
import httpClient from '../../../services/http/httpClient'

interface LoginParams {
  username: string
  password: string
}

interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    password_hash: string
    created_at: string
    updated_at: string
  }
  token: string
}

export const authProvider = {
  login: async ({ username, password }: LoginParams) => {
    const body = {
      email: username,
      password,
    }

    const { json } = await httpClient<LoginResponse>('auth', {
      method: 'POST',
      data: body,
    })

    const { name, email } = json.user

    localStorage.setItem('name', name)
    localStorage.setItem('username', email)
    localStorage.setItem('token', json.token)

    return Promise.resolve()
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('name')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    return Promise.resolve()
  },
  // called when the API returns an error
  checkError: (error: AxiosError) => {
    const { status } = error.response || {}
    if (status === 401 || status === 403) {
      localStorage.removeItem('name')
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject()
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
}
