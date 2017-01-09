import React from 'react';
import { Route } from 'react-router';

import Application from './Components/Application';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import SubComponent from './Components/SubComponent/SubComponent';
import ComponentNotFound from './Components/ComponentNotFound';

const routes = (
    <Route path="/" component={Application}>
        <Route path="comp1" component={Component1} />
        <Route path="comp2" component={Component2} />
        <Route path="comp3" component={Component3}>
            <Route path="/subcomp/:someId" component={SubComponent} />
        </Route>
        <Route path="*" component={ComponentNotFound} />
    </Route>
);

export default routes;
