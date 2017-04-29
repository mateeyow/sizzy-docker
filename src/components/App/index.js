import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";

//external
import Body from "react-body-classname";

@inject("store")
@observer
class AppComponent extends Component {
  //return the currentView (src/views/Home) for now until there are more pages, or Sizzy is used as a plugin for react-storybook
  render() {
    const { store: { router, app } } = this.props;
    const { loading } = app;

    return (
      <ThemeProvider theme={app.theme}>
        <div>
          <Body className={loading ? "hide-scroll" : ""} />
          {router.currentView && router.currentView.component}
        </div>
      </ThemeProvider>
    );
  }
}

export default AppComponent;
