import PropTypes from "prop-types";
import React, { Component } from "react";

import Content from "../Content";

import * as S from "./styled";

class Slider extends Component {
  static propTypes = {
    columns: PropTypes.number,
    content: PropTypes.array,
    id: PropTypes.string,
    refSlider: PropTypes.object,
    translateScroll: PropTypes.number,
    width: PropTypes.number
  };

  render() {
    const {
      content,
      contentWidth,
      id,
      refSlider,
      translateScroll,
      width
    } = this.props;

    return (
      <S.Wrapper ref={refSlider}>
        <S.Scroll translate={translateScroll}>
          <S.Slide width={width}>
            {content.map((item, key) => (
              <S.Content contentWidth={contentWidth} key={`content_${key}`}>
                <a
                  href={`https://www.welcometothejungle.co/companies/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Content item={item} />
                </a>
              </S.Content>
            ))}
          </S.Slide>
        </S.Scroll>
      </S.Wrapper>
    );
  }
}

export default Slider;
