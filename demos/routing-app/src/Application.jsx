import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Component1 extends Component {
    render() {
        var routes = (
            <div>
            <h1>Application Root Component</h1>
                <p><Link to={'/comp1'}>Comp 1</Link></p>
                <p><Link to={'/comp2'}>Comp 2</Link></p>
                <p><Link to={'/comp3'}>Comp 3</Link></p>
            </div>
        );

        return (
            <div>
                
                {this.props.children 
                    ? this.props.children
                    : routes} 
            </div>
        );
    }
}

