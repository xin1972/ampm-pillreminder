const expressSession = require('express-session');
const connectMongo = require('connet-mongo');
const mongoose = require('mongoose');

const MongoStore = connectMongo(expressSession);

const session = expresSession({
    secret: process.env.SESSION_SECRET || 'super secret (change it)',
    saveUnitialized:false,
    resave: false,
    cookie: {
        secure: process.env.SESSION_SECURE || false,
        httpOnly: true,
        maxAge: process.env.SESSION_MAX_AGE || 3600000,
    },
    store: new mongoStore({
        mongoseConnection: mongoose.connection,
        ttl: process.env.SESSION_MAX_AGE || 3600,
    })
});

module.exports = session;