import { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

export const ThemeContext = createContext({ toggleColorMode: () => {} })

export function ThemeProvider ({ children }: PropsWithChildren) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')
  
  const theme = useMemo(
    () => createTheme({
        palette: {
          mode,
        },
    }),
    [mode],
  );
  
  const value = useMemo(
    () => ({
      theme,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [theme],
  );

  useEffect(
    () => {
      setMode(prefersDarkMode ? 'dark' : 'light')
    },
    [prefersDarkMode],
  )

  return (
      <ThemeContext.Provider value={value}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
  )
}
