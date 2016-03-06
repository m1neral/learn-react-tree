import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './TreeView';
import { treeData as data } from './TreeData';

ReactDOM.render(
    <TreeView data = {data}/>,
    document.getElementById('container')
);