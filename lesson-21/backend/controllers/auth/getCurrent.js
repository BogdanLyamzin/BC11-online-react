const {User} = require("../../models");

const getCurrent = async(req, res)=> {
    const {name, email, token} = req.user;
    res.json({
        user: {
            name, 
            email
        }
    });
};

module.exports = getCurrent;