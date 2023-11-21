import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from './ThemeProvider'
import RouterProvider from './RouterProvider'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <RouterProvider />
    </ThemeProvider>
  )
}

export default App
