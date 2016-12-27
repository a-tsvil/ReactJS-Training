import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SubComponent extends Component {
    render() {
        return (
            <div>
                <h3>Sub Component</h3>
                <span>Id is: {this.props.params.someId}</span>
                <Link to={'/'}>To Root</Link>
            </div>
        );
    }
}

