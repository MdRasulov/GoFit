import CalculateIcon from '@mui/icons-material/Calculate'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import HomeIcon from '@mui/icons-material/Home'
import { NavLink as RouterNavLink } from 'react-router-dom'
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

const linkStyles = {
  color: 'secondary.main',
  transition: 'all 0.4s ease',
  '&.active': {
    color: '#E94560',
  },
}

export const NavBar = () => {
  return (
    <>
      <AppBar
        elevation={3}
        sx={{
          display: { xs: 'none', sm: 'block' },
          bgcolor: '#394867',
          color: 'secondary.main',
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Stack width={'100%'} direction="row" alignItems={'center'}>
              <Link component={RouterNavLink} to="/" sx={linkStyles}>
                <FitnessCenterIcon
                  sx={{ fontSize: { sm: '30px', lg: '36px' } }}
                />
              </Link>
              <Link
                component={RouterNavLink}
                to="/favorite"
                ml={'auto'}
                mr={{ sm: '4rem', md: '6rem' }}
                sx={linkStyles}
              >
                <Typography
                  sx={{
                    fontSize: { sm: '0.8rem', md: '0.9rem', lg: '1rem' },
                    fontWeight: 500,
                  }}
                >
                  Favorite
                </Typography>
              </Link>
              <Link
                component={RouterNavLink}
                to="/calories"
                mr={{ sm: '1rem', md: '2rem' }}
                sx={linkStyles}
              >
                <Typography
                  sx={{
                    fontSize: { sm: '0.8rem', md: '0.9rem', lg: '1rem' },
                    fontWeight: 500,
                  }}
                >
                  Calory Tracker
                </Typography>
              </Link>
              <Link
                component={RouterNavLink}
                to="/weight-calculator"
                sx={linkStyles}
              >
                <Typography
                  sx={{
                    fontSize: { sm: '0.8rem', md: '0.9rem', lg: '1rem' },
                    fontWeight: 500,
                  }}
                >
                  Weight Calculator
                </Typography>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <BottomNavigation
        value={'favorite'}
        sx={{
          display: { sm: 'none' },
          width: '100%',
          position: 'fixed',
          bottom: 0,
          zIndex: 1100,
          boxShadow: '0px -3px 20px -10px rgba(0,0,0,0.75)',
          bgcolor: '#F1F6F9',
        }}
      >
        <BottomNavigationAction value={'home'} icon={<HomeIcon />} />
        <BottomNavigationAction value={'favorite'} icon={<FavoriteIcon />} />
        <BottomNavigationAction value={'calories'} icon={<FastfoodIcon />} />
        <BottomNavigationAction value={'calculator'} icon={<CalculateIcon />} />
      </BottomNavigation>
    </>
  )
}
