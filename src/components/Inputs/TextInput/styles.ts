import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

import { Flex } from "components/Flexbox";

export const TextInputWrapper = styled(Flex)`
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 1rem;
  background-color: ${({ theme }) => theme.colors.elements};
  border-radius: 2rem;
`;

export const LensIcon = styled(AiOutlineSearch)`
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: inherit;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
