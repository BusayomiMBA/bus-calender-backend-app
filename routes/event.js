const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');
// routes
router.get('/', ctrl.event.index);
router.get('/:id', ctrl.event.show);

router.post('/', passport.authenticate('jwt', { session: false }), ctrl.event.create); // session: false ???
router.put('/:id', ctrl.event.update);
router.delete('/:id', ctrl.event.destroy);

// exports
module.exports = router;