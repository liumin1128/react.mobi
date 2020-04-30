import React, { PureComponent, createContext, useReducer, useContext, useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import defaultTheme from '@/config/theme/default'
import darkTheme from '@/config/theme/dark'
import { useOnMount } from '@/hooks'
import { getStorage, setStorage } from '@/utils/store'
import { USER_SETTING_THEME } from '@/config/base'

const themes = {
  default: defaultTheme,
  dark: darkTheme,
}

const defaultStr = 'default'

export const ThemeContext = createContext(darkTheme)

// // ThemeProvider的hoc用法
export function withThemeProvider(WrappedComponent) {
  return class ThemeContextProvider extends PureComponent {
    state = {
      theme: defaultStr,
    }

    setTheme = () => {
      const { theme } = this.state
      this.setState({
        theme: theme === 'default' ? 'dark' : 'default',
      })
    }

    render() {
      const { theme } = this.state
      return (
        <ThemeContext.Provider value={{ theme: themes[theme], setTheme: this.setTheme }}>
          <WrappedComponent {...this.props} />
        </ThemeContext.Provider>
      )
    }
  }
}

// // theme的hoc用法
export function withThemeConsumer(WrappedComponent) {
  return props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent {...props} {...value} />}
    </ThemeContext.Consumer>
  )
}

// // ThemeProvider的hook用法
export default function HookThemeProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case 'switch':
        return { theme: state.theme === 'default' ? 'dark' : 'default' }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}

//
export function ThemeContextProvider({ children }) {
  const themeStr = getStorage(USER_SETTING_THEME) || defaultStr

  const [state, setState] = useState(themeStr)

  useOnMount(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  })

  const theme = themes[state]
  const setTheme = () => {
    const str = state === 'default' ? 'dark' : 'default'
    setStorage(USER_SETTING_THEME, str)
    setState(str)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

// theme的hook用法
export function useTheme() {
  return useContext(ThemeContext)
}
