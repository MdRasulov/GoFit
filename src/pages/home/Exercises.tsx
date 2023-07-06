import { Box, Divider, Grid, Typography, Pagination } from '@mui/material'
import ExerciseCard from '../../components/ExerciseCard'

const Exercises = () => {
  return (
    <Box my={'2rem'} minHeight={'25rem'}>
      <Divider />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
        }}
        color="primary"
        mt={{ xs: '1rem', md: '2rem' }}
        mb={{ xs: '2rem', md: '4rem' }}
      >
        Showing Results
      </Typography>
      <Grid
        container
        columnSpacing={{ sm: 2, md: 4 }}
        rowSpacing={{ xs: 2, sm: 4, md: 6 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExerciseCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Exercises
