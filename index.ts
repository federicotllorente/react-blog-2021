// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ]
});

require('./server');