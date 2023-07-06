import { Box, Card, CardMedia, Typography, Stack } from '@mui/material'
import image from '../assets/image.gif'

const tagStyle = {
  bgcolor: '#9BA4B5',
  width: 'fit-content',
  paddingInline: '0.4rem',
  paddingBlock: '0.1rem',
  borderRadius: '0.3rem',
  color: '#ffff',
  textTransform: 'capitalize',
}

const textStyle = {
  color: 'primary.main',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginTop: '0.5rem',
  textTransform: 'capitalize',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

const ExerciseCard = () => {
  return (
    <Card
      sx={{
        height: '19rem',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component={'img'}
        image={image}
        height={'75%'}
        sx={{ objectFit: 'contain' }}
        alt="exercise"
      />
      <Box sx={{ paddingInline: '0.7rem', paddingBlock: '0.5rem' }}>
        <Stack direction={'row'} gap={'0.7rem'}>
          <Box sx={tagStyle}>
            <Typography fontSize={'0.75rem'}>lower legs</Typography>
          </Box>
          <Box sx={tagStyle}>
            <Typography fontSize={'0.75rem'}>calves</Typography>
          </Box>
          <Box sx={tagStyle}>
            <Typography fontSize={'0.75rem'}>barbel</Typography>
          </Box>
        </Stack>
        <Typography sx={textStyle}>barbell seated calf raise</Typography>
      </Box>
    </Card>
  )
}

export default ExerciseCard
