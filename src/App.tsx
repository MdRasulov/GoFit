import Home from './pages/home'
import Footer from './components/Footer'
import Favorite from './pages/favotite'
import CaloryTracker from './pages/calory-tracker'
import { Box, ThemeProvider } from '@mui/material'
import { theme } from './styles/styles'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { WeightCalculator } from './pages/weight-calculator'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box bgcolor={'secondary.main'}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/calories" element={<CaloryTracker />} />
            <Route path="/weight-calculator" element={<WeightCalculator />} />
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
