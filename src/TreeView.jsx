import React, {Component} from 'react';
import TREE_TYPE from './TreeType';

export default class TreeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.data[0].name}</div>;
    }
}

TreeView.propTypes = TREE_TYPE;