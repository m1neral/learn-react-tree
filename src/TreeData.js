// Exclude root node because of uselessness
export let treeData = [
    {
        name: 'First top node',
        collapsed: false,
        items: [
            {
                name: '1',
                collapsed: false
            },
            {
                name: '2',
                collapsed: false
            },
            {
                name: '3',
                collapsed: false
            }
        ]
    },
    {
        name: 'Second top node',
        collapsed: false,
        items: [
            {
                name: 'Fly',
                collapsed: false,
                items: [
                    {
                        name: 'Inner',
                        collapsed: false
                    }
                ]

            },
            {
                name: 'High',
                collapsed: false
            }

        ]
    }
];