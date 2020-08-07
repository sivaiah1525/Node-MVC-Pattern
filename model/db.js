'use strict';

const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/test';

const connectToDb = async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('successfully database connected');
    } catch (error) {
        process.exit(0);
    }
}

connectToDb();

const db = mongoose.connection;

module.exports = db;