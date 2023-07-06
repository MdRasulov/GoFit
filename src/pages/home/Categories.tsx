import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  Typography,
  ListItemButton,
} from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css/sea-green'
import { useState } from 'react'
import all from '../../assets/all.png'
import bodypart from '../../assets/bodypart.png'
import equipment from '../../assets/equipment.png'
import muscle from '../../assets/muscle.png'

const exerciseCategory = [
  {
    name: 'Body Part',
    category: 'bodyPart',
    img: bodypart,
    querries: [
      'back',
      'cardio',
      'chest',
      'lower arms',
      'lower legs',
      'neck',
      'shoulders',
      'upper arms',
      'upper legs',
      'waist',
    ],
  },
  {
    name: 'Muscle Target',
    category: 'target',
    img: muscle,
    querries: [
      'abductors',
      'abs',
      'adductors',
      'biceps',
      'calves',
      'cardiovascular system',
      'delts',
      'forearms',
      'glutes',
      'hamstrings',
      'lats',
      'levator scapulae',
      'pectorals',
      'quads',
      'serratus anterior',
      'spine',
      'traps',
      'triceps',
      'upper back',
    ],
  },
  {
    name: 'Equipment',
    category: 'equipment',
    img: equipment,
    querries: [
      'assisted',
      'band',
      'barbell',
      'body weight',
      'bosu ball',
      'cable',
      'dumbbell',
      'elliptical machine',
      'ez barbell',
      'hammer',
      'kettlebell',
      'leverage machine',
      'medicine ball',
      'olympic barbell',
      'resistance band',
      'roller',
      'rope',
      'skierg machine',
      'sled machine',
      'smith machine',
      'stability ball',
      'stationary bike',
      'stepmill machine',
      'tire',
      'trap bar',
      'upper body ergometer',
      'weighted',
      'wheel roller',
    ],
  },
]

const SPLIDE_PROPS = {
  arrows: false,
  perPage: 3,
  perMove: 1,
  wheel: true,
  snap: true,
  speed: 1800,
  gap: '2rem',

  breakpoints: {
    950: {
      perPage: 3,
    },
    750: {
      perPage: 2,
    },
    520: {
      type: 'loop',
      perPage: 1,
      gap: '1rem',
    },
  },
}

const cardStyle = {
  height: '15rem',
  bgcolor: 'primary.main',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
}

const Categories = () => {
  const [querries, setQuerries] = useState<string[]>([])
  const [modalState, setModalState] = useState<boolean>(false)

  const handleModalClose = () => setModalState(false)
  const handleModalOpen = (querries: string[]) => {
    setModalState(true)
    setQuerries(querries)
  }

  return (
    <>
      <Splide options={SPLIDE_PROPS}>
        <SplideSlide key="all">
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              image={all}
              height="75%"
              alt="category"
              sx={{ objectFit: 'contain', padding: '1.5rem' }}
            ></CardMedia>
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'secondary.main',
              }}
            >
              <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
                All
              </Typography>
            </CardContent>
          </Card>
        </SplideSlide>
        {exerciseCategory.map((item) => (
          <SplideSlide
            key={item.category}
            onClick={() => {
              handleModalOpen(item.querries)
            }}
          >
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={item.img}
                height="75%"
                alt="category"
                sx={{ objectFit: 'contain', padding: '1.5rem' }}
              ></CardMedia>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'secondary.main',
                }}
              >
                <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
      {/* ---------Modal----------- */}
      <Dialog
        open={modalState}
        onClose={handleModalClose}
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle color={'primary'}>Choose a target</DialogTitle>
        <DialogContent dividers>
          {querries.length > 0 &&
            querries.map((querry) => (
              <List key={querry} disablePadding>
                <ListItem divider disableGutters>
                  <ListItemButton>
                    <Typography>{querry.toUpperCase()}</Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Categories
