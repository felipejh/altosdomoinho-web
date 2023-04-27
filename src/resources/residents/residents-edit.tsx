import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import {
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
  regex,
  required,
} from 'react-admin'
import {
  isValidLandlinePhone,
  isValidMobilePhone,
} from '@brazilian-utils/brazilian-utils'

const validateLicensePlate = [
  regex(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, 'Formato da placa inválido'),
]

const formatLicensePlate = (value: string): string | undefined => {
  if (value) {
    return value.toLocaleUpperCase()
  }
}

const validateApt = [regex(/^[0-9]{3}$/, 'Apartamento inválido'), required()]

const validatePhone = (value: string): string | undefined => {
  if (!isValidLandlinePhone(value) && !isValidMobilePhone(value)) {
    return 'Número inválido.'
  }
}

const validatePhoneInputs = [validatePhone]

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
      <Grid container item spacing={2}>
        <Grid item>
          <TextInput
            label="Apartamento"
            source="apt"
            variant="outlined"
            validate={validateApt}
          />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
      <TextInput
        label="Telefone"
        source="phone_number"
        validate={validatePhoneInputs}
        variant="outlined"
        format={(value?: string) =>
          value?.replace(/^(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3')
        }
        parse={(value?: string) => value?.replace(/\D/g, '')}
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
