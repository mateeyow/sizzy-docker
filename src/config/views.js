import React from 'react';
import {Route} from 'mobx-router';
import {isWebUri} from 'valid-url';

//views
import Home from 'views/Home';
import FaqView from 'views/FaqView';

const views = {
  home: new Route({
    id: 'home',
    path: '/',
    component: <Home />,
    onEnter: (route, params, store, queryParams) => {
      const {protocol} = window.location;
      let {url} = queryParams;

      let hasUrlParam = url && url.trim() !== '';

      //if url param exists, but it's invalid, try to append the current protocol
      if (hasUrlParam && !isWebUri(url)) {
        url = `${protocol}//${url}`;
      }

      //set correct url in the url input box
      store.app.setUrl(url);

      //if initial url is provided from query param, still check if it's http/https and inverse if needed
      store.app.setUrltoLoad(url, hasUrlParam, false);
    }
  }),
  faq: new Route({
    id: 'faq',
    path: '/faq/:questionId?',
    component: <FaqView />
  })
};

export default views;
