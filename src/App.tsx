import { Admin, Resource } from 'react-admin'
import { i18nProvider } from './i18nProvider'
import simpleRestProvider from 'ra-data-simple-rest'
import {
  ResidentsCreate,
  ResidentsEdit,
  ResidentsList,
} from './resources/residents'
import ResidentsShow from './resources/residents/residents-show'

const dataProvider = simpleRestProvider('http://localhost:3333')

const App = () => (
  <Admin i18nProvider={i18nProvider} dataProvider={dataProvider}>
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
