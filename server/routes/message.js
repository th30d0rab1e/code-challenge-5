var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

router.delete('/:id', function(req, res) {
  console.log('delete with id: ', req.params.id);

  Message.findByIdAndRemove(
    { _id: req.params.id }, // how do i find this document?
    function(err, data) {
      if(err) {
        console.log('remove error: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  )

});

// router.put('/:id', function(req, res) {
//   console.log('new location: ', req.body);
//
//   Message.findByIdAndUpdate(
//     { _id: req.params.id }, // how do i find this document?
//     { $set: { location: req.body.location } }, // data to replace
//     function(err, data) {
//       if(err) {
//         console.log('update error: ', err);
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(200);
//       }
//     }
//   )
//
// });



router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});

router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from our Person model
  var addMessage = new Message(req.body);

  // insert into our collection
  addMessage.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});



module.exports = router;
