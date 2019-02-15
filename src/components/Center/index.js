import PropTypes from "prop-types";
import React from "react";

import * as S from "./styled";

const Center = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;

Center.propTypes = {
  children: PropTypes.node.isRequired
};

export default Center;
