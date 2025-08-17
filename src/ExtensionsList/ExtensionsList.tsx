import { Card, CardHeader, CardActions, CardContent, Avatar, Typography, Button, Switch } from '@mui/material'
import { Box } from '@mui/material';
import { useContext } from 'react';
import { ExtensionsContext } from '../ExtensionsContext';

export default function ExtensionLists (){
  const { toggleSwitch, extensionsData, filter } = useContext(ExtensionsContext);

  const list = extensionsData.filter(item => {
  if (filter === "active") return item.isActive;
  if (filter === "inactive") return !item.isActive;
  return true; 
  });

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={2} sx={{ pt: 2, pr: 10, pb: 5, pl: 10 }}>
      {list.map((extension) => (
        <Card key={extension.name} sx={{ bgcolor: "#1b1d2b", color: "white" }}>
          <CardHeader
            avatar={<Avatar src={extension.logo} alt="Logo" />}
            title={extension.name}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
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