import React, {Component} from 'react';
import NODE_TYPE from './../treeType';

export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: this.props.node.collapsed };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.collapsed !== this.state.collapsed;
    }

    handleClick() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    getClassArrowRotate() {
        return this.state.collapsed ? "arrow-down" : "arrow-right";
    }

    getStyleDisplayValue() {
        return this.state.collapsed ? "block" : "none";
    }

    getNodeItems() {
        if (this.props.node.items)
            return this.props.node.items.map(item => <TreeNode node={item} key={item.id}/>);
    }

    render() {
        let arrowEl = this.props.node.items ?
            <span className={this.getClassArrowRotate()} onClick={() => this.handleClick()}>▸</span> : null;

        return (
            <div className="node">
                {arrowEl}
                <span className="node-name"> {this.props.node.name}</span>
                <div className="node-items" style={{marginLeft: "20px", display: this.getStyleDisplayValue()}}>{this.getNodeItems()}</div>
            </div>
        );
    }
}

TreeNode.propTypes = NODE_TYPE;