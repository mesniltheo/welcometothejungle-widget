import React, { PureComponent } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./../components/ProgressBar";

import content from "./../assets/wttj-content";
import * as S from "./styled";

class Widget extends PureComponent {
  render() {
    const { company } = content;
    const { id, logo, name } = company;

    return (
      <S.Wrapper>
        <Header logo={logo} name={name} />
        <h1>let's go !</h1>
        <ProgressBar progress={50} />
        <Footer id={id} />
      </S.Wrapper>
    );
  }
}

export default Widget;
