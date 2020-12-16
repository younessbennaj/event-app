import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      lightPrimary: string,
      success: string,
      danger: string
    }

    mediaQueries: {
      small: string,
      medium: string,
      large: string,
      larger: string
    }
  }
}