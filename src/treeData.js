// Exclude root node because of uselessness
export let treeData = [
    {
        id: 0,
        name: 'First top node',
        collapsed: false,
        items: [
            {
                id: 1,
                name: '1',
                collapsed: false
            },
            {
                id: 2,
                name: '2',
                collapsed: false
            },
            {
                id: 3,
                name: '3',
                collapsed: false
            }
        ]
    },
    {
        id: 4,
        name: 'Second top node',
        collapsed: false,
        items: [
            {
                id: 5,
                name: 'Fly',
                collapsed: false,
                items: [
                    {
                        id: 6,
                        name: 'Inner',
                        collapsed: false
                    }
                ]

            },
            {
                id: 7,
                name: 'High',
                collapsed: false
            }

        ]
    },
    {
        id: 8,
        name: 'Third node without children',
        collapsed: true,
        items: [
            {
                id: 9,
                name: 'I\'am opened node'
            }
        ]
    }
];


export const treeGenerator = (nodesAmount = 1000) => {
    let nodes = [];

    for (let i = 0; i < nodesAmount; i++) {
        nodes.push({
            id: i,
            name: ('' + i).repeat(3),
            collapsed: true,
            items: [
                {
                    id: 0,
                    name: 'One',
                    collapsed: false
                },
                {
                    id: 1,
                    name: 'Two',
                    collapsed: false
                }
            ]
        });
    }

    return [
        {
            id: 'one',
            name: 'One',
            collapsed: false,
            items: nodes
        }
    ];
};