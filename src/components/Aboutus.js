import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/CardActionArea';
import '../style/Aboutus.css';
function Aboutus() {
    return (

        // <Grid className="aboutus-page-main m-5">
        //         <Typography  className='m-2'> We have the pleasure to introduce ourselves as the leading supplier of replacement spares and service contractors for Ingersoll-Rand, Dresser-Rand, Chicago Pneumatics, Atlas Copco, and Kirloskar Make Air & Gas Compressors in North & South India.
        //         </Typography>
        //         <Typography className='aboutus-page-heading'>
        //             COMPRESSED AIR POWER: INDISPENSABLE FOR MODERN INDUSTRY
        //         </Typography>
        //         <Typography  className='m-2'>
        //             ‘Compressed Air Power’ has come to occupy a unique and critical position in different processes of various Industries. In many cases Air power is safer and cheaper than electric power. Consistency and quality of air power depends on the quality of air compressors and the replacement spares used.
        //         </Typography>
        //         <Typography className='aboutus-page-heading m-2'>
        //             BACKGROUND</Typography>
        //         <Typography className='m-2'>
        //             Sigma Pneumatics & Spares was setup 05 years back with the sole motto of quality service and spares at affordable ra tes in the field of Compressor servicing. From strength of merely 3 people the company has now grown to have more than 30 in its fold, including 18 service Engineers, and now operates from three locations.  This on itself speaks volumes of the respect and trust the Industrial fraternity has reposed on us.
        //         </Typography>
        //         <Typography className='aboutus-page-heading m-2'>PRODUCTS</Typography>
        //         <Typography  className='m-2'>

        //             For us Customer Satisfaction is not a means but an end on itself. Being the ex-workers of Ingersoll-Rand  and Chicago Pneumatics the leaders in Compressed Air technology and by virtue of the experience gained from the field we can safely call ourselves as experts in the field.
        //             We at Airpro Pneumatics & Spares, have successfully addressed to all the doubts and fears commonly expressed about suppliers of Compressor Spares. The replacement spares supplied by us are sourced from the OE suppliers. Coupled this with our low overheads we are able to supply genuine spares at considerably lower rates. There would be a minimum saving of 25% - 30% on your spares cost. All our spares are highly reliable and exactly adhere to OE specifications.  Most of the spares supplied by us are guaranteed for a minimum period of 12 months of defect-less performance.

        //         </Typography>

        //         <Typography className='aboutus-page-heading m-2'> SERVICES</Typography>

        //         <Typography  className='m-2'>
        //             You would definitely agree that for better & consistent supply of Air Power, servicing of the compressors should be of high quality. With this in mind we have a dedicated, qualified and highly experienced group of Engineers who would attend to your problems / break downs round-the-clock.
        //         </Typography>
        //         <Typography className='m-2'>
        //             On entering into an Annual Maintenance Contract with us you can be absolutely sure of trouble-free compressor operation throughout the contract period. In fact, we help you in achieving zero-break down for compressors throughout the year. Our team of service Engineers are available to you round-the-clock to attend to break down calls. As a further proof of our dedication we are in a position to carryout the maintenance of your Compressors on Sundays and National Holidays without affecting your production schedule. You also save a lot of expenditure by not employing people separately for the purpose of Compressor Maintenance and our AMC rates are heard to be believed. </Typography>
        //             <Typography  className='m-2'>
        //             If you judge a Company by the clients it has or the business relations it keeps, you would agree that we are far above our competitors. Year after year we are able to meet the exacting standards set by the leading MNCs, PSUs & Indian Companies in different Industries.
        //             </Typography>
        //             <Typography  className='m-2'>
        //                 We, at Airpro, believe in and look forward to establishing long-term, mutually beneficial business relationships. Business with us means entering the realm of professionalism and leaving the ordinary behind. Kindly get in touch with Mr. Manas & Debasish to know more about our services. We would very much appreciate your kind gesture of letting us visit your premises to offer personalized service / solutions.
        //             </Typography>
        // </Grid> 
        
            <Grid container spacing={2} className="aboutus-page-container about-fnd">
                <Typography>Hello</Typography>
                <Grid item xs={12} sm={6} className="about-2nd">
                    <Typography variant="body1">
                        Content for the first grid item
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className="about-2nd">
                    <Typography variant="body1">
                        Content for the second grid item
                    </Typography>
                </Grid>

                {/* Second row */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1">
                        Content for the third grid item
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1">
                        Content for the fourth grid item
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1">
                        Content for the fifth grid item
                    </Typography>
                </Grid>
            </Grid>
      

    )
}

export default Aboutus
