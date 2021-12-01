import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={4} style={{backgroundColor: 'red'}}>
            <Grid item  
              xs={4} >
              <Profile/>
            </Grid>
            <Grid item xs={8} style={{backgroundColor: 'blue',  borderRadius: '10px'}}>
              <Header/>
              <Portfolio/>
              <Resume/>
              <Footer/>
            </Grid>
       </Grid>
       </Box>
    </Container>
  );
}

export default App;
