// Packages
import { memo, ReactElement } from 'react'
import { Typography, TypographyProps } from '@mui/material'
import {
  useRecordContext,
  sanitizeFieldRestProps,
  PublicFieldProps,
  InjectedFieldProps,
} from 'react-admin'
import { get } from 'lodash'

interface PhoneFieldProps
  extends Omit<PublicFieldProps, 'textAlign'>,
    InjectedFieldProps,
    TypographyProps {
  source: string
}

/**
 * The PhoneField component is used to display the user's formatted phone number
 *
 * @param props
 *
 * Props:
 * - `source`: Name of the property with the phone number (metadatas.phone_number.value)
 * - `PublicFieldProps`: Inherited props from react-admin. Check the pull request justification at {@link https://github.com/marmelab/react-admin/pull/6219}
 * - `InjectedFieldProps`: Inherited props from react-admin. Check the pull request justification at {@link https://github.com/marmelab/react-admin/pull/6219}
 * - `TypographyProps`: Inherited props from MUI v5. Check documentation at {@link https://mui.com/material-ui/api/typography/}
 *
 * @example
 * Usage with all properties
 *
 * ```tsx
 * <PhoneField source="metadatas.phone_number.value" label="Telefone" />
 * ```
 *
 * - If the source value has 8 characters it will show 1234-5678
 * - If the source value has 9 characters it will show 12345-6789
 * - If the source value has 10 characters it will show (11) 1234-5678
 * - If the source value has 11 characters it will show (11) 12345-6789
 */
const PhoneField = memo((props: PhoneFieldProps): ReactElement => {
  const { className, source, ...rest } = props
  const record = useRecordContext(props)
  const value = get(record, source)

  const fieldWithMask = (): string => {
    if (value?.length === 9 || value?.length === 8) {
      // transform 123456789 in 12345-6789
      return value.replace(/^(\d{4,5})(\d{4})/g, '$1-$2')
    } else if (value?.length === 11 || value?.length === 10) {
      // transform 11123456789 in (11) 12345-6789
      return value.replace(/^(\d{2})(\d{4,5})(\d{4})/g, '($1) $2-$3')
    } else {
      return value
    }
  }

  return (
    <Typography
      component="span"
      variant="body2"
      className={className}
      {...sanitizeFieldRestProps(rest)}
    >
      {fieldWithMask()}
    </Typography>
  )
})

export default PhoneField
