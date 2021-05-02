import dotenv from 'dotenv';
dotenv.config();

import webpack from 'webpack';
import express from 'express';
import path from 'path';
import helmet from 'helmet';

const port: number | string = process.env.PORT || 3000;
const app: express.Application = express();

if (process.env.NODE_ENV === 'development') {
    console.log('[server] Development environment');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const webpackConfig = require('./webpack.config');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const webpackDevMiddleware = require('webpack-dev-middleware');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: port, hot: true };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    console.log('[server] Production environment');
    app.use(express.static(path.join(__dirname, 'build')));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies()); // To prevent loading content with Adobe Flash and Acrobat
    app.disable('x-powered-by'); // To prevent possible attacks to certain dependencies we're using
}

app.get('/', (req: express.Request, res: express.Response): void => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (): void => console.log(`Server running on port ${port}`));