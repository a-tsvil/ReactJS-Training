import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Component3 extends Component {
    constructor() {
        super()
        this.state = { someId: '' };
        this.handleSomeIdChange = this.handleSomeIdChange.bind(this);
    }

    handleSomeIdChange(evt) {
        this.setState({ someId: evt.target.value });
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

