module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                use: 'ts-loader',
                resolve: {
                    extensions: ['.ts', '.js'],
                    fullySpecified: false,
                },
            },
        ],
    },
    externals: {
        'pixi.js': 'PIXI',
    },
    output: {
        library: {
            name: 'snetwork',
            type: 'global',
            export: 'default',
        },
    },
};
