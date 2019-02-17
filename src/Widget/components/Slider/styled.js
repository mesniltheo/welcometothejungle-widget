import styled from "styled-components";

import { colors } from "./../../../config";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  background: ${colors.black};
  justify-content: space-between;
`;

export const Scroll = styled.div`
  transform: ${({ translate }) => `translate3d(-${translate}px, 0, 0)`};
  transition: transform 600ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const Slide = styled.div`
  width: ${({ width }) => `${width}px`};
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const Content = styled.div`
  width: 100vw;

  @media (min-width: 640px) {
    width: ${({ columns }) => `calc(100vw / ${columns})`};
  }
`;
