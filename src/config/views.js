import React from "react";
import { Route } from "mobx-router";

//components
import Home from "views/Home";

const views = {
  home: new Route({
    id: "home",
    path: "/",
    component: <Home />,
    onEnter: (route, params, store, queryParams) => {
      const { url } = queryParams;
      let hasInitialUrl = url && url.trim() !== "";
      store.app.setUrl(hasInitialUrl ? url : "http://kitze.io");
    }
  })
};

export default views;
