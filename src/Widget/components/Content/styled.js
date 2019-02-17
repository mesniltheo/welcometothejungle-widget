import styled from "styled-components";

import { colors } from "./../../../config";

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Cover = styled(Content)`
  background-image: ${({ caption }) => caption && `url(${caption})`};
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  transition: opacity 300ms ease;
`;

// Create wrapper with ratio 16/9
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  overflow: hidden;

  &:hover {
    ${Cover} {
      opacity: 0.8;
    }
  }
`;

export const Button = styled.div`
  transform: scale(1);
  transition: transform 300ms ease;
`;

/* PICTURE COMPONENT */
export const Picture = styled.div`
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    opacity: 1;

    ${Button} {
      transform: scale(1.5);
    }
  }
`;

/* VIDEO COMPONENT */
export const Video = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;

  &:hover {
    ${Button} {
      transform: scale(1.2);
    }
  }
`;

export const VideoItem = styled.div`
  display: flex;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  padding: 20px 10px 10px;
  font-size: 14px;
`;

export const VideoTitle = styled.div`
  margin-left: 10px;
`;

/* QUOTE COMPONENT */
export const QuoteIcon = styled.div`
  transition: margin-bottom 250ms ease;
`;

export const Quote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;

  &:hover {
    ${QuoteIcon} {
      margin-bottom: 5px;
    }
  }
`;
