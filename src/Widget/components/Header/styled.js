import styled from "styled-components";

import { colors } from "./../../../config";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background: ${colors.green};
`;

export const Company = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 40px;
  margin-right: 10px;
`;
