import { ReactElement } from 'react'
import {
  Datagrid,
  EditButton,
  List,
  SelectInput,
  ShowButton,
  TextField,
  TextInput,
} from 'react-admin'
import { CustomDateField } from '../../components'

const filters = [
  <TextInput label="Morador" source="name" alwaysOn variant="outlined" />,
  <TextInput label="Apartamento" source="apt" alwaysOn variant="outlined" />,
  <SelectInput
    label="Torre"
    source="tower"
    alwaysOn
    choices={[
      {
        id: 'Toscana',
        name: 'Toscana',
      },
      { id: 'Vêneto', name: 'Vêneto' },
    ]}
    variant="outlined"
  />,
]

const ResidentsList = (): ReactElement => (
  <List
    filters={filters}
    sort={{ field: 'apt', order: 'ASC' }}
    exporter={false}
  >
    <Datagrid>
      <TextField label="Nome" source="name" />
      <TextField label="Apartamento" source="apt" />
      <TextField label="Torre" source="tower" />
      <CustomDateField label="Criado em" source="created_at" showTime />
      <CustomDateField label="Atualizado em" source="updated_at" showTime />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default ResidentsList
