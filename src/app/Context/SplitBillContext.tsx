import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import SplitBillInfo from "@/app/utilities/SplitBillInfo";
import { SplitBillType } from "@/app/Interface/SplitBillType";
interface SplitBillContextType {
  initalFriends: SplitBillType;
  setInitalFriends: Dispatch<SetStateAction<SplitBillType>>;
  isAddFriendOpen: boolean;
  setIsAddFriendOpen: Dispatch<SetStateAction<boolean>>;
  friendLists: SplitBillType[];
  setFriendLists: Dispatch<SetStateAction<SplitBillType[]>>;
}

const SplitBillContext = createContext<SplitBillContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const SplitBillProvider: React.FC<ContextProps> = ({ children }) => {
  const [initalFriends, setInitalFriends] =
    useState<SplitBillType>(SplitBillInfo);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState<boolean>(false);
  const [friendLists, setFriendLists] = useState<SplitBillType[]>([]);
  return (
    <SplitBillContext.Provider
      value={{
        initalFriends,
        setInitalFriends,
        isAddFriendOpen,
        setIsAddFriendOpen,
        friendLists,
        setFriendLists,
      }}
    >
      {children}
    </SplitBillContext.Provider>
  );
};

export { SplitBillProvider, SplitBillContext };

export const useSplitBillContext = (): SplitBillContextType => {
  const context = useContext(SplitBillContext);
  if (!context) {
    throw new Error(
      "useSplitBillContext must be used within an SplitBillProvider"
    );
  }
  return context;
};
