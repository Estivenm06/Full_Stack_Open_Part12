const express = require('express');
const redis = require('../redis')
const router = express.Router();
console.log(redis);

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const statistics = await redis.getAsync('added_todos')
  res.status(200).send({added_todos: statistics})
})

module.exports = router;
