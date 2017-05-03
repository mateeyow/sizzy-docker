import React from 'react';
import {observer} from 'mobx-react';

const Link = ({
  view,
  className,
  params = {},
  queryParams = {},
  store = {},
  refresh = false,
  style = {},
  children,
  title = children,
  preventDefault = true,
  router = store.router,
  ...props
}) => {
  if (!router) {
    return console.error(
      'The router prop must be defined for a Link component to work!'
    );
  }
  return (
    <a
      style={style}
      className={className}
      onClick={e => {
        const middleClick = e.which === 2;
        const cmdOrCtrl = e.metaKey || e.ctrlKey;
        const openinNewTab = middleClick || cmdOrCtrl;
        const shouldNavigateManually = refresh || openinNewTab || cmdOrCtrl;

        if (!shouldNavigateManually) {
          if (preventDefault) {
            e.preventDefault();
          }
          router.goTo(view, params, store, queryParams);
        }
      }}
      href={view.replaceUrlParams(params, queryParams)}
      {...props}
    >
      {title}
    </a>
  );
};

export default observer(Link);
