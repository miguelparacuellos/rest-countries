import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  background-color: ${({ theme }) => theme.colors.elements};
`;

export const HeaderTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text};
`;
