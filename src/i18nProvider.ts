import ptBrMessages from 'ra-language-pt-br'
import polyglotI18nProvider from 'ra-i18n-polyglot'

const messages: any = {
  'pt-br': ptBrMessages,
}

export const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale],
  'pt-br',
)
