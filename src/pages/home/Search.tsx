import { Box, TextField, Typography } from '@mui/material'
import { RedButton } from '../../styles/styles'

const Search = () => {
  return (
    <Box mt={{ xs: '3rem', md: '5rem' }} mb={{ md: '3rem' }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          textAlign: 'center',
        }}
        color="primary"
      >
        Find Any Exercise
      </Typography>
      <Box
        component="form"
        mx="auto"
        mt={{ xs: '1rem', md: '2rem' }}
        width={{ md: '70%' }}
        display="flex"
      >
        <TextField
          color="primary"
          label="Exercise name"
          fullWidth
          autoComplete="false"
          size="small"
          InputProps={{
            sx: { borderRadius: '5px 0 0 5px' },
          }}
        />
        <RedButton
          sx={{
            borderRadius: '0 5px 5px 0',
            fontSize: { xs: '0.7rem', md: '0.875rem;' },
          }}
        >
          Search
        </RedButton>
      </Box>
    </Box>
  )
}

export default Search
