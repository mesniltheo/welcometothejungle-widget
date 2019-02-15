import PropTypes from "prop-types";
import React from "react";

import Center from "./../../../components/Center";
import Button from "./../../../components/Button";
import Icon from "./../../../components/Icon";

import * as S from "./styled";

const Footer = ({ id }) => {
  return (
    <S.Wrapper>
      <Center
        as="a"
        href="https://www.welcometothejungle.co"
        target="_blank"
        rel="noopener noreferrer"
        title="Propulsé par Welcome to the jungle"
      >
        <Icon name="logo" size="30" />
      </Center>
      <Center>
        <Button
          href={`https://www.welcometothejungle.co/companies/${id}`}
          blank
          color="grey"
        >
          Voir le profil
        </Button>
      </Center>
    </S.Wrapper>
  );
};

Footer.propTypes = {
  id: PropTypes.string.isRequired
};

export default Footer;
