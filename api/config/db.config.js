const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ampm-pillreminder';

mongoose.connect(MONGODB_URI, { usecresteIndex: true, useUnifiedTopology: true, useNewUrlparser: true})
    .then(() => console.info(`Succesfully connected to the database ${MONGODB_URI}`))
    .catch(error => {
        console.error('An error ocurred trying to connect to the database', error);
        process.exit(1);
    })

    process.on('SIGNT', () => {
        mongoose.disconnect()
            .then(() => {
                console.info('Succesfully disconnected mongodb');
                process.exit(0);
            })
            .catch(error => {
                console.error('An error ocurred tying to disconect mongoose', error);
                process.exit(1);
            })
    })