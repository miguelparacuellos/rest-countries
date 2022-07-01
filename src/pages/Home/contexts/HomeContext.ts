import { createContext, useContext } from "react";

type Context = {
  countryToSearch?: string;
  onChangeCountry: (value?: string) => void;
};

export const HomePageContext = createContext<Context>({
  countryToSearch: undefined,
  onChangeCountry: () => {},
});

export const useHomePageContext = () => useContext(HomePageContext);
