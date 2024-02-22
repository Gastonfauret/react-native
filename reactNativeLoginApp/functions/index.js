const functions = require("firebase-functions");
const admin = require('firebase-admin');

const createUser = require("./createUser");

exports.createUser = functions.https.onRequest(createUser);
