import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDataCall, updateDataCall, addData } from './Actions';

class Application extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getDataCall());
    }

    componentWillReceiveProps(nextProps) {
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
        let dataRows = [];
        this.props.data.forEach(row => dataRows.push(<div>{ row.id } | { row.data } </div>));
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

const mapStateToProps = state => {
    const { data } = state;
    return {
        data
    }
};

export default connect(mapStateToProps)(Application);
