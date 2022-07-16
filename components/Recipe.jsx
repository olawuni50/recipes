import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography, Tabs, Tab, Box, Grid, ListItem, AccordionDetails, Accordion, AccordionSummary} from '@mui/material';
import { Container } from '@mui/system';
import img1 from "../Images/fried-rice.jpg"
import img2 from "../Images/ice-cream.jpg"
import img3 from "../Images/pizza.jpg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography variant="h6" style={{textDecoration:"underline"}}>Recipe Details</Typography>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Recipe = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Container maxWidth="lg">
    <Grid container
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600 }}
    >
        

        <Grid xs={12} md={2}>
          
        <Typography variant="h6" style={{textDecoration:"underline"}}>List of Recipes</Typography>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        
        <Tab label="Fried Rice" {...a11yProps(0)} />
        <Tab label="Ice Cream" {...a11yProps(1)} />        
        <Tab label="Pizza" {...a11yProps(2)} />
       
      </Tabs>
      </Grid>

     
      <TabPanel value={value} index={0}>
        
        <Typography variant="h6" style={{textAlign:'center', marginBottom:"1rem"}}>Author:Mohammed Basir</Typography>

       
        <img src={img1} style={{ display: "block", marginLeft: "auto", marginRight:"auto", width:"50%"}} alt="fried rice" />

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" style={{textAlign:"center"}}>Ingredients</Typography> 
        </AccordionSummary>
        <AccordionDetails>
        <ListItem sx={{display: 'list-item'}}>3¾ cups (750g) long grain parboiled rice</ListItem>
                    <ListItem sx={{display: 'list-item'}}>Salt (to taste)</ListItem>
                    <ListItem sx={{display: 'list-item'}}>3 carrots</ListItem>
                    <ListItem sx={{display: 'list-item'}}>½ cup green beans</ListItem>
                    <ListItem sx={{display: 'list-item'}}>1 tablespoon Nigerian curry powder</ListItem>
                    <ListItem sx={{display: 'list-item'}}>100g cow liver</ListItem>
                    <ListItem sx={{display: 'list-item'}}>100g cow liver</ListItem>
                    <ListItem sx={{display: 'list-item'}}>Chicken (whole chicken or chicken drumsticks)</ListItem>
                    <ListItem sx={{display: 'list-item'}}>Vegetable Oil</ListItem>
                    <ListItem sx={{display: 'list-item'}}> 1 tablespoon thyme</ListItem>
                    <ListItem sx={{display: 'list-item'}}> 3 onions</ListItem>
                    <ListItem sx={{display: 'list-item'}}> 3 stock/boullion cubes</ListItem>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography variant="h5" style={{textAlign:"center"}}>How to Prepare</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItem sx={{ display: 'list-item' }}>Rinse the rice with cold water  </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Add 2 cups (473 ml) of water to the large pot</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Boil the mixture over high heat for 5 minutes</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Transfer the rice to a fine mesh strainer</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Place the strainer in a bowl of cold water</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Rinse off the rice with cold water.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Put 1/2 cup of stock in a pot and bring it to a boil</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Add the parboiled rice and boil the mixture</ListItem>
        </AccordionDetails>
      </Accordion>             
                
      </TabPanel>
      <TabPanel value={value} index={1}>
      
        <Typography variant="h6" style={{textAlign:'center', marginBottom:"1rem"}}>Author: Olawuni Olukunle</Typography>

        <img src={img2} style={{ display: "block", marginLeft: "auto", marginRight:"auto", width:"50%"}} alt="ice-cream" />


        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" style={{textAlign:"center"}}>Ingredients</Typography> 
        </AccordionSummary>
        <AccordionDetails>
        <ListItem sx={{display: 'list-item'}}>¾ cup white sugar</ListItem>
                    <ListItem sx={{display: 'list-item'}}>1 cup heavy whipping cream</ListItem>
                    <ListItem sx={{display: 'list-item'}}>2 ¼ cups milk</ListItem>
                    <ListItem sx={{display: 'list-item'}}>2 teaspoons vanilla extract</ListItem>
        </AccordionDetails>
      </Accordion>
                       
                    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" style={{textAlign:"center"}}>How to Prepare</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItem sx={{ display: 'list-item' }}>Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved.
                    <br/> Heat just until mix is hot and a small ring of foam appears around the edge.  </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Transfer cream mixture to a pourable container such as a large measuring cup.
                    <br/> Stir in vanilla extract and chill mix thoroughly, at least 2 hours. (Overnight is best.)</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Pour cold ice cream mix into an ice cream maker, turn on the machine,
                    <br/> and churn according to manufacturer's directions, 20 to 25 minutes.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>When ice cream is softly frozen, serve immediately or place a 
                    <br/> piece of plastic wrap directly on the ice cream and place in freezer to ripen, 2 to 3 hours.</ListItem>
                    
        </AccordionDetails>
      </Accordion>                    
      </TabPanel>


      <TabPanel value={value} index={2}>
      <Typography variant="h6" style={{textAlign:'center', marginBottom:"1rem"}}>Author: Jack James</Typography>

       
<img src={img3} style={{ display: "block", marginLeft: "auto", marginRight:"auto", width:"50%"}} alt="fried rice" />

<Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography variant="h5" style={{textAlign:"center"}}>Ingredients</Typography> 
</AccordionSummary>
<AccordionDetails>
<ListItem sx={{display: 'list-item'}}>2 ½ cups warm water(600 mL)</ListItem>
            <ListItem sx={{display: 'list-item'}}>1 teaspoon sugar</ListItem>
            <ListItem sx={{display: 'list-item'}}>2 teaspoons active dry yeast</ListItem>
            <ListItem sx={{display: 'list-item'}}>7 cups all-purpose flour(875 g), plus more for dusting</ListItem>
            <ListItem sx={{display: 'list-item'}}>6 tablespoons extra virgin olive oil, plus more for greasing</ListItem>
            <ListItem sx={{display: 'list-item'}}>1 ½ teaspoons kosher salt</ListItem>
            <ListItem sx={{display: 'list-item'}}>¼ cup semolina flour(30g)</ListItem>
            
</AccordionDetails>
</Accordion>

<Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
 <Typography variant="h5" style={{textAlign:"center"}}>How to Prepare</Typography>
</AccordionSummary>
<AccordionDetails>
<ListItem sx={{ display: 'list-item' }}>“Bloom” the yeast by sprinkling the sugar and yeast in the warm water.
          <br /> Let sit for 10 minutes, until bubbles form on the surface. </ListItem>
            <ListItem sx={{ display: 'list-item' }}>In a large bowl, combine the flour and salt. Make a well in the middle and add
            <br/> the olive oil and bloomed yeast mixture. Using a spoon, mix until a shaggy dough 
            <br/> begins to form.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Once the flour is mostly hydrated, turn the dough out onto a clean worksurface and knead for 
            <br />  10-15 minutes. The dough should be soft, smooth, and bouncy. Form the dough into a taut round.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Grease a clean, large bowl with olive oil and place the dough inside, turning to coat with 
            <br />the oil. Cover with plastic wrap. Let rise for at least an hour, or up to 24 hours.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Punch down the dough and turn it out onto a lightly floured work surface. 
            <br /> Knead for another minute or so, then cut into 4 equal portions and shape into rounds.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Lightly flour the dough, then cover with a kitchen towel and let rest for another 30 minutes 
            <br />to an hour while you prepare the sauce and any other ingredients.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Preheat the oven as high as your oven will allow, between 450-500˚F (230-260˚C). Place a pizza stone,
            <br /> heavy baking sheet  (turn upside down so the surface is flat), or cast iron skillet in the oven.</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Meanwhile, make the tomato sauce: Add the salt to the can of tomatoes and puree with 
            <br/>an immersion blender, or transfer to a blender or food processor, and puree until smooth.</ListItem>
</AccordionDetails>
</Accordion>
      </TabPanel>


     
      </Grid>
    {/* </Grid> */}
    </Container>
  );
}

export default Recipe