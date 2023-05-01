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
import { ListResident } from '../../models/residents'
import { PhoneField } from '../../components'

const formatLicensePlate = (value: string): string | undefined => {
  if (value) {
    return value.toLocaleUpperCase()
  }
}

const filters = [
  <TextInput label="Morador" source="name" alwaysOn />,
  <TextInput label="Apartamento" source="apt" alwaysOn />,
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
  />,
  <TextInput label="Veículo" source="vehicle_model" alwaysOn />,
  <TextInput
    label="Placa"
    source="vehicle_license_plate"
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
          tertiaryText={(record) => record.phone_number}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField label="Nome" source="name" />
          <TextField label="Apartamento" source="apt" />
          <TextField label="Torre" source="tower" />
          <PhoneField label="Telefone" source="phone_number" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export default ResidentsList
