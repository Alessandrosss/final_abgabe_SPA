import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'

const CardIcon = (props) => {

  const {title, icon, description} = props

  return (
    <Box
      sx={{
        maxWidth: '18rem',
        marginX: 'auto',
        padding: '2rem 1rem',
      }}
    >
      {icon}
      <Typography
        fontSize='22px'
        fontWeight='bold'
      >
        {title}
      </Typography>
      <Typography
        fontSize='16px'
        fontWeight='200'
      >
        {description}
      </Typography>
    </Box>
  )
}

export default CardIcon
