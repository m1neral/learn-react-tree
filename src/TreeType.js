import React from 'react';

const lazyFunction = (f) => () => f.apply(this, arguments);
const lazyTreeType = lazyFunction(() => TREE_TYPE);

export const TREE_TYPE = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            collapsed: React.PropTypes.bool.isRequired,
            items: React.PropTypes.arrayOf(lazyTreeType)
        })
    )
};

