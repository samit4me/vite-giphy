import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Typography variant="h3">
        Montu React Challenge
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        by Samuel Sharpe
      </Typography>
      <Typography paragraph>
        A very quick throw together to make use of the Giphy API!<br />
        I haven't used React/TypeScript/MUI in 2 years, plz take it ezy 😅
      </Typography>
      <Typography paragraph>
        Given the Giphy SDK provides some robust components I've done a solutions with them.<br />
        I've also written a rough custom implementation using the Giphy API.<br />
        Given the luxury of time and in addition to the improvements list, I would polish UI more, work more on a11y, translations, testing...
      </Typography>
      <Box sx={{ display: 'flex', gap: 2,  }}>
        <Button variant="outlined" component={Link} to="/giphy-sdk">Giphy SDK</Button>
        <Button variant="outlined" component={Link} to="/giphy-api">Giphy API</Button>
      </Box>
    </div>
  );
}

export default Home