import { Card, CardHeader, CardActions, CardContent, Avatar, Typography, Button, Switch } from '@mui/material'
import { Box } from '@mui/material';
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';

export default function ExtensionLists (){
  const { toggleSwitch, extensionsData, filter, searchtext} = useContext(ExtensionsContext);

  const list = extensionsData.filter(item => {
  if (filter === "active") return item.isActive;
  if (filter === "inactive") return !item.isActive;
  if (!item.name.toLowerCase().includes(searchtext.toLowerCase())) return false;
  return true; 
  });

  return (
    <Box display="grid" gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))' gridTemplateRows='repeat(auto-fill, minmax(150px, auto))' gap={2} sx={{ px: { xs: 2, sm: 3, md: 5 }, pb: 5 }} >

      {list.map((extension) => (
        <Card key={extension.name} sx={{ bgcolor: "#1b1d2b", color: "white" }}>
          <CardHeader
            avatar={<Avatar src={extension.logo} alt="Logo" />}
            title={extension.name}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "white" }}>
              {extension.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Remove</Button>
            <Switch
              checked={extension.isActive}
              onClick={() => toggleSwitch(extension.name)}
            />
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}