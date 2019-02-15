import styled from "styled-components";

import { colors } from "./../../../config";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background: ${colors.black};
`;

export const PoweredBy = styled.a`
  display: flex;
  align-items: center;
`;
