import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './components/TreeView';
import { treeData as data } from './treeData';

ReactDOM.render(
    <TreeView data={data}/>,
    document.getElementById('container')
);