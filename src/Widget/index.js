import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./../components/ProgressBar";

import * as S from "./styled";

class Widget extends PureComponent {
  static propTypes = {
    columns: PropTypes.number,
    company: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
    rows: PropTypes.number
  };

  static defaultProps = {
    columns: 3,
    rows: 2
  };

  render() {
    const { company } = this.props;
    const { id, logo, name } = company;

    return (
      <S.Wrapper>
        <Header logo={logo} name={name} />
        <ProgressBar progress={50} />
        <Footer id={id} />
      </S.Wrapper>
    );
  }
}

export default Widget;
