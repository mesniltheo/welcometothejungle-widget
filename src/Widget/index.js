import PropTypes from "prop-types";
import React, { Component } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./../components/ProgressBar";
import Slider from "./components/Slider";

import * as S from "./styled";

class Widget extends Component {
  static propTypes = {
    columns: PropTypes.number,
    company: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
    rows: PropTypes.number
  };

  static defaultProps = {
    columns: 3,
    rows: 2
  };

  state = {
    columnsResize: 0,
    step: 0,
    steps: 0,
    translateScroll: 0,
    widthContent: 0,
    widthSlide: 0
  };

  refSlider = React.createRef();

  setWidth = () => {
    const { rows, columns, content } = this.props;

    // get width of slider
    const widthSlider =
      this.refSlider.current && this.refSlider.current.offsetWidth;
    // check is a mobile screen size
    const isMobile = window.innerWidth <= 640;
    // get number of steps
    const steps = Math.ceil(content.length / rows);
    // get max step for scrolling
    const columnsResize = isMobile ? 1 : columns;
    // on mobile colums is always set to 1
    const widthContent = isMobile ? widthSlider : widthSlider / columns;
    const widthSlide = steps * widthContent;

    this.setState({ columnsResize, steps, widthSlide, widthContent });
  };

  setTranslateScroll = (widthContent, step) => {
    this.setState({ translateScroll: widthContent * step });
  };

  handleNext = () => {
    const { columnsResize, step, steps } = this.state;

    step < steps - columnsResize && this.setState({ step: step + 1 });
  };

  handlePrev = () => {
    const { step } = this.state;

    step > 0 && this.setState({ step: step - 1 });
  };

  componentDidMount() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    const { widthContent, step } = this.state;

    // update translate width scrolling
    if (widthContent !== prevState.widthContent || step !== prevState.step) {
      this.setTranslateScroll(widthContent, step);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWidth);
  }

  render() {
    const { columns, company, content } = this.props;
    const { id, logo, name } = company;

    const {
      columnsResize,
      step,
      steps,
      translateScroll,
      widthSlide
    } = this.state;

    return (
      <S.Wrapper>
        <Header
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          logo={logo}
          name={name}
          step={step}
          maxStep={steps - columnsResize}
        />
        <S.Slider>
          <Slider
            columns={columns}
            content={content}
            id={id}
            refSlider={this.refSlider}
            step={step}
            width={widthSlide}
            translateScroll={translateScroll}
          />
        </S.Slider>
        <ProgressBar progress={((step + columnsResize) / steps) * 100} />
        <Footer id={id} />
      </S.Wrapper>
    );
  }
}

export default Widget;
