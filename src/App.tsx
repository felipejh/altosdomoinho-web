import { Admin, Resource } from 'react-admin'
import { i18nProvider } from './i18nProvider'
import simpleRestProvider from 'ra-data-simple-rest'
import {
  ResidentsCreate,
  ResidentsEdit,
  ResidentsList,
} from './resources/residents'
import ResidentsShow from './resources/residents/residents-show'
import { authProvider } from './config/providers/auth-provider'
import httpClient from './services/http/httpClient'
import httpClientSimpleRestAdapter from './services/http/http-client-simple-rest-adapter'

const dataProvider = simpleRestProvider(
  import.meta.env.VITE_API_URL,
  httpClientSimpleRestAdapter(httpClient),
)

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="residents"
      list={ResidentsList}
      show={ResidentsShow}
      edit={ResidentsEdit}
      create={ResidentsCreate}
      options={{ label: 'Moradores' }}
    />
  </Admin>
)

export default App
