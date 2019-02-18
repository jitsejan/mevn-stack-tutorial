var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(
      {
        "characters" : [
          {
            name: "Mario",
            color: "red"
          },
          {
            name: "Luigi",
            color: "green"
          }
        ]
      }
    )
  })

module.exports = router;
