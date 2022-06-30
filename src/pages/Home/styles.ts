import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;
