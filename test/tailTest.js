const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);