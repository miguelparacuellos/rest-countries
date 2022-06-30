import { Card, Flag, InfoWrapper, Key, Title, Value } from "./styles";

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
};

const CountryCard = ({ name, population, region, capital, flagUrl }: Props) => {
  // RENDERERS
  const renderKeyValue = (key: string, value: string | number) => (
    <p>
      <Key>{key}: </Key>
      <Value>{value}</Value>
    </p>
  );

  return (
    <Card flexFlow="column nowrap" justifyContent="flex-start">
      <Flag alt="Country's flag" src={flagUrl} />
      <InfoWrapper>
        <Title>{name}</Title>
        {renderKeyValue("Population", population)}
        {renderKeyValue("Region", region)}
        {renderKeyValue("Capital", capital)}
      </InfoWrapper>
    </Card>
  );
};

export default CountryCard;
