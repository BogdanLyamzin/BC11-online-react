const {Conflict} = require("http-errors");
const jwt = require("jsonwebtoken");

const {User} = require("../../models");

const {SECRET_KEY} = process.env;

const register = async(req, res)=> {
    const {email, password, name} = req.body;
    const user = await User.findOne({email});

    if(user){
        throw new Conflict("Already registered");
    }
    const newUser = new User({email, name});
    newUser.setPassword(password);

    const result = await newUser.save();

    const payload = {
        id: result._id
    }

    const token = jwt.sign(payload, SECRET_KEY);

    await User.findByIdAndUpdate(result._id, {token});

    res.status(201).json({
        user: {
            name: result.name,
            email: result.email
        },
        token
    });
};

module.exports = register;
