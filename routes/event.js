const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');
// routes
router.get('/', ctrl.event.index);
router.get('/:id', ctrl.event.show);

//by user logged in they will be able to create a event
//userID is going to be the second user 
router.post('/:userID', passport.authenticate('jwt', { session: false }), ctrl.event.create); // session: false ???
router.put('/:id', ctrl.event.update);
router.delete('/:id', ctrl.event.destroy);


// exports
module.exports = router;