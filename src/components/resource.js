import React, { Component } from 'react';

class Resource extends Component {
    render() {
        return (
            <div id="data" >
                <h1>Secret data to protect</h1>
                <ul>
                    <li>Info 1</li>
                    <li>info 2</li>
                    <li>info 3</li>
                    <li>info 4</li>
                </ul>
            </div>
        );
    }
}

export default Resource;