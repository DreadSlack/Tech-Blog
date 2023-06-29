const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            req.statusCode(200).json(userInfo)
        });
    }   catch (err){
        res.status(400).json(err);
    };
});

router.post('/login', async (req, res) => {
    try{
        const userInfo = await User.findOne({ where: {email: req.body.email} });

        if (!userInfo){
            res.status(400).json({ message: 'Wrong username/email/password please try again!'});
            return;
        }
        const passwordCheck = await userInfo.passYesNo(req.body.password);

        if (!passwordCheck) {
            res.status(400).json({ message: 'Wrong username/email/password please try again!'});
        }
        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            res.json({ user: userInfo, message: 'You have been logged in! :)'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
