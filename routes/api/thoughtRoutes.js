const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/')
  .get(getThoughts)
  .post(createThoughts);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

router.route('/:thoughtId/reactions')
  .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)
module.exports = router;
