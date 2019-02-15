import PropTypes from "prop-types";
import React from "react";

import * as S from "./styled";

const Header = ({ logo, name }) => {
  return (
    <S.Wrapper>
      <S.Company>
        <S.Logo src={logo} alt={`${name} logo`} />
        {name}
      </S.Company>
    </S.Wrapper>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;
