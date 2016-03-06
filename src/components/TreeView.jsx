import React, {Component} from 'react';
import TREE_TYPE from './../TreeType';
import TreeNode from './TreeNode';

export default class TreeView extends Component {
    constructor(props) {
        super(props);
    }

    getTopNodes() {
        return this.props.data.map(node => <TreeNode node={node} key={node.id}/>);
    }

    render() {
        return (
            <div>
                <h2>Tree navigator</h2>
                <div className="tree-view">{this.getTopNodes()}</div>
            </div>
        );
    }
}

TreeView.propTypes = TREE_TYPE;