import PropTypes from "prop-types";
import React from "react";

import Icon from "./../../../components/Icon";

import * as S from "./styled";

const Footer = ({ link }) => {
  return (
    <S.Wrapper>
      <S.PoweredBy
        href="https://www.welcometothejungle.co"
        target="_blank"
        rel="noopener noreferrer"
        title="Propulsé par Welcome to the jungle"
      >
        <Icon name="logo" size="30" />
      </S.PoweredBy>
    </S.Wrapper>
  );
};

Footer.propTypes = {
  link: PropTypes.string.isRequired
};

export default Footer;
