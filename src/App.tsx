import data from './data.json'
import type { ExtensionsLogosTypes } from './ExtensionsContext'
import ExtensionLists from './ExtensionsList/ExtensionsList';
import SearchBar from './SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { ExtensionsContext } from './ExtensionsContext';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#481dacff', 
    },
  },
});


function App() {
  const [extensionsData, setExtensionsData] = useState<ExtensionsLogosTypes[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  useEffect(() => {
    const savedExtensions = localStorage.getItem('AddedExtensions');
    if (savedExtensions) {
      try {
        const parsed = JSON.parse(savedExtensions);
        if (Array.isArray(parsed)) {
          setExtensionsData(parsed);
          return;
        }
      } catch (e) {
        console.error("Failed to parse saved extensions.");
      }
    }
    setExtensionsData(data); 
  }, []);

  const toggleSwitch = (name: string) => {
    const updated = extensionsData.map((item) =>
      item.name === name ? { ...item, isActive: !item.isActive } : item
    );
    setExtensionsData(updated);
    localStorage.setItem("AddedExtensions", JSON.stringify(updated));
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <ExtensionsContext.Provider value={{toggleSwitch, extensionsData, setExtensionsData, filter, setFilter}}>
          <SearchBar />

          <ExtensionLists />
        </ExtensionsContext.Provider>
      </ThemeProvider>
     
    </>
  )
}
export default App