// @flow
import typeof store from "stores/store";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

//styled-components
import { Home, Devices, Content } from "./styles";

//components
import Device from "components/Device";
import Toolbar from "components/Toolbar";
import WelcomeBox from "components/WelcomeBox";

//external
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

type Props = {
  store: any | store,
  children?: React.Element<*>
};

@inject("store")
@observer
class HomeComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const { store: { app }, children } = this.props;

    const {
      theme,
      urlToLoad,
      url,
      isVisible,
      settings,
      devices,
      isValidUrl,
      loading
    } = app;

    const { zoom, orientation } = settings;

    return (
      <Home>

        <Toolbar />

        <Content>

          <ReactCSSTransitionGroup
            transitionName="fadeout"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {(!isValidUrl || loading) && <WelcomeBox />}
          </ReactCSSTransitionGroup>

          {isValidUrl &&
            <Devices>
              {devices.map((device, key) => (
                <Device
                  key={key}
                  orientation={orientation}
                  visible={isVisible(device)}
                  zoom={zoom}
                  theme={theme}
                  url={url}
                  urlToLoad={urlToLoad}
                  device={device}
                >
                  {children}
                </Device>
              ))}
            </Devices>}
        </Content>
      </Home>
    );
  }
}

export default HomeComponent;
