//
const DaffiArtifact = {
    address: {
        5: import.meta.env.VITE_CONTRACT_ADDRESS,
        1337: import.meta.env.VITE_TEST_CONTRACT_ADDRESS,
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'id',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'ipfsHash',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'description',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'likes',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'author',
                    type: 'address',
                },
            ],
            name: 'PostCreated',
            type: 'event',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
            constant: true,
        },
        {
            inputs: [],
            name: 'postCount',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
            constant: true,
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'posts',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'id',
                    type: 'uint256',
                },
                {
                    internalType: 'string',
                    name: 'message',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'ipfsHash',
                    type: 'string',
                },
                {
                    internalType: 'uint256',
                    name: 'likes',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'author',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
            constant: true,
        },
        {
            inputs: [
                {
                    internalType: 'string',
                    name: '_ipsHash',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_description',
                    type: 'string',
                },
            ],
            name: 'newPost',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default DaffiArtifact;
