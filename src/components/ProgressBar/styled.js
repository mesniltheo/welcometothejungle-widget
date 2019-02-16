import styled from "styled-components";

import { colors } from "./../../config";

export const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  background: ${colors.greyLight};
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`}
  height: 100%;
  background: ${colors.green}
  transition: width 300ms ease-in-out;
`;
