module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                use: 'ts-loader',
            },
        ],
    },
    output: {
        library: {
            name: 'snetwork',
            type: 'global',
            export: 'default',
        },
    },
};
