const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isblacklisted = await userModel.findOne({token: token});
    if(isblacklisted){
        return res.status(401).json({ message: 'Access denied' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        next();
    }
    catch(err) {
        res.status(401).json({ message: 'Invalid token' });
    }
}