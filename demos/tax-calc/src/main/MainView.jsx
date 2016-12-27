import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { taxRate } from './data/tax-rates';

import Table from './Table';
import Control from './Control';

class MainView extends Component {
    render() {
        return(
            <div>
                <Table />
                <Control />
            </div>
        );
    }
}

ReactDOM.render(
  <MainView />,
  document.getElementById('root')
);
