

const { JWT_SECRET} = require ("./config");
const jwt = require ("jsonwebtoke");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeade.startsWith('Bearer')){
        return res.status(403).json({});
    }

    const token = authHeader.split('')[1];

    try {
        const decoded = jwt.verify (token, JWT_SECRETq);
        req.userId = decoded.userId;

        next();
    } catch (err){
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}