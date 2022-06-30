// Shared internal imports
import { TextInput } from "components/Inputs";

// Internal imports
import { TopBarWrapper } from "./styles";

const TopBar = () => (
  <TopBarWrapper
    flexFlow="row wrap"
    justifyContent="space-between"
    alignItems="center"
  >
    <TextInput />
  </TopBarWrapper>
);

export default TopBar;
