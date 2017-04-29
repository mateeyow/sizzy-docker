import React from 'react';
import { Route } from 'mobx-router';
import { isWebUri } from 'valid-url';

//components
import Home from 'views/Home';

const initialUrl = `${window.location.protocol}//kitze.io`;

const views = {
  home: new Route({
    id: 'home',
    path: '/',
    component: <Home />,
    onEnter: (route, params, store, queryParams) => {
      const { url } = queryParams;

      let hasUrlParam = url && url.trim() !== '';

      //if url param exists, but it's invalid, remove it from the query params
      if (hasUrlParam && !isWebUri(url)) {
        const { origin } = window.location;
        return (window.location.href = origin);
      }

      //set correct url in the url input box
      let newUrl = hasUrlParam ? url : initialUrl;
      store.app.setUrl(newUrl);

      //if initial url is provided from query param, still check if it's http/https and inverse if needed
      store.app.setUrltoLoad(newUrl, hasUrlParam, false);
    },
  }),
};

export default views;
