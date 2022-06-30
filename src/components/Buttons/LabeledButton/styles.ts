import styled from "styled-components";
import { appColors } from "themes";

export const Button = styled.button`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  column-gap: 0.3rem;

  padding: 0.5rem 1rem;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 2rem;
  }

  &:active {
    background-color: ${appColors.darkGray};
  }
`;
