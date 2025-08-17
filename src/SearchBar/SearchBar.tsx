import { Button, Box, Typography, TextField } from '@mui/material'
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';
  
export default function SearchBar () {
  const { setFilter, searchtext, setSearchtext } = useContext(ExtensionsContext);

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
      <TextField
          fullWidth
          id="outlined-basic"
          label="Search Extension Name"
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: 300 },
            input: {
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              padding: "16.5px 14px",
            },
            label: {
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            },
            "& label": {
              color: "#4fa8dbff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#080f36ff",
              },
            },
          }}
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
      />
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