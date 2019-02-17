import PropTypes from "prop-types";
import React from "react";

import Button from "./../../../components/Button";
import Icon from "./../../../components/Icon";

import * as S from "./styled";

const Content = ({ item }) => (
  <S.Wrapper>
    <S.Cover caption={item.caption} />
    <S.Content>
      {item.type === "picture" && (
        <S.Picture>
          <S.Button>
            <Button iconName="picture" color="green" />
          </S.Button>
        </S.Picture>
      )}
      {item.type === "video" && (
        <S.Video>
          <S.VideoItem>
            <S.Button>
              <Button iconName="play" color="green" />
            </S.Button>
            <S.VideoTitle>
              <div>{item.title}</div>
              <div>{item.subtitle}</div>
            </S.VideoTitle>
          </S.VideoItem>
        </S.Video>
      )}
      {item.type === "quote" && (
        <S.Quote>
          <S.QuoteIcon>
            <Icon size="40" name="quote" color="green" />
          </S.QuoteIcon>
          {item.text}
        </S.Quote>
      )}
    </S.Content>
  </S.Wrapper>
);

Content.propTypes = {
  item: PropTypes.object.isRequired
};

export default Content;
