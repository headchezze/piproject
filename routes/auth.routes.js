const {Router} = require("express")
const config = require('config')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
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

        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array(),
            message: 'Некорректные данные при регистрации'})
        }

        const {email, password} = req.body;

        const candidate = await User.findOne({email: email});

        if(candidate)
        {
            return res.status(400).json({message: 'Данный пользователь уже' +
                    ' существует'});
        }
        
        const user = new User({email: email, password: password})

        await user.save()
        
        res.status(201).json({message: 'User has been created'})

    } catch(e)
    {
        res.status(500).json({message: 'Oops, something goes wrong. Try next time!'});
    }
})

router.post(
    '/login', 
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', "Enter password").exists()
    ],
    async (req, res) => {
        try
        {            
            const errors = validationResult(req)

            if(!errors.isEmpty())
            {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid login details'})
            }
            
            const {email, password} = req.body

            const user = await User.findOne({ email: email })
            if (!user)
            {
                return res.status(400).json({message: 'User not found'});
            }
            
            if (password != user.password)
            {
                return res.status(400).json({message: 'Неверный пароль' +
                        ', попробуйте снова'});
            }
            
            const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {expiresIn: '4h'}) // Проблема с user ud 45
            
            res.json({token, userId: user.id})   
            
        } catch(e)
        {
            res.status(500).json({message: 'Oops, something goes wrong. Try next time!'});
        }
})

module.exports = router;