import styled from "styled-components";

import { Flex } from "components/Flexbox";

export const Card = styled(Flex)`
  align-self: stretch;

  width: 20rem;
  height: auto;
  max-height: 50%;

  border-radius: 1rem;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.elements};
  border: 1px solid ${({ theme }) => theme.colors.background};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 50%;
  max-width: 100%;
  max-height: 50%;
`;

export const InfoWrapper = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Key = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Value = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
