import { ReactElement } from 'react'
import {
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

const ResidentsEdit = (): ReactElement => (
  <Edit>
    <SimpleForm>
      <TextInput label="Nome" source="name" variant="outlined" fullWidth />
      <NumberInput label="Apartamento" source="apt" variant="outlined" />
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
      />
      <TextInput
        label="Observações"
        source="obs"
        variant="outlined"
        fullWidth
        multiline
      />
    </SimpleForm>
  </Edit>
)

export default ResidentsEdit
