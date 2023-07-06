import { createTheme } from '@mui/material'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#394867',
      contrastText: '#F1F6F9',
    },
    secondary: {
      main: '#F1F6F9',
      contrastText: '#394867',
    },
  },
})

export const RedButton = styled(Button)(() => ({
  backgroundColor: '#E94560',
  color: '#F1F6F9',
  border: '1px solid #E94560',
  '&:hover': {
    backgroundColor: '#9BA4B5',
    color: '#F1F6F9',
    border: '1px solid #F1F6F9',
  },
}))

export const BlueButton = styled(Button)(() => ({
  backgroundColor: '#9BA4B5',
  color: '#F1F6F9',
  border: '1px solid #9BA4B5',
  '&:hover': {
    backgroundColor: '#F1F6F9',
    color: '#9BA4B5',
  },
}))
