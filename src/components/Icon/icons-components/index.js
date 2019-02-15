import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Logo from "./Logo";

class Icons extends PureComponent {
  static propTypes = {
    tag: PropTypes.string.isRequired
  };

  components = {
    Logo
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
export default Icons;
