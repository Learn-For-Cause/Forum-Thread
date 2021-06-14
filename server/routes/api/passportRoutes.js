const router = require('express').Router();
const passport = require('passport');


router.get('api/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('api/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});

module.exports = router;