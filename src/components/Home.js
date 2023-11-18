import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Home.css';
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia'
import Typography from '@mui/material/CardActionArea';

// import Button from '@mui/material/Button';

// import ReciprocatingAirCompressor from '../assets/ReciprocatingAirCompressor.png';
// import IngersollRandType30Parts from '../assets/IngersollRandType30Parts.png';
// import IngersollRandType30NLParts from '../assets/IngersollRandType30NLParts.png';
// import IngersollRandESVParts from '../assets/IngersollRandESVParts.png';
// import AtlasCopcoAirCompressorParts from '../assets/AtlasCopcoAirCompressorParts.png';

const cardData = [
  {
    image: 'https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Reciprocating-Air-Compressor.png',
    alt: 'ReciprocatingAirCompressor',
    heading: 'ReciprocatingAirCompressor',
    subheading: 'Multi Stage Piston Compressor , Two Stage Piston Compressor , Vacuum Compressor',
  },
  {
    image: 'https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-Type-30-Parts.png',
    alt: 'Ingersoll Rand Type 30 Air Compressor Parts',
    heading: 'Ingersoll Rand Type 30 Air Compressor Parts',
    subheading: 'IR 15T2 Parts , IR 7T2 Parts , IR 231 Parts, IR 7100 Parts IR 2340 Parts , IR 2475 Parts , IR 2540 Parts , IR 2545 Parts , IR 3000 Parts',
  },
  {
    image:"https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-Type-30-Parts.png",
    alt:"Ingersoll Rand Type 30 Air Compressor Parts",
    heading: 'Ingersoll Rand Type 30 Air Compressor Parts',
    subheading:'IR 5T2NL Parts,IR 10T3NLM Parts',
  },
  {
    image:"https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-ESV-Parts.png",
    alt:"ReciprocatingAirCompressor",
    heading: 'ReciprocatingAirCompressor',
    subheading:' IR 7 x 5 ESV 1 LUB, 8 x 5 ESV 1 LUB , 9 1/2 x 5 ESV 1 LUB , 7 x 5 ESV 1 NL,8 x 5 ESV 1 NL, 8 x 7 ESV 1 NL, 9 1/2 x ESV 1 NL, 9 1/2 x 7 ESV 1 LUB,9 x 7 ESV 1 NL, 8 x 7 ESV 1 LUB, 9 1/2 x 7 ESV 1 NL',
  },
  {
    image:"https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Atlas-Copco-Air-Compressor-Parts.png",
    alt:"Atlas Copco Air Compressor Parts",
    heading:"Atlas Copco Air Compressor Parts",
    subheading:"Atlas Copco VT 4 Parts Atlas Copco VT 5 Parts",
  }

];

const Home = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12}>

        <h3>Parts For Compressor</h3>

        <Grid item xs={12} md={6}><span className='home-span'>Parts For Compressor</span> | Partsforcompressor.com is a Global Supplier of OEM Quality New Aftermarket Replacement <span className='home-span'>Air Compressor parts , Parts for Compressor, Ingersoll Rand Air Compressor Parts, Atlas Copco Air Compressor Parts</span> from India.</Grid>

        <Grid item xs={12} md={6}>PFC - Parts For Compressor is a global supplier of Reciprocating Air Compressor and OEM Quality new Aftermarket Replacement Air Compressor parts for <span className='home-span'>Ingersoll Rand Type 30 Air Compressor Parts , Ingersoll Rand Type 30 NL Air Compressor Parts , Ingersoll Rand ESV - LUB & NL Air Compressor Parts , Ingersoll Rand ESH - LUB & NL Air Compressor Parts , Ingersoll Rand IHE Air Compressor Parts , Ingersoll Rand PHE Air Compressor Parts , Ingersoll Rand XLE Air Compressor Parts , Atlas Copco Air Compressor Parts , Refrigeration Compressor Parts</span> from India.</Grid>
      </Grid>

      {/* <Grid sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <p>xs=2</p>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
      {/* 
      <Grid  className="home-images" >
        <img src={ReciprocatingAirCompressor} alt="ReciprocatingAirCompressor" />
        <img src={IngersollRandType30Parts} alt="IngersollRandType30Parts" />
        <img src={IngersollRandType30NLParts} alt="IngersollRandType30NLParts"/>
        <img src={IngersollRandESVParts} alt="IngersollRandESVParts" />
        <img src={AtlasCopcoAirCompressorParts} alt="AtlasCopcoAirCompressorParts" />

      </Grid> */}


      {/* u can add this code but it is not responsicve */}
      {/* <Grid className="home-page-images">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Reciprocating-Air-Compressor.png"
              alt="ReciprocatingAirCompressor"
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div" className='home-page-image-heading'>
                ReciprocatingAirCompressor
              </Typography>
              <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                Multi Stage Piston Compressor , Two Stage Piston Compressor ,
                Vacuum Compressor
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-Type-30-Parts.png"
              alt="Ingersoll Rand Type 30 Air Compressor Parts"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='home-page-image-heading'>
                Ingersoll Rand Type 30 Air Compressor Parts
              </Typography>
              <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                IR 15T2 Parts , IR 7T2 Parts , IR 231 Parts, IR 7100 Parts
                IR 2340 Parts , IR 2475 Parts , IR 2540 Parts , IR 2545 Parts , IR 3000 Parts
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-Type-30-NL-Parts.png"
              alt="Ingersoll Rand Type 30 NL Air Compressor Parts"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='home-page-image-heading'>
                Ingersoll Rand Type 30 NL Air Compressor Parts
              </Typography>
              <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                IR 5T2NL Parts ,
                IR 10T3NLM Parts
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cmsimagesftp.blob.core.windows.net/container1/partsforcompressor/Ingersoll-Rand-ESV-Parts.png"
              alt="ReciprocatingAirCompressor"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='home-page-image-heading'>
                Ingersoll Rand ESV/ESH Air Compressor Parts
              </Typography>
              <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                IR 7 x 5 ESV 1 LUB, 8 x 5 ESV 1 LUB , 9 1/2 x 5 ESV 1 LUB , 7 x 5 ESV 1 NL,
                8 x 5 ESV 1 NL, 8 x 7 ESV 1 NL, 9 1/2 x 5 ESV 1 NL, 9 1/2 x 7 ESV 1 LUB,
                9 x 7 ESV 1 NL, 8 x 7 ESV 1 LUB, 9 1/2 x 7 ESV 1 NL
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> */}


      <Grid container className="home-page-images" spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='home-page-image-heading'>
                    {card.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                    {card.subheading}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>



    </Grid>


  );
};

export default Home;
