import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Home.css';
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import Button from '@mui/material/Button';

// import ReciprocatingAirCompressor from '../assets/ReciprocatingAirCompressor.png';
// import IngersollRandType30Parts from '../assets/IngersollRandType30Parts.png';
// import IngersollRandType30NLParts from '../assets/IngersollRandType30NLParts.png';
// import IngersollRandESVParts from '../assets/IngersollRandESVParts.png';
// import AtlasCopcoAirCompressorParts from '../assets/AtlasCopcoAirCompressorParts.png';




// import Typography from '@mui/material/Typography';

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
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../assets/ReciprocatingAirCompressor.png"
        title="ReciprocatingAirCompressor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
    </Card>
      
    </Grid>


  );
};

export default Home;
