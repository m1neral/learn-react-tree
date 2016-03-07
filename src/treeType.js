import React from 'react';

const lazyFunction = (f) => () => f.apply(this, arguments);
const lazyTreeType = lazyFunction(() => TREE_TYPE);

export const NODE_TYPE = {
    node: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        collapsed: React.PropTypes.bool.isRequired,
        items: React.PropTypes.arrayOf(lazyTreeType)
    })
};

export const TREE_TYPE = {
    data: React.PropTypes.arrayOf(NODE_TYPE.node)
};


