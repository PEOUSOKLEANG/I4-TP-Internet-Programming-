const Users = require("../models/users");

const login = async(email, password) => {
    try {
        const user = await Users.findOne({ email });
        if (!user) {
            throw 'The user is not found~'
        }
        if (!user.macthesPassword(password)) {
            throw "The user's information is incorrect~"
        }
        return {
            success: true,
            data: null,
        }
    } catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
};
// export data be object
module.exports = {
    login
}