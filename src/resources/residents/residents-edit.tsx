import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import {
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  regex,
  required,
} from 'react-admin'

const validateLicensePlate = [
  regex(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, 'Formato da placa inválido'),
]

const formatLicensePlate = (value: string): string | undefined => {
  if (value) {
    return value.toLocaleUpperCase()
  }
}

const ResidentsEdit = (): ReactElement => (
  <Edit>
    <SimpleForm>
      <TextInput
        label="Nome"
        source="name"
        variant="outlined"
        fullWidth
        validate={required()}
      />
      <NumberInput
        label="Apartamento"
        source="apt"
        variant="outlined"
        validate={required()}
      />
      <SelectInput
        label="Torre"
        source="tower"
        alwaysOn
        validate={required()}
        choices={[
          {
            id: 'Toscana',
            name: 'Toscana',
          },
          { id: 'Vêneto', name: 'Vêneto' },
        ]}
        variant="outlined"
      />
      <Grid container item spacing={2}>
        <Grid item>
          <TextInput
            label="Veículo"
            source="vehicle_model"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextInput
            label="Placa"
            source="vehicle_license_plate"
            variant="outlined"
            validate={validateLicensePlate}
            format={formatLicensePlate}
          />
        </Grid>
      </Grid>
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
