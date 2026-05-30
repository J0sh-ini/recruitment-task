const httpStatus = require('http-status');

exports.loginController = async (req, res) => {
    const {mail, password} = req.body;
    let isMatch = (mail == 'hello@gmail.com' && password == 'true');
    if(!isMatch) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: 'Authentication Unsuccessful',
   });
    }
    return res.status(httpStatus.OK).json({
      message: 'Authentication Successful',
   });
}
