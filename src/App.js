import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
//Typo&Fonts
import Typography from '@mui/material/Typography';
import Bock_Personaluse from './fonts/Bock_Personaluse.woff';
//FinTypo&Fonts
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            variant="outlined"
            sx={{ bgcolor: "secondary.main", margin: "5px", width: 'auto', minWidth: '250px' }}
            p={1}
          >
            <Typography style={{ fontWeight: "bold" }} variant="h6" pt={2} pl={3}>
              Du hard-skill
            </Typography>
            <CardContent pt={2} px={2} align='center'>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '10%',
                  width: '220px',
                  height: 'auto'
                }}
                image="/static/images/html5-icon-png-1.jpg"
                alt="random"
              />
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '5%',
                  height: 'auto',
                  width: '150px'
                }}
                image="/static/images/react-logo-import-io-221727.png"
                alt="random"
              />
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '2%',
                  height: '130px',
                  width: 'auto'
                }}
                image="/static/images/python.png"
                alt="random"
              />
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '%',
                  height: '80px',
                  width: 'auto'
                }}
                image="/static/images/flask.png"
                alt="random"
              />
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '10%',
                  height: '100px',
                  width: 'auto'
                }}
                image="/static/images/wordpress.png"
                alt="random"
              />
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            variant="outlined"
            sx={{ bgcolor: "fourth.main", margin: "5px", width: 'auto', minWidth: '250px' }}
            p={1}
          >
            <Typography style={{ fontWeight: "bold", marginRight: '15px' }} variant="h6" pt={2} pl={3}>
              Du soft-skill
            </Typography>
            <CardContent pt={2} px={2} align='center'>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Autonomie
              </Box>
              <CardMedia
                component="img"
                sx={{
                  mt: '-3px',
                  height: '100px',
                  width: 'auto',
                  mb: '20px'
                }}
                image="/static/images/autonomie.png"
                alt="random"
              />
              <br></br>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Ecoute active
              </Box>
              <CardMedia
                component="img"
                sx={{
                  mt: '-3px',
                  height: '100px',
                  width: 'auto',
                  mb: '20px'
                }}
                image="/static/images/ecouteactive.png"
                alt="random"
              />
              <br></br>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Sens de l'équipe
              </Box>
              <CardMedia
                component="img"
                sx={{
                  mt: '-5px',
                  height: '100px',
                  width: 'auto',
                  mb: '20px'
                }}
                image="/static/images/sensdelequipe.png"
                alt="random"
              />
              <br></br>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Agile
              </Box>
              <CardMedia
                component="img"
                sx={{
                  mt: '-23px',
                  height: '100px',
                  width: 'auto',
                  mb: '20px'
                }}
                image="/static/images/agile2.png"
                alt="random"
              />
              <br></br>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Créatif
              </Box>
              <CardMedia
                component="img"
                sx={{
                  mt: '-5px',
                  height: '100px',
                  width: 'auto'
                }}
                image="/static/images/creatif.png"
                alt="random"
              />
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            variant="outlined"
            sx={{ bgcolor: "secondary.main", margin: "5px", width: 'auto', minWidth: '250px' }}
            p={1}
          >
            <Typography style={{ fontWeight: "bold" }} variant="h6" pt={2} pl={3}>
              De la passion
            </Typography>
            <CardContent pt={2} px={2} align='center'>
              <a size="medium" href="https://www.instagram.com/jeromalo/?hl=fr" target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                <Box fontFamily="Monospace" variant="h8" component="div">
                  Visitez mon instagram et découvrez mon univers photographique
                </Box>
                <CardMedia
                  component="img"
                  sx={{
                    mt: '-5px',
                    height: '100px',
                    width: 'auto',
                    mb: '20px'
                  }}
                  image="/static/images/instagram.png"
                  alt="random"
                /></a>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            variant="outlined"
            sx={{ bgcolor: "fourth.main", width: "auto", minWidth: '250px' }}
            p={1}
          >
            <Typography style={{ fontWeight: "bold", marginRight: '15px' }} variant="h6" pt={2} pl={3}>
              Un parcours atypique
            </Typography>
            <CardContent pt={2} px={2} align='center'>
              <Box fontFamily="Monospace" variant="h8" component="div">
                Après un BTS Négociation et Relation Client puis une école d'audiovisuel (E.S.R.A),
                <br></br>
                <br></br>
                j'ai connu 12 ans d'expériences sur de multiples tournages télévisuels.
                <br></br>(cf. Linkedin).
                <br></br>
                <br></br>
                Je mets à profit ces expériences passées et l'enrichissement en skills,
                <br></br>
                autant techniques que créatives,
                <br></br>
                à profit dans ma nouvelle aventure numérique !
              </Box>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
//Fonts

const theme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#FF9F1C',
      },
      secondary: {
        main: '#FFBF69',
      },
      third: {
        main: '#FFFFFF',
      },
      fourth: {
        main: '#CBF3F0',
      },
      fifth: {
        main: '#2EC4B6',
      },
    },
  },
  {
    typography: {
      fontFamily: 'Bock_Personaluse',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Bock_Personaluse';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Bock_Personaluse'), local('Bock_Personaluse'), url(${Bock_Personaluse}) format('woff');
        }
      `,
      },
    },
  }
);


//Accordeon
function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ bgcolor: 'secondary.main' }}
        >
          <Box sx={{ width: '100%', height: '45px', flexShrink: 0, textAlign: 'center', paddingTop: '10px', fontFamily: 'Monospace' }} color="black" textAlign="center">
            30 secondes à m'accorder ?
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CustomizedTimeline />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ bgcolor: '#c4e4a2' }}
        >
          <Box sx={{ width: '100%', height: '45px', flexShrink: 0, textAlign: 'center', paddingTop: '10px', fontFamily: 'Monospace' }} color="black" textAlign="center">Découvrez mes projets techs</Box>
        </AccordionSummary>
        <AccordionDetails>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/greasybar.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
                      Greasy Bar
                    </Typography>
                    <Box fontFamily="Monospace" variant="h8" component="div">
                      React
                      <br></br>
                      JavaScript
                      <br></br>
                      SqL
                      <br></br>
                      Flask
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/GreasyBar" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: 'fourth.main', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/snakepygame.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
                      Snake
                    </Typography>
                    <Box fontFamily="Monospace" variant="h8" component="div">
                      Python
                      <br></br>
                      C++
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/Snake" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid><Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/weather.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
                      Weather Forecast
                    </Typography>
                    <Box fontFamily="Monospace" variant="h8" component="div">
                      JavaScript
                      <br></br>
                      HTML
                      <br></br>
                      CSS
                      <br></br>
                      Python
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/WeatherForecast" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: 'fourth.main', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/emojigarden.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
                      Emoji Garden
                    </Typography>
                    <Box fontFamily="Monospace" variant="h8" component="div">
                      JavaScript
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/EmojiGarden" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/flourshower.jpeg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
                      Flour Shower
                    </Typography>
                    <Box fontFamily="Monospace" variant="h8" component="div">
                      HTML
                      <br></br>
                      CSS
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/EmojiGarden" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const cards = [1, 2, 3];

//Copyright
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Portfolio "homemade" avec React MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
        }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%'
        }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ fontFamily: 'Monospace' }} color="white">
              Bienvenue sur mon portfolio
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + './static/images/naturebokeh.jpg'})`,
            pt: 8,
            pb: 6,
          }}
        >
          <Stack
            sx={{
              pt: 2,
              mt: '-81px'
            }}
            direction="row"
            spacing={10}
            justifyContent="center"
          >
            <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">linkedIn</Button>
            <Button variant="outlined" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
            <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Contact</Button>
          </Stack>
          <Container maxWidth="md" >
            <Box>
              <Typography
                fontSize="auto"
                component="h1"
                variant="h1"
                align="center"
                color="white"
                gutterBottom
                fontFamily='Bock_Personaluse'
              >
                Jerome BERTRAND
              </Typography>
            </Box>
            <Paper elevation={10}>
              <CardMedia
                component="img"
                sx={{
                  mt: '-55px',
                }}
                image="/static/images/avatar/JeromeProfil.JPG"
                alt="random"
              />
            </Paper>
            <Box sx={{ mt: '-10px' }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="WHITE"
                fontFamily='Bock_Personaluse'
              >
                Développeur
                <Box sx={{ mt: '-30px', ml: '70px' }}>
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="primary.main"
                    fontFamily='Bock_Personaluse'
                  >
                    Tech-Front
                  </Typography>
                </Box>
              </Typography>
            </Box>
            <Box pb="40px" pt='100px' sx={{ fontFamily: 'Monospace' }} color="white" textAlign="left">
              Je suis un développeur web junior basé à Paris et Saint-Malo,
              reconverti de l'univers de la télévision vers celui du numérique.
            </Box>
            <Box pb="40px" pt='30px' sx={{ fontFamily: 'Monospace' }} color="white" textAlign="right">
              J'ai effectué une formation de 10 mois commencée en Septembre 2021 à <br></br><a href="https://matrice.io/" target="_blank" style={{ textDecoration: 'none', color: "yellow" }}>Matrice Association</a>
            </Box>
            <Box pb="40px" pt='30px' sx={{ fontFamily: 'Monospace' }} color="white" textAlign="left">
              Orienté Front-End et expérience utilisateur, <br></br>
              j'ai acquis au cours de ma formation des connaissances Back-End.<br></br>
              j'ai également été sensibilisé à la méthodologie Agile, <br></br>
              au DesignThinking ou encore au Product Management.
            </Box>
            <Box pb="80px" pt='30px' sx={{ fontFamily: 'Monospace' }} color="white" textAlign="right">
              Au plaisir de collaborer ensemble.
            </Box>

            <ControlledAccordions />
            <Stack
              sx={{ pt: 4, mb: '50px' }}
              direction="row"
              spacing={10}
              justifyContent="center"
            >
              <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">lkdn</Button>
              <Button variant="contained" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
              <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Mail</Button>
            </Stack>
          </Container>
        </Box>

      </main >
      {/* Footer */}
      < Box sx={{ bgcolor: 'primary.main', p: 0 }
      } component="footer" >
        <Typography variant="h6" align="center" gutterBottom>
          Jérôme BERTRAND - Developpeur
        </Typography>
        <Copyright />
      </Box >
      {/* End footer */}
    </ThemeProvider >
  );
}