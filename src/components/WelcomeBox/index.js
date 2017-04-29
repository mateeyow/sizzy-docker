// @flow
import typeof store from "stores/store";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import themes from "styles/themes";

//styled-components
import { WelcomeBox, Globe, IntroText, ExampleLink, UrlBar, Content } from "./styles";

//styles
import { UrlInputStyles } from "./styles";

import { ThemeProvider } from "styled-components";

type Props = {
  store: any | store
};

@inject("store")
@observer
class WelcomeBoxComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const { store } = this.props;
    const { app } = store;
    const { loading } = app;

    return (
      <WelcomeBox>
        <Globe loading={loading} name="globe" />

        <Content loading={loading}>
          <IntroText> Welcome to Sizzy! Enter an url to start: </IntroText>

          <ThemeProvider theme={themes.dark}>
            <UrlBar styles={UrlInputStyles} />
          </ThemeProvider>

          <ExampleLink onClick={app.loadExampleUrl}>
            Click here to load an example!
          </ExampleLink>
        </Content>
      </WelcomeBox>
    );
  }
}

export default WelcomeBoxComponent;
