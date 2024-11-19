import { createGlobalStyle } from 'styled-components'

export const cores = {
  Neutral0: '#F9FAFB',
  Neutral: '#3A424E',
  Neutral100: '#f3f4f6',
  Neutral200: '#E5E7EB',
  Neutral300: '#D1D5DB',
  Neutral400: '#9CA3AF',
  Neutral500: '#6B7280',
  Neutral700: '#3A424E',
  Neutral900: '#191E29',
  primary100: '#CAFFD6',
  primary500: '#05C151',
  primary600: '#079942',
  primary400: '#45DD69',
  primaryText: '#3A424E',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
