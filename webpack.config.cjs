module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                use: 'ts-loader',
            },
        ],
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8888',
            'Access-Control-Allow-Methods': 'GET',
        },
    },
    output: {
        library: 'snetwork',
    },
};
