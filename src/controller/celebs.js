const asyncHandler = require('../utils/async-handler');
const celebsService = require('../services/celebs');

const insertData = asyncHandler(async(req,res) => {
    const requestData = {...req.body,createdBy:req.user.id};
    const response = await celebsService.insertData(requestData);

    return res.CREATED(response);
});

const getAllCelebs = asyncHandler(async(req,res) => {
    const response = await celebsService.fetchcelebs();

    return res.OK(response);
})
module.exports = {
    insertData,
    getAllCelebs,
}