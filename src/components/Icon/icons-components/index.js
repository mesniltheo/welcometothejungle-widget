import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Close from "./Close";
import Logo from "./Logo";
import Picture from "./Picture";
import Play from "./Play";
import Quote from "./Quote";

class Icon extends PureComponent {
  static propTypes = {
    tag: PropTypes.string.isRequired
  };

  components = {
    ArrowLeft,
    ArrowRight,
    Close,
    Logo,
    Picture,
    Play,
    Quote
  };

  render() {
    const tagName =
      this.props.tag.charAt(0).toUpperCase() + this.props.tag.slice(1);
    const TagName = this.components[tagName];
    const finalProps = { ...this.props };
    delete finalProps.tag;
    return this.props.tag ? <TagName {...finalProps} /> : undefined;
  }
}
export default Icon;
