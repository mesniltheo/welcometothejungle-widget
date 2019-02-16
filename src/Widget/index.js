import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./../components/ProgressBar";

import * as S from "./styled";

class Widget extends PureComponent {
  static propTypes = {
    company: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired
  };

  render() {
    const { company } = this.props;
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
