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

    }catch(err){
      res.status(404).send(err)
    }
  },

  getPlaceHandler: async(req, res) =>{
    try{
      const id = Number(req.params.id);
      const response = await readFilePromise(DATA_PATH, 'utf8');
      const places = await JSON.parse(response);
      const place = places.filter(place =>{
        return place.id === id;
      });
      const stringifiedPlace = JSON.stringify(place[0])
      res.send(stringifiedPlace)

    }catch(err){
      res.status(404).send(err)
    }
  }

};

module.exports = controllers;
