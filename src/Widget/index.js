import React, { PureComponent } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import content from "./../assets/wttj-content";
import * as S from "./styled";

class Widget extends PureComponent {
  render() {
    const { company } = content;
    const { url, logo, name } = company;

    return (
      <S.Wrapper>
        <Header logo={logo} name={name} />
        <h1>let's go !</h1>
        <Footer link={url} />
      </S.Wrapper>
    );
  }
}

export default Widget;
