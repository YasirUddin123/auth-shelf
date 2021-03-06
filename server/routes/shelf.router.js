
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 * Non logged in users should not have access
    to this page (rejectUnauthenticated)
 */
router.get('/', (req, res) => {
  // console.log('in shelf.router, GET route');

  let queryText = `
    SELECT * FROM "item";
    `

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */

router.post('/', rejectUnauthenticated, (req, res) => {
  // console.log('is authenticated?', req.isAuthenticated());
  // console.log('user', req.user);
  console.log('req.body', req.body);
  const sqlText = `
    INSERT INTO "item"
      ("description", "image_url", "user_id")
      VALUES
      ($1, $2, $3);
  `;
  const sqlValues = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const query = `
      DELETE FROM "item"
      WHERE "item"."id"=$1;
  `;
  const sqlValues = [req.params.id]
  console.log(query);
pool.query(query, sqlValues)
  .then( result => {
    res.sendStatus(201)
  })
  .catch(err => {
    console.log('ERROR: DELETE request failed:', err);
    res.sendStatus(500)
  })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
