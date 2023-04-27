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

const formatLicensePlate = (value: string): string | undefined => {
  if (value) {
    return value.toLocaleUpperCase()
  }
}

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
  <TextInput
    label="Veículo"
    source="vehicle_model"
    variant="outlined"
    alwaysOn
  />,
  <TextInput
    label="Placa"
    source="vehicle_license_plate"
    variant="outlined"
    format={formatLicensePlate}
    alwaysOn
  />,
]

const ResidentsList = (): ReactElement => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

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
