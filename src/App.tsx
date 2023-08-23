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
import theme from './config/theme/custom-mui-theme'
import { People as ResidentsIcon } from '@mui/icons-material'

const dataProvider = simpleRestProvider(
  import.meta.env.VITE_API_URL,
  httpClientSimpleRestAdapter(httpClient),
)

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={theme}
  >
    <Resource
      name="residents"
      list={ResidentsList}
      show={ResidentsShow}
      edit={ResidentsEdit}
      create={ResidentsCreate}
      options={{ label: 'Moradores' }}
      icon={ResidentsIcon}
    />
  </Admin>
)

export default App
