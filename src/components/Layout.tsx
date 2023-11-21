import { useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'

import { ThemeContext } from '../ThemeProvider'

function Layout() {
    const theme = useTheme()
    const themeContext = useContext(ThemeContext)
    const [mobileOpen, setMobileOpen] = useState(false)
  
    const drawerWidth = 240
    const navItems: { to: string; text: string }[] = [
      { to: '/', text: 'Home' },
      { to: '/giphy-sdk', text: 'Giphy SDK' },
      { to: '/giphy-api', text: 'Giphy API' },
    ]
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState)
    }
  
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map(({ to, text }) => (
                <Link key={to} to={to}>
                  <Button sx={{ color: '#fff' }}>
                    {text}
                  </Button>
                </Link>
              ))}
            </Box>
            <IconButton sx={{ ml: 1 }} onClick={themeContext.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
              {navItems.map(({ to, text }) => (
                <ListItem key={to} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link to={to}>
                      <ListItemText primary={text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          </Drawer>
        </nav>
  
        <Box component="main" sx={{ mt: 8, p: 4 }}>
          <Outlet />
        </Box>
      </Box>
    )
  }

  export default Layout