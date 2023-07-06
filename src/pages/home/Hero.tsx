import { Box, Container, Stack, Typography } from '@mui/material'
import hero_image from '../../assets/hero_image.png'
import { RedButton } from '../../styles/styles'

const Hero = () => {
  return (
    <Box
      sx={{
        height: 'max(35rem, 100vh)',
        backgroundColor: '#212A3E',
        display: 'flex',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          flexGrow: 1,
          paddingTop: { xs: '2rem', sm: '8rem' },
          paddingBottom: { xs: '5rem', sm: '4rem' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h1"
          color={'secondary'}
          sx={{ fontWeight: 500, fontSize: 'clamp(1.5rem, 8vw, 4rem)' }}
        >
          BUILD YOUR <span style={{ color: '#E94560' }}>IDEAL</span> BODY <br />{' '}
          WITH
          <span style={{ color: '#E94560' }}> GoFit</span>
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 2.5, sm: 4 }}
          mt={{ xs: '1.2rem', md: '1rem', lg: '0.75rem' }}
        >
          <Typography
            color={'secondary'}
            sx={{
              borderBottom: '1px solid',
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            1300+ Exercises
          </Typography>
          <Typography
            color={'secondary'}
            sx={{
              borderBottom: '1px solid',
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            Tutorial Vides
          </Typography>
          <Typography
            color={'secondary'}
            sx={{
              borderBottom: '1px solid',
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            Easy Search
          </Typography>
        </Stack>
        <Box
          sx={{
            width: { xs: '80%', md: '65%' },
            height: { xs: '12rem', sm: '19rem', md: '21rem', lg: '25rem' },
            transform: {
              md: 'translateY(-30%)',
              lg: 'translateY(-40%)',
            },
          }}
          position="absolute"
          top={'50%'}
          right={0}
        >
          <Box
            component="img"
            src={hero_image}
            alt="pushup"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'end' }}>
          <RedButton variant="contained">Explore Exercises</RedButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
