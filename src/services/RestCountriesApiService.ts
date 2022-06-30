class RestCountriesApiService {
  private static baseUrl: string = "https://restcountries.com/v3.1";

  static async getAll(queryParams: string) {
    const url = `${RestCountriesApiService.baseUrl}/all${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
    });

    return response.json();
  }
}

export default RestCountriesApiService;
