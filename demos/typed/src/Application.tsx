import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { connect, ProviderProps, Dispatch } from 'react-redux';

import { getDataCall, updateDataCall, addData } from './Actions';
import Data from './Actions/Data';
import IAppAction from './Actions/IAppAction';

interface AppProps {
    dispatch: Dispatch<IAppAction>;
    data: Data[];
}

interface AppState {
    data: Data[];
    isPending?: boolean;
    recievedAt?: Date;
}

class Application extends Component<AppProps, {}> {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getDataCall());
    }

    componentWillReceiveProps(nextProps: AppProps) {
        console.log(nextProps);
    }

    render() {
        var routes = (
            <div>
            <h1>Application Root Component</h1>
                <p><Link to={'/comp1'}>Comp 1</Link></p>
                <p><Link to={'/comp2'}>Comp 2</Link></p>
                <p><Link to={'/comp3'}>Comp 3</Link></p>
            </div>
        );
        let dataRows: JSX.Element[] = [];
        this.props.data.forEach((row: Data) => dataRows.push(<div key={ row.id }>{ row.id } | { row.data } </div>));
        return (
            <div>
                { dataRows }
                {this.props.children
                    ? this.props.children
                    : routes}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    const { data } = state;
    return {
        data
    }
};

export default connect(mapStateToProps)(Application);
