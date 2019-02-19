import PropTypes from "prop-types";
import React, { Component } from "react";

import { ARROW_LEFT, ARROW_RIGHT } from "./../constants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./../components/ProgressBar";
import Slider from "./components/Slider";

import * as S from "./styled";

class Widget extends Component {
  static propTypes = {
    autoplay: PropTypes.bool,
    columns: PropTypes.number,
    company: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
    rows: PropTypes.number
  };

  static defaultProps = {
    autoplay: false,
    columns: 3,
    rows: 2
  };

  state = {
    columnsResize: 0,
    step: 0,
    steps: 0,
    touchScrollLeft: null,
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

  keyEvents = event => {
    if (event.keyCode === ARROW_RIGHT) {
      this.handleNext();
    }
    if (event.keyCode === ARROW_LEFT) {
      this.handlePrev();
    }
  };

  handleTouchStart = event => {
    this.setState({ touchScrollLeft: event.touches[0].clientX });
  };

  handleTouchMove = event => {
    const { touchScrollLeft } = this.state;
    if (!touchScrollLeft) {
      return;
    }

    const touchScrollRight = event.touches[0].clientX;
    const touchScrollDiff = touchScrollLeft - touchScrollRight;

    if (touchScrollDiff > 5) {
      this.handleNext();
      this.stopAutoplay();
    } else if (touchScrollDiff < -5) {
      this.handlePrev();
      this.stopAutoplay();
    }

    /* reset values */
    this.setState({ touchScrollLeft: null });
  };

  startAutoplay() {
    const { autoplay } = this.props;

    if (autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.slideNext();
      }, 3000);
    }
  }

  stopAutoplay() {
    this.autoplayInterval && clearInterval(this.autoplayInterval);
  }

  slideNext = () => {
    const { columnsResize, step, steps } = this.state;

    step < steps - columnsResize && this.setState({ step: step + 1 });
  };

  slidePrev = () => {
    const { step } = this.state;

    step > 0 && this.setState({ step: step - 1 });
  };

  handlePrev = () => {
    this.slidePrev();
    this.stopAutoplay();
  };

  handleNext = () => {
    this.slideNext();
    this.stopAutoplay();
  };

  componentDidMount() {
    this.setWidth();
    this.startAutoplay();
    window.addEventListener("resize", this.setWidth);
    window.addEventListener("keydown", this.keyEvents);
  }

  componentDidUpdate(prevProps, prevState) {
    const { widthContent, step } = this.state;

    // update translate width scrolling
    if (widthContent !== prevState.widthContent || step !== prevState.step) {
      this.setTranslateScroll(widthContent, step);
    }
  }

  componentWillUnmount() {
    this.stopAutoplay();
    window.removeEventListener("resize", this.setWidth);
    window.removeEventListener("keydown", this.keyEvents);
  }

  render() {
    const { company, content } = this.props;
    const { id, logo, name } = company;

    const {
      columnsResize,
      step,
      steps,
      translateScroll,
      widthContent,
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
        <S.Slider
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
          <Slider
            content={content}
            contentWidth={widthContent}
            id={id}
            refSlider={this.refSlider}
            step={step}
            translateScroll={translateScroll}
            width={widthSlide}
          />
        </S.Slider>
        <ProgressBar progress={((step + columnsResize) / steps) * 100} />
        <Footer id={id} />
      </S.Wrapper>
    );
  }
}

export default Widget;
