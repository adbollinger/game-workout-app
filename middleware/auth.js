const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.cookies.token || '';

    try {
        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, config.get('jwtSecret'), (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } catch {
        return res.sendStatus(500);
    }
}

module.exports = auth;