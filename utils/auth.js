// add authentoactor

const authent = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {;
        next();
    }
};
module.export = authent;

// export the authentation 
