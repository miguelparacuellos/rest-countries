// Shared internal imports
import { useGetCountries } from "hooks";
import CountryCard from "../CountryCard/CountryCard";

// Internal imports
import { CountriesWrapper } from "./styles";

const CountriesContainer = () => {
  // CONSTANTS
  const wantedFields = ["name", "capital", "region", "population", "flags"];

  // HOOKS
  const { countries, countriesStatus } = useGetCountries(wantedFields);

  // RENDERERS
  const renderVisor = () =>
    countries?.map((country) => {
      const { flags, name, ...props } = country;

      return (
        <CountryCard
          {...props}
          key={`${name.official}-card-key`}
          name={name.official}
          flagUrl={flags.png}
        />
      );
    });

  const renderContent = () => {
    const resultDict = {
      idle: () => null,
      error: () => null,
      loading: () => null,
      success: renderVisor,
    };

    return resultDict[countriesStatus]();
  };

  return (
    <CountriesWrapper
      flexFlow="row wrap"
      justifyContent="space-around"
      alignItems="center"
      gap=" 3rem 5%"
    >
      {renderContent()}
    </CountriesWrapper>
  );
};

export default CountriesContainer;
