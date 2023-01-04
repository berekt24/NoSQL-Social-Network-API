const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  // updateThoughts,
  // deleteThoughts,
  addReaction,
  // deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/')
  .get(getThoughts)
  .post(createThoughts);

router.route('/:thoughtId')
  .get(getSingleThought)
  // .put(updateThoughts)
  // .delete(deleteThoughts);

router.route('/:thoughtId/reactions')
  .put(addReaction);

// router.route('/:thoughtId/reactions/:reactionId')
//   .delete(removeReaction)
module.exports = router;
