import styled from "styled-components";

import { colors } from "../../config";
import { getBackgroundHover } from "./utils";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ onlyIcon }) => onlyIcon && "30px"};
  height: 30px;
  padding: ${({ onlyIcon }) => (onlyIcon ? "0" : "0 20px")};
  border: 0;
  border-radius: ${({ onlyIcon }) => (onlyIcon ? "30px" : "4px")};
  background: ${({ color }) => colors[color]};
  color: ${colors.white};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: background 300ms ease-in-out, opacity 300ms;

  &:hover:enabled {
    background: ${getBackgroundHover};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  margin-left: "10px";
`;
