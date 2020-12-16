import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string,
      heading: string,
      primary: string,
      lightPrimary: string,
      success: string,
      danger: string
    }
    mediaQueries: {
      small: string,
      medium: string,
      large: string
    }
  }
}