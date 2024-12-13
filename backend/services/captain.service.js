const captainModel = require('../models/captain.model')



module.exports.createCaptain = async ({firstname,lastname,email,password,vehicleType,capacity,color,plate}) => {
    if (!firstname || !email || !password || !vehicleType || !capacity || !color || !plate) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
       vehicle:{ vehicleType,
        capacity,
        color,
        plate}
    })
}