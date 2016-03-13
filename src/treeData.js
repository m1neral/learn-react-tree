// Exclude root node because of uselessness
export let treeData = [
    {
        id: 0,
        name: 'First top node',
        collapsed: true,
        items: [
            {
                id: 1,
                name: '1',
                collapsed: true
            },
            {
                id: 2,
                name: '2',
                collapsed: true
            },
            {
                id: 3,
                name: '3',
                collapsed: true
            }
        ]
    },
    {
        id: 4,
        name: 'Second top node',
        collapsed: true,
        items: [
            {
                id: 5,
                name: 'Fly',
                collapsed: true,
                items: [
                    {
                        id: 6,
                        name: 'Inner',
                        collapsed: true
                    }
                ]

            },
            {
                id: 7,
                name: 'High',
                collapsed: true
            }

        ]
    },
    {
        id: 8,
        name: 'Third node without children',
        collapsed: false,
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
                    collapsed: true
                },
                {
                    id: 1,
                    name: 'Two',
                    collapsed: true
                }
            ]
        });
    }

    return [
        {
            id: 'one',
            name: 'One',
            collapsed: true,
            items: nodes
        }
    ];
};