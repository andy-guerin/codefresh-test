const express = require('express');
//Pino logging framework used as provides simple, structured logging
const pino = require('pino');
const expressPino = require('express-pino-logger');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });
//Application information hard-coded for this test app
const PORT = process.env.PORT || 8080;
const SERVICE_NAME = 'andy-guerin-engineer-test-app';
const VERSION = '1.0.0';
const COMMIT_SHA = 'abc57858585';

const app = express();


// Log every request using Express middleware approach
app.use(expressLogger);

//Only get supported to enforce apropriate client usage
app.get('/info', (req, res) => {
    logger.info('Info endpoint called');

    let payload = {
        'service_name': SERVICE_NAME,
        'version': VERSION,
        'git_commit_sha': COMMIT_SHA,
        'environment': {
            'service_port': PORT,
            'log_level': logger.level     
        }
    };

    res.status(200).json(payload);
});

app.listen(PORT, () => logger.info(`${SERVICE_NAME} listening on port ${PORT}!`));
module.exports = app;
