import { ReactElement } from 'react'
import { DateField, DateFieldProps } from 'react-admin'

const CustomDateField = (props: DateFieldProps): ReactElement => (
  <DateField locales="pt-BR" {...props} />
)

export default CustomDateField
