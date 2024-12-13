const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },email: {
        type: String,
        required: true,
        unique: true,
        minlength: [ 5, 'Email must be at least 5 characters long' ],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        default: 'inactive',
        enum: ['active', 'inactive']
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3,"color must be at least more than 3 character"]
        },
        plate:{
            type: String,
            required: true,
            minlength:[3,"plate number must be at least 3 character"]
        },
        capacity:{
            type: Number,
            required: true,
            min:[1,"mininum capacity should at least one"]
          
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car',  'bike','auto']
        },
        location:{
            lat:{
                type: Number,
                
            },
            lng:{
                type: Number,
            }
        }

    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}




const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel
