const userService = require('../services/user');
const asyncHandler = require('../utils/async-handler');

const signup = asyncHandler(async (req, res) => {
    const requestData = {...req.body};
    
    const responseRecord = await userService.signup({
            name: requestData.name,
            email: requestData.email,
            password: requestData.password,
        });
   
    return res.OK(responseRecord);
});

const login = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    const token = await userService.signin({email,password});
    
    return res.OK(token);
});



module.exports = {
    signup,
    login,  
}