const router = require('express').Router();
const routesApi = require('./api');
const routesHome = require('./homeRoutes');
router.use('/', routesHome);
router.use('/api', routesApi);
module.exports = router;
