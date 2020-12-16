import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string,
      heading: string,
      primary: string,
      lightPrimary: string,
      success: string,
      danger: string,
      darkGrey: string,
      lightGrey: string,
      greyBlue: string,
      cyan: string,
      lime: string
    }
    mediaQueries: {
      small: string,
      medium: string,
      large: string
    }
  }
}