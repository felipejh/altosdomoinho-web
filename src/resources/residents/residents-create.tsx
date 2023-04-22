import { ReactElement } from 'react'
import {
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

const ResidentsCreate = (): ReactElement => (
  <Create>
    <SimpleForm>
      <TextInput label="Nome" source="name" variant="outlined" />
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
  </Create>
)

export default ResidentsCreate
