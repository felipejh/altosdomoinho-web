import { ReactElement } from 'react'
import {
  Show,
  Labeled,
  TextField,
  useRecordContext,
  TopToolbar,
} from 'react-admin'
import { ShowResident } from '../../models/residents'
import { CustomDateField, PhoneField } from '../../components'
import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material'
import BackButton from '../../components/buttons/back-button'

const ResidentsShowTitle = (): ReactElement => {
  const record = useRecordContext<ShowResident>()

  return (
    <span>
      Moradores - {record?.name} - {record?.apt} {record?.tower}
    </span>
  )
}

const ResidentsShowActions = (): ReactElement => (
  <TopToolbar>
    <Grid container>
      <BackButton />
    </Grid>
  </TopToolbar>
)

const ResidentsShow = (): ReactElement => (
  <Show
    title={<ResidentsShowTitle />}
    actions={<ResidentsShowActions />}
    sx={{
      '.RaShow-card': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }}
  >
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card variant="outlined" sx={{ height: '100%' }}>
          <CardHeader title="Dados pessoais" />
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Labeled label="Nome">
                <TextField label="Nome" source="name" />
              </Labeled>
              <Labeled label="Apartamento">
                <TextField label="Apartamento" source="apt" />
              </Labeled>
              <Labeled label="Torre">
                <TextField label="Torre" source="tower" />
              </Labeled>
              <Labeled label="Telefone">
                <PhoneField label="Telefone" source="phone_number" />
              </Labeled>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card variant="outlined" sx={{ height: '100%' }}>
          <CardHeader title="Veículo" />
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Labeled label="Modelo">
                <TextField label="Veículo" source="vehicle_model" />
              </Labeled>
              <Labeled label="Placa">
                <TextField label="Placa" source="vehicle_license_plate" />
              </Labeled>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Observações" />
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Labeled label="Observações">
                <TextField label="Observações" source="obs" />
              </Labeled>
              <Labeled label="Criado em">
                <CustomDateField
                  label="Criado em"
                  source="created_at"
                  showTime
                />
              </Labeled>
              <Labeled label="Atualizado em">
                <CustomDateField
                  label="Atualizado em"
                  source="updated_at"
                  showTime
                />
              </Labeled>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Show>
)

export default ResidentsShow
