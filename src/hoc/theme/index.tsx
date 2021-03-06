import React, { PureComponent, createContext, useContext, useState } from 'react'
import { ThemeProvider as MaterialThemeProvider, Theme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import defaultTheme from '@/config/theme/default'
import darkTheme from '@/config/theme/dark'
import { useOnMount } from '@/hooks'
import { getStorage, setStorage } from '@/utils/store'
import { USER_SETTING_THEME } from '@/config/base'

// ThemeContext https://www.jianshu.com/p/21a12320a782
type ThemeName = 'default' | 'dark'

// themes
const themes = {
  default: defaultTheme,
  dark: darkTheme,
}

const defaultStr = 'default'

// ContextProps
type ContextProps = {
  setTheme(): void
  theme: Theme
}

const themeStr = (getStorage(USER_SETTING_THEME) || defaultStr) as ThemeName

// ThemeContext
export const ThemeContext = createContext<Partial<ContextProps>>({
  theme: themes[themeStr],
})

interface ThemeProviderState {
  theme: ThemeName
}

// ThemeProvider的hoc用法 https://blog.csdn.net/sinat_17775997/article/details/84203095
export function withThemeProvider(WrappedComponent: React.ComponentType) {
  return class Provider extends PureComponent<Record<string, unknown>, ThemeProviderState> {
    constructor(props: Record<string, unknown>) {
      super(props)
      this.state = {
        theme: 'default',
      }
    }

    setTheme = () => {
      const { theme } = this.state
      this.setState({
        theme: theme === 'default' ? 'dark' : 'default',
      })
    }

    public render() {
      const { theme } = this.state

      return (
        <ThemeContext.Provider value={{ theme: themes[theme], setTheme: this.setTheme }}>
          <WrappedComponent {...this.props} />
        </ThemeContext.Provider>
      )
    }
  }
}

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ThemeName>(themeStr)

  useOnMount(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  })

  const theme = themes[state]
  const setTheme = () => {
    const str = state === 'default' ? 'dark' : 'default'
    setStorage(USER_SETTING_THEME, str)
    setState(str)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// theme的hook用法
export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        if (!theme) return null
        return (
          <MaterialThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </MaterialThemeProvider>
        )
      }}
    </ThemeContext.Consumer>
  )
}
