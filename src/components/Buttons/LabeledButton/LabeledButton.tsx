import { Button } from "./styles";

type Props = {
  icon: JSX.Element;
  text: string;
  handleClick: () => void;
};

const LabeledButton = ({ icon, text, handleClick }: Props) => {
  return (
    <Button onClick={handleClick}>
      {icon}
      {text}
    </Button>
  );
};

export default LabeledButton;
