import * as React from 'react';
import { Link } from 'react-router';

export default class SubComponent extends React.Component<{ params: { someId: string } }, undefined> {
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

