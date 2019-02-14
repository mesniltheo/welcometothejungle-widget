import React, { Component } from "react";
import styled from "styled-components";

const TestingStyledComponent = styled.h1`
  color: #00c29a;
`;

class App extends Component {
  render() {
    return (
      <div>
        <TestingStyledComponent>let's go !</TestingStyledComponent>
      </div>
    );
  }
}

export default App;
