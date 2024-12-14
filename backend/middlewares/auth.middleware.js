const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isblacklisted = await blackListTokenModel.findOne({token: token});
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

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({ message: 'Token not Found' });
    }
    const isblacklisted = await blackListTokenModel.findOne({token: token});
    if(isblacklisted){
        return res.status(401).json({ message: 'Access denied' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain
        
        next();
    }
    catch(err) {
        res.status(401).json({ message: 'Invalid token' });
    }
}