type Naming = {
  common: string;
  official: string;
  nativeName: {
    eng: {
      official: string;
      common: string;
    };
  };
};

type RestCountry = {
  name: Naming;
  region: string;
  capital: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

export default RestCountry;
