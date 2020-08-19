const { check } = require('express-validator');

exports.userSignupValidator = [
	check('name').not().isEmpty().withMessage('Name is required'),
	check('email').isEmail().withMessage('Must be a valid Email address'),
	check('password')
		.isLength({ min: 8 })
		.withMessage('Password must be atleast 8 characters long'),
];

exports.userSigninValidator = [
	check('email').isEmail().withMessage('Must be a valid Email address'),
	check('password').not().isEmpty().withMessage('Password is required'),
];