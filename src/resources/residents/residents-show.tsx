import { ReactElement } from 'react'
import {
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from 'react-admin'
import { ShowResident } from '../../models/residents'
import { CustomDateField, PhoneField } from '../../components'

const ResidentsShowTitle = (): ReactElement => {
  const record = useRecordContext<ShowResident>()

  console.log(record)

  return (
    <span>
      Moradores - {record.name} - {record.apt} {record.tower}
    </span>
  )
}

const ResidentsShow = (): ReactElement => (
  <Show title={<ResidentsShowTitle />}>
    <SimpleShowLayout>
      <TextField label="Nome" source="name" />
      <TextField label="Apartamento" source="apt" />
      <TextField label="Torre" source="tower" />
      <PhoneField label="Telefone" source="phone_number" />
      <TextField label="Veículo" source="vehicle_model" />
      <TextField label="Placa" source="vehicle_license_plate" />
      <TextField label="Observações" source="obs" />
      <CustomDateField label="Criado em" source="created_at" showTime />
      <CustomDateField label="Atualizado em" source="updated_at" showTime />
    </SimpleShowLayout>
  </Show>
)

export default ResidentsShow
