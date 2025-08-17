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
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "inactive">>
}

export const ExtensionsContext = createContext<ExtensionsContextType>({
  toggleSwitch: () => {},
  extensionsData: [],
  setExtensionsData: () => {},
  filter: 'all',
  setFilter: () => {},
})