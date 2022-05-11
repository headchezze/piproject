const {Router} = require("express")
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password must have at least 6 characters').isLength({min: 6})
    ],
    async (req, res) => {
    try
    {
        const errors = validationResult(req)

        if(!errros.isEmpty())
        {
            return res.status(400).json({errors: errors.array(),
            message: 'Invalid data'})
        }

        const {email, password} = req.body;

        const candidate = await User.findOne({email: email});

        if(candidate)
        {
            return res.status(400).json({message: 'Such a user already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 23)
        const user = new User({email: email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'User has been created'})

    } catch(e)
    {
        res.status(500).json({message: 'Oops, something goes wrong. Try next time!'});
    }
})

router.post('/login', async (req, res) => {
    
})

module.exports = router;