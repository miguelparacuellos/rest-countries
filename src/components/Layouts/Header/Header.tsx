// Third party libraries
import { MdDarkMode } from "react-icons/md";

// Shared internal imports
import { LabeledButton } from "components/Buttons";

// Internal imports
import { HeaderTitle, HeaderWrapper } from "./styles";

type HeaderProps = {
  handleClickDarkMode: () => void;
};

const Header = ({ handleClickDarkMode }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <LabeledButton
        icon={<MdDarkMode size={24} />}
        text="Dark mode"
        handleClick={handleClickDarkMode}
      />
    </HeaderWrapper>
  );
};

export default Header;
