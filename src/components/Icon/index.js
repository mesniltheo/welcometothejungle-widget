// to generate icons components
// npx @svgr/cli --icon -d src/components/Icon/icons-components src/components/Icon/icons-files/

import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Icons from "./icons-components/";

import { NAMES } from "./constants";

import * as S from "./styled";

class Icon extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    name: PropTypes.oneOf(NAMES).isRequired,
    size: PropTypes.string
  };

  getIcon(name, title) {
    const iconProps = {
      // accessibility
      title: name,
      role: "img",
      "aria-labelledby": "title"
    };

    const icon = NAMES.find(index => name === index);
    return <Icons tag={icon} {...iconProps} />;
  }

  render() {
    const { color, name, size, title } = this.props;
    return (
      <S.Wrapper color={color} size={size}>
        {this.getIcon(name, title)}
      </S.Wrapper>
    );
  }
}

export default Icon;
