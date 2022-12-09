import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

export interface IDropdown {
  dropdown: { open: boolean, page: number },
  Menu__DropdownRef: RefObject<HTMLDivElement>,
  setDropdown: Dispatch<SetStateAction<{ open: boolean, page: number }>>
}

export const DropdownContext = createContext<IDropdown | null>(null);

export const DropdownContextWrapper = ({ children }: { children: ReactNode }) => {
  const [dropdown, setDropdown] = useState({ open: false, page: 1 });
  const Menu__DropdownRef = useRef<HTMLDivElement>(null);

  return (
    <DropdownContext.Provider value={{ dropdown, setDropdown, Menu__DropdownRef }}>
      {children}
    </DropdownContext.Provider>
  );
};





interface IMobileDropdown {
  mobileDropdownOpen: boolean;
  setMobileDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileDropdownContext = createContext<IMobileDropdown | null>(null);

export const MobileDropdownContextContextWrapper = ({ children }: { children: ReactNode }) => {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <MobileDropdownContext.Provider value={{ mobileDropdownOpen, setMobileDropdownOpen }}>
      {children}
    </MobileDropdownContext.Provider>
  );
};
