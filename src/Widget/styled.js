import styled from "styled-components";
import { colors } from "./../config";

export const Wrapper = styled.div`
  border-radius: 6px;
  font-family: "Roboto Condensed", sans-serif;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Slider = styled.div`
  flex: 1;
`;
