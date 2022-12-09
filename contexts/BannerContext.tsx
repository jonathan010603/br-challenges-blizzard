import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IBanner {
  selectedGame: number;
  setSelectedGame: Dispatch<SetStateAction<number>>;
}

export const BannerContext = createContext<IBanner | null>(null);

export const BannerContextWrapper = ({ children }: { children: ReactNode }) => {
  const [selectedGame, setSelectedGame] = useState<number>(0);

  return (
    <BannerContext.Provider value={{ selectedGame, setSelectedGame }}>
      {children}
    </BannerContext.Provider>
  );
};
