import React, {Component} from 'react';
import NODE_TYPE from './../TreeType';

export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: this.props.node.collapsed }
    }

    handleClick() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    getClassArrowRotate() {
        return this.state.collapsed ? "arrow-down" : "arrow-right";
    }

    // TODO: Recursive here
    getNodeItems() {
        if (this.state.collapsed)
            return this.props.node.items.map(item => <div style={{marginLeft: "20px"}} key={item.id}>{item.name}</div>);
    }

    render() {
        return (
            <div className="node" onClick={() => this.handleClick()}>
                <span className={this.getClassArrowRotate()}>▸</span>
                <span className="node-name"> {this.props.node.name}</span>
                <div className="node-items">{this.getNodeItems()}</div>
            </div>
        );
    }
}

TreeNode.propTypes = NODE_TYPE;