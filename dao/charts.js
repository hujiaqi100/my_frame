const express = require('express');
const router = express.Router();

router.get('/getData', (req, res) => {
  res.send('data');
});

router.get('/kg-economics/material/pageList', (req, res) => {
  res.send({
    data: {
      records: [
        {
          enterpriseName: '1'
        }
      ]
    }
  })
})
router.get('/kg-economics/material/detail', (req, res) => {
  res.send({
    enterpriseName: '1'
  })
})

module.exports = router;