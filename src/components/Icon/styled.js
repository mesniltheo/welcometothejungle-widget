import styled, { css } from "styled-components";

import { color } from "./utils";

export const Wrapper = styled.span`
  display: inline-block;
  line-height: 1;
  svg {
    width: 100%;
    height: 100%;
  }

  path {
    transition: fill 300ms;
  }

  ${props =>
    props.size &&
    css`
      height: ${props.size}px;

      svg {
        width: ${props.size}px;
        height: ${props.size}px;
      }
    `};

  ${props =>
    props.color &&
    css`
      svg path {
        fill: ${color(props.color)}
    `};
`;
