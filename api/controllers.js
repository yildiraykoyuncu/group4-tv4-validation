'use strict'

const fs = require('fs');
const path = require('path');
const tv4 = require('tv4');
const config = require('../config');
const util = require('util')

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const SCHEMA = path.join(__dirname, '/..', config.DATA_DIR, '/_-schema.json');
const DATA_PATH = path.join(__dirname, '/..', config.DATA_DIR, '/data.json');

const controllers = {
  hello: (req, res) => {
    res.json({ message: 'hello!' });
  },

  getAllHandler: async (req, res) =>{
    try{
      const places = await readFilePromise(DATA_PATH, 'utf8');
      res.send(places)
console.log(places)

    }catch(err){
      console.log(DATA_PATH)
res.status(404).send(err)
    }
  }

};

module.exports = controllers;
