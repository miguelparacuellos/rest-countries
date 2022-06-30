import { useQuery } from "react-query";
import { RestCountriesApiService } from "services";
import { RestCountry } from "ts";

const useGetCountries = (wantedFields?: string[]) => {
  const queryParams = wantedFields?.length
    ? `?fields=${wantedFields.join(",")}`
    : "";

  const fetchFn = () => RestCountriesApiService.getAll(queryParams);

  const { data, status } = useQuery<RestCountry[]>(
    ["get-all-countries", queryParams],
    fetchFn
  );

  return { countries: data, countriesStatus: status };
};

export default useGetCountries;
