import styled from "styled-components";

type FlexProps = {
  flexDirection?: string;
  flexWrap?: string;
  flexFlow?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection};` : ""}
  ${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap};` : "")}
  ${({ flexFlow }) => (flexFlow ? `flex-flow: ${flexFlow};` : "")}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ""}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}
  ${({ alignContent }) =>
    alignContent ? `align-content: ${alignContent};` : ""}
  ${({ gap }) => (gap ? `gap: ${gap};` : "")}
  ${({ rowGap }) => (rowGap ? `row-gap: ${rowGap};` : "")}
  ${({ columnGap }) => (columnGap ? `column-gap: ${columnGap};` : "")}
`;

export default Flex;
