import PropTypes from "prop-types";
import React from "react";

import Button from "./../../../components/Button";
import Center from "./../../../components/Center";

import * as S from "./styled";

const Header = ({ handleNextClick, handlePrevClick, logo, name }) => {
  return (
    <S.Wrapper>
      <Center>
        <S.Logo src={logo} alt={`${name} logo`} />
        {name}
      </Center>
      <Center>
        <div>
          <Button iconName="arrowLeft" onClick={handlePrevClick} color="grey" />
        </div>
        <S.Next>
          <Button
            iconName="arrowRight"
            onClick={handleNextClick}
            color="grey"
          />
        </S.Next>
      </Center>
    </S.Wrapper>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;
