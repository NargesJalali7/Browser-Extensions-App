import { Button, Box, Typography } from '@mui/material'
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';
  
export default function SearchBar () {
  const { setFilter } = useContext(ExtensionsContext);

 return (
  <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ xs: "center", md: "space-between" }} 
      flexDirection={{ xs: "column", md: "row" }}            
      gap={2}
      sx={{ px: { xs: 2, sm: 3, md: 5 }, pt: { xs: 2, sm: 3, md: 5 }, pb: 2 }}
    >
      
      <Typography
        variant="h1"
        fontSize={{ xs: 17, sm: 19, md: 25, lg: 28, xl: 30 }}
        textAlign={{ xs: "center", md: "left" }}  
        color='white'     
        fontFamily={'Arial, sans-serif'}     
      >
        Extensions List
      </Typography>

      <Box
        display="flex"
        gap={1}
        flexWrap="wrap"
        justifyContent={{ xs: "center", md: "flex-end" }}    
      >
        <Button
          variant="contained"
          sx={{ fontSize: { xs: 10, sm: 15, md: 15 }, borderRadius: 50 }}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </Button>

        <Button
          variant="contained"
          sx={{ fontSize: { xs: 10, sm: 15, md: 15 }, borderRadius: 50 }}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>

        <Button
          variant="contained"
          sx={{ fontSize: { xs: 10, sm: 15, md: 15 }, borderRadius: 50 }}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
      </Box>
    </Box>
  </>
)}