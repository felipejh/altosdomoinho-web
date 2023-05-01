import { defaultTheme } from 'react-admin'

const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: 'outlined' as const,
      },
    },
  },
}

export default theme
