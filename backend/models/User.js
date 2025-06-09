import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fname: {type: String,
         required : true
    },
    lname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone:{
        type: String,
        required: true,
        match: [/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/, 'Please enter a valid 10-digit phone number.']
    },
    password: {
        type: String,
        required:true
    },
    date:{
        type: Date,
         default: Date.now
        }

})

export default mongoose.model('User', UserSchema)