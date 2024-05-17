import axios, { AxiosError } from "axios";
import { Country } from "../types/country";
import { UseQueryOptions, useQuery } from "react-query";

const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(
    "https://api.sampleapis.com/countries/countries"
  );
  return response.data;
};

export const useCountries = (
  config?: UseQueryOptions<Country[], AxiosError>
) => {
  return useQuery<Country[], AxiosError>({
    ...config,
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};
