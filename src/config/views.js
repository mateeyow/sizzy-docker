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

      let hasUrlParam = url && url.trim() !== "";
      let initialUrl = `${window.location.protocol}//kitze.io`;
      let newUrl = hasUrlParam ? url : initialUrl;

      store.app.setUrl(newUrl);

      //if initial url is provided from query param, still check if it's http/https and inverse if needed
      store.app.setUrltoLoad(newUrl, hasUrlParam, false);
    }
  })
};

export default views;
