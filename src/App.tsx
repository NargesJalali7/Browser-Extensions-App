import data from './data.json'
import type { ExtensionsLogosTypes } from './ExtensionsContext'
import ExtensionLists from './ExtensionsList/ExtensionsList';
import SearchBar from './SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { ExtensionsContext } from './ExtensionsContext';
import { Box, CssBaseline } from '@mui/material';
import SideBar from './SideBar/sideBar';


function App() {
  const [extensionsData, setExtensionsData] = useState<ExtensionsLogosTypes[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [searchtext, setSearchtext] = useState("");
  const [selectedExtension, setSelectedExtension] = useState<ExtensionsLogosTypes | null>(null)

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

  const searchExtensions = (searchtext: string) => {
    extensionsData.map((item) => 
      item.name === searchtext.trim() ? setFilter('active') : item
    );
  }


  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', width: '100vw',  background: 'linear-gradient(rgba(104,52,235,1), #0b031bff)'}}>
        <ExtensionsContext.Provider value={{toggleSwitch, extensionsData, setExtensionsData, filter, setFilter, searchtext, setSearchtext, searchExtensions, selectedExtension, setSelectedExtension}}>
          <SearchBar />

          <ExtensionLists />

          <SideBar />
          
        </ExtensionsContext.Provider>
      </Box>
    </>
  )
}
export default App