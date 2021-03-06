/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var librariesRouter = express.Router();

  librariesRouter.get('/', function(req, res) {
    res.send({
      'libraries': []
    });
  });

  librariesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  librariesRouter.get('/:id', function(req, res) {
    res.send({
      'libraries': {
        id: req.params.id
      }
    });
  });

  librariesRouter.put('/:id', function(req, res) {
    res.send({
      'libraries': {
        id: req.params.id
      }
    });
  });

  librariesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/libraries', require('body-parser').json());
  app.use('/api/libraries', librariesRouter);
};
