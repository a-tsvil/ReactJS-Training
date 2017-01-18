import * as React from 'react';
import { Link } from 'react-router';

import IComp3State from './IComp3State';

export default class Component1 extends React.Component<{}, IComp3State> {
    constructor() {
        super()
        this.state = { someId: '' };
        this.handleSomeIdChange = this.handleSomeIdChange.bind(this);
    }

    handleSomeIdChange(evt:  React.FormEvent<HTMLInputElement>): void {
        this.setState({ someId: evt.currentTarget.value });
    }

    render() {
        return (
            <div>
            
                <h2>Component 3</h2>
                <input value={this.state.someId} onChange={this.handleSomeIdChange} />
                {
                    this.state.someId != ''
                        ? <Link to={`/subcomp/${this.state.someId}`}>Sub Component</Link>
                        : null
                }
                {this.props.children}
            </div>
        );
    }
}
