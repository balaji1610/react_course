import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import foodOrderDetails from "@/app/utilities/FoodOrderDetails";
import { MenuListType } from "@/app/Interface/FoodOrderType";
interface ApplicationContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuListType[];
  setMenuItems: Dispatch<SetStateAction<MenuListType[]>>;
  selectMenuList: null | MenuListType;
  setSelectMenuList: Dispatch<SetStateAction<MenuListType | null>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<MenuListType[]>(foodOrderDetails);
  const [selectMenuList, setSelectMenuList] = useState<MenuListType | null>(
    null
  );
  return (
    <ApplicationContext.Provider
      value={{
        open,
        setOpen,
        menuItems,
        setMenuItems,
        selectMenuList,
        setSelectMenuList,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext };

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationProvider"
    );
  }
  return context;
};
