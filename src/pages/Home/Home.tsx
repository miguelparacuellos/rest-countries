import { useState } from "react";
import { CountriesContainer, TopBar } from "./containers";
import { HomePageContext } from "./contexts/HomeContext";
import { HomeWrapper } from "./styles";

const Home = () => {
  // HOOKS
  const [countryToSearch, setSearchedCountry] = useState<string | undefined>();

  // RENDERERS
  const handleChangeCountry = (value?: string) => {
    setSearchedCountry(value);
  };

  return (
    <HomePageContext.Provider
      value={{ countryToSearch, onChangeCountry: handleChangeCountry }}
    >
      <HomeWrapper>
        <TopBar />
        <CountriesContainer />
      </HomeWrapper>
    </HomePageContext.Provider>
  );
};

export default Home;
