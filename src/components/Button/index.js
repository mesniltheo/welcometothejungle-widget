import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Icon from "./../../components/Icon";
import { COLORS } from "./constants";

import * as S from "./styled";

export default class Button extends PureComponent {
  static propTypes = {
    blank: PropTypes.bool,
    children: PropTypes.node,
    color: PropTypes.oneOf(COLORS),
    href: PropTypes.string,
    iconName: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    color: "green"
  };

  handleClick = () => {
    const { onClick } = this.props;

    onClick && onClick();
  };

  render() {
    const {
      blank,
      children,
      color,
      disabled,
      iconName,
      href,
      size
    } = this.props;

    // get props for link
    const linkProps = {
      as: "a",
      href,
      target: blank ? "_blank" : undefined,
      rel: blank ? "noopenner noreferrer" : undefined
    };

    // get props for button
    const buttonProps = {
      as: "button",
      onClick: this.handleClick,
      disabled
    };

    // if href exist it's a link else it's a button
    const getProps = href ? linkProps : buttonProps;

    // check if had only an icon
    const onlyIcon = iconName && !children;

    return (
      <S.Wrapper {...getProps} color={color} onlyIcon={onlyIcon} size={size}>
        {iconName && <Icon name={iconName} size="20" color="white" />}
        {iconName ? <S.Text>{children}</S.Text> : children}
      </S.Wrapper>
    );
  }
}
