import { Box, IconButton, Typography } from "@mui/material";
import { BsDoorClosed } from "react-icons/bs";
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';

export default function SideBar () {
  const {selectedExtension, setSelectedExtension} = useContext(ExtensionsContext);

  return (
    <>
      {selectedExtension && (
        <Box
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              width: { xs: "100%", md: 350 },
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              background: "linear-gradient( 95deg, #547decff, #040733ff)",
              boxShadow: "0 40px 70px rgba(5, 4, 4, 0.4)",
              zIndex: 2000,
            }}
          >
            <Box sx={{ padding: 1, alignSelf: 'flex-start' }}>
              <IconButton onClick={() => setSelectedExtension(null)}>
                <BsDoorClosed />
              </IconButton>
            </Box>
            <Box component='img' src={selectedExtension.logo} sx={{ width: 170, height: 170 }} ></Box>
            <Typography sx={{marginTop: 7, marginX: 2, textAlign: 'center', color: 'white'}}>{selectedExtension.name}</Typography>
            <Typography sx={{marginTop: 3, marginX: 2, textAlign: 'center', color: 'white' }}>{selectedExtension.description}</Typography>
          </Box>
      )}
    </>
  )
}