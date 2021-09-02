const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;




//Define userSchema
const userSchema = new Schema({
    name: {
        type: String,
        required:'An user name is required'
    },
    email: {
        type: String,
        unique: true,
        required: 'A valid email is required',
        match:[EMAIL_PATTERN, 'the email is invalid']
    },
    avatar: {
        type: String,
        default: 'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'
    },
    password: {
        type: String,
        required: 'A valid password is required',
        match: [PASSWORD_PATTERN,'the password is invalid'],
    },
    phone: {
        type: String,
        //unique: true,
        required: true
    },
})

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password,10).then((hash) => {
            this.password = hash;
            next();
        })
    } else {
        next()
    }
});



const User = mongoose.model('User', userSchema)
module.exports = User