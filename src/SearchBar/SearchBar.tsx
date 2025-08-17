import { Button, Box } from '@mui/material'
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';
  
export default function SearchBar () {
  const { setFilter } = useContext(ExtensionsContext);



 return (
    <>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row-reverse'} gap={1} sx={{pt: 5, pr: 10, pb: 0}}>

        <Button variant="contained" onClick={() => setFilter('inactive')} sx={{borderRadius: 50, }} > Inactive </Button>  

        <Button variant="contained" onClick={() => setFilter('active')} sx={{borderRadius: 50, }} > Active </Button>  

        <Button variant="contained"  onClick={() => setFilter('all')} sx={{borderRadius: 50, }} > All </Button>
      </Box>
    </>  

)}