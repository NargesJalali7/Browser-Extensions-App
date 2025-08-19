import { createContext } from "react";

export interface ExtensionsLogosTypes {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
} 


type ExtensionsContextType = {
  toggleSwitch: (name: string) => void;
  extensionsData: ExtensionsLogosTypes[];
  setExtensionsData: React.Dispatch<React.SetStateAction<ExtensionsLogosTypes[]>>;
  filter: "all" | "active" | "inactive";
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "inactive">>;
  searchtext: string;
  setSearchtext: React.Dispatch<React.SetStateAction<string>>
  searchExtensions: (searchtext: string) => void;
  selectedExtension: ExtensionsLogosTypes | null;
  setSelectedExtension: React.Dispatch<React.SetStateAction<ExtensionsLogosTypes | null>>;
}

export const ExtensionsContext = createContext<ExtensionsContextType>({
  toggleSwitch: () => {},
  extensionsData: [],
  setExtensionsData: () => {},
  filter: 'all',
  setFilter: () => {},
  searchtext: '',
  setSearchtext: () => {},
  searchExtensions: () => {},
  selectedExtension: null,
  setSelectedExtension: () => {},
})