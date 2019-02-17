import PropTypes from "prop-types";
import React from "react";

import Button from "./../../../components/Button";
import Center from "./../../../components/Center";

import * as S from "./styled";

const Header = ({ handleNext, handlePrev, logo, name, step, maxStep }) => {
  return (
    <S.Wrapper>
      <Center>
        <S.Logo src={logo} alt={`${name} logo`} />
        {name}
      </Center>
      <Center>
        <div>
          <Button
            iconName="arrowLeft"
            onClick={handlePrev}
            color="grey"
            disabled={step === 0}
          />
        </div>
        <S.Next>
          <Button
            iconName="arrowRight"
            onClick={handleNext}
            color="grey"
            disabled={step === maxStep}
          />
        </S.Next>
      </Center>
    </S.Wrapper>
  );
};

Header.propTypes = {
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  step: PropTypes.number,
  maxStep: PropTypes.number
};

export default Header;
