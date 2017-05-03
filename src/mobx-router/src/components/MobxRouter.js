import React from 'react';
import {inject, observer} from 'mobx-react';

const MobxRouter = ({store: {router}}) => (
  <div>{router.currentView && router.currentView.component}</div>
);
export default inject('store')(observer(MobxRouter));
