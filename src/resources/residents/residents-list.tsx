import { ReactElement } from 'react'
import {
  Datagrid,
  EditButton,
  List,
  SelectInput,
  ShowButton,
  SimpleList,
  TextField,
  TextInput,
} from 'react-admin'
import { useMediaQuery } from '@mui/material'
import { CustomDateField } from '../../components'
import { ListResident } from '../../models/residents'

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

const ResidentsList = (): ReactElement => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  console.log(isSmall)

  return (
    <List
      filters={filters}
      sort={{ field: 'apt', order: 'ASC' }}
      exporter={false}
    >
      {isSmall ? (
        <SimpleList<ListResident>
          primaryText={(record) => record.name}
          secondaryText={(record) => `${record.apt} - ${record.tower}`}
          // tertiaryText={(record) =>
          //   new Date(record.created_at).toLocaleDateString()
          // }
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField label="Nome" source="name" />
          <TextField label="Apartamento" source="apt" />
          <TextField label="Torre" source="tower" />
          <CustomDateField label="Criado em" source="created_at" showTime />
          <CustomDateField label="Atualizado em" source="updated_at" showTime />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export default ResidentsList
