import styled from "styled-components";

interface StickyMenuContainerProps {
//   top: number;
//   left: number;
}

export const StickyMenuContainer = styled.div<StickyMenuContainerProps>`
  position: absolute;
  height: 200px;
  width: 48px;
  background-color: red;
`;
