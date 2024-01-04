import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Home.css';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia'


// import Button from '@mui/material/Button';

// import ReciprocatingAirCompressor from '../assets/ReciprocatingAirCompressor.png';
// import IngersollRandType30Parts from '../assets/IngersollRandType30Parts.png';
// import IngersollRandType30NLParts from '../assets/IngersollRandType30NLParts.png';
// import IngersollRandESVParts from '../assets/IngersollRandESVParts.png';
// import AtlasCopcoAirCompressorParts from '../assets/AtlasCopcoAirCompressorParts.png';

const cardData = [
  {
    image: 'https://static.wixstatic.com/media/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg',
    alt: 'ReciprocatingAirCompressor',
    heading: 'ReciprocatingAirCompressor',
    subheading: ' Multi Stage Piston Compressor , Two Stage Piston Compressor, Vacuum Compressor, Non Lubricated Three Stage PET Compressor ',
  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt: 'Ingersoll Rand Type 30 Air Compressor Parts',
    heading: 'Ingersoll Rand Type 30 Air Compressor Parts',
    subheading: ' IR 15T2 Parts , IR 7T2 Parts , IR 231 Parts, IR 7100 Parts, IR 2340 Parts , IR 2475 Parts , IR 2540 Parts ,IR 2545 Parts , IR 3000 Parts',
  },
  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt: "Ingersoll Rand Type 30 NL Parts",
    heading: 'Ingersoll Rand Type 30 NL Parts',
    subheading: '  IR 5T2NL Parts ,IR 10T3NLM Parts',
  },
  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt: "Ingersoll Rand ESV Parts",
    heading: ' Ingersoll Rand ESV Parts',
    subheading: ' IR 4 x 5 ESV NL, IR 7 x 5 ESV 1 LUB, IR 8 x 5 ESV 1 LUB , IR 9 1/2 x 5 ESV 1 LUB, IR 11 x 7 ESV LUB, IR 12 x 9 ESV 1 NL',
  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt: " Ingersoll Rand Air Compressor Parts",
    heading: "  Ingersoll Rand Air Compressor Parts",
    subheading: "  IR 12 x 7 x 7 PHE Parts, IR 16 x 10 x 7 IHE NL Parts, PETStar PS4 Parts, IR 7 x 4 x 7 PHE-7 Parts, IR 10 x 6 x 7 PHE 7 NL Parts",
  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    heading: "Chicago Pneumatic Air Compressor Parts",
    subheading: "HN2T 150-180 NP Parts, HN2T 120-215 LP Parts, HN2T HP 40PD Parts, HN2T HP 80PD Parts, HN2T HP 100PD Parts",
  }

];

const Home = () => {
  return (

    <Grid className="home-container-page ">

      <Grid item xs={12} className="home-page-textf">

        <h1 >Parts For Compressor | Compressor Parts</h1>

        <Grid item xs={12} md={6} className="mt-5"><span className='home-span'>Parts For Compressor</span> | Partsforcompressor.com is a Global Supplier of OEM Quality New Aftermarket Replacement <span className='home-span'>Air Compressor parts , Parts for Compressor, Ingersoll Rand Air Compressor Parts, Atlas Copco Air Compressor Parts</span> from India.</Grid>

        <Grid item xs={12} md={6} className="mt-4">PFC - Parts For Compressor is a global supplier of Reciprocating Air Compressor and OEM Quality new Aftermarket Replacement Air Compressor parts for <span className='home-span'>Ingersoll Rand Type 30 Air Compressor Parts , Ingersoll Rand Type 30 NL Air Compressor Parts , Ingersoll Rand ESV - LUB & NL Air Compressor Parts , Ingersoll Rand ESH - LUB & NL Air Compressor Parts , Ingersoll Rand IHE Air Compressor Parts , Ingersoll Rand PHE Air Compressor Parts , Ingersoll Rand XLE Air Compressor Parts , Atlas Copco Air Compressor Parts , Refrigeration Compressor Parts</span> from India.</Grid>
      </Grid>

      <Grid container className="home-page-images mt-5" spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: '100%' }} className="card">
              <CardActionArea style={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.alt}
                  className='card-media'
                  style={{ height: '50%', width: '100%' }} // Adjust image height and width of the card here 
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" className='home-page-image-heading'>
                    {card.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='home-page-image-subheading'>
                    {card.subheading}
                  </Typography><hr/>
                  <Grid className="home-btn-link">
                    <a href="#" className="btn btn-danger">Click Here</a>
                  </Grid>
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
